/**
 * https://docs.wemix.com/v/ko/quick-start/account/use-metamask
 */
import { useWeb3React } from '@web3-react/core';
import { injected } from '@utils/connectors';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { CryptoWallet } from '@recoil/atoms';
import Web3 from 'web3';
import { isMobile } from 'react-device-detect';
import { DeployRouterMetamask } from '@utils/contract/metamask/DeployRouter';
import { CurateMarketMetamask } from '@utils/contract/metamask/CurateMarket';
import { NileERC721Metamask } from '@utils/contract/metamask/NileERC721';
import { Address } from '@/models/nile/contract';
import { NileERC1155Metamask } from '@utils/contract/metamask/NileERC1155';
import { TokenManagerMetamask } from '@utils/contract/metamask/TokenManager';
import { OpenMarketMetamask } from '@utils/contract/metamask/OpenMarket';
import { LoginModalState } from '@recoil/atoms/auth';

export const useMetamaskSDK = () => {
  const [web3, setWeb3] = useState<Web3>();
  const { account, active, activate, deactivate } = useWeb3React();
  const [wallet, setWallet] = useRecoilState(CryptoWallet);
  const setModalState = useSetRecoilState(LoginModalState);

  const connectMetamaskMobile = () => {
    const dappUrl = window.location.href.split('//')[1].split('/')[0];
    const metamaskAppDeepLink = `https://metamask.app.link/dapp/${dappUrl}`;
    window.open(metamaskAppDeepLink, '_self');
  };

  const login = useCallback(() => {
    if (active) {
      deactivate();
      return;
    }
    activate(injected, (error) => {
      console.log(error);
      if (isMobile) {
        connectMetamaskMobile();
      } else if (error) {
        window.open('https://metamask.io/download.html');
      }
    }).catch((error) => {
      console.log(error);
    });
  }, [activate, active, deactivate]);

  const contracts = useMemo(() => {
    if (!wallet.address) return undefined;
    return {
      DeployRouter: new DeployRouterMetamask(wallet.address),
      TokenManager: new TokenManagerMetamask(wallet.address),
      CurateMarket: new CurateMarketMetamask(wallet.address),
      OpenMarket: new OpenMarketMetamask(wallet.address),
      NileERC721: (contract: Address) => new NileERC721Metamask(contract, wallet.address ?? ''),
      NileERC1155: (contract: Address) => new NileERC1155Metamask(contract, wallet.address ?? ''),
    };
  }, [wallet]);

  const signing: (data: string) => Promise<string | undefined> = useCallback((data: string) => {
    if (web3 && wallet.address) {
      return web3.eth.personal.sign(data, wallet.address, '');
    }
    return Promise.reject(new Error('not configured'));
  }, [web3, wallet]);

  useEffect(() => {
    if (account) {
      setWallet({ address: account, provider: 'metamask' });
      setModalState((prev) => ({ ...prev, open: false }));
    }
  }, [account, setWallet, setModalState]);

  useEffect(() => {
    if (!web3) {
      // @ts-ignore
      setWeb3(new Web3(window.ethereum));
    }
  }, [web3]);

  return {
    web3,
    login,
    wallet,
    contracts,
    signing,
    disconnect: deactivate,
  };
};
