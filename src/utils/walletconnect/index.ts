import WalletConnectProvider from '@walletconnect/web3-provider';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { LoginModalState } from '@recoil/atoms/auth';
import { useCallback, useEffect, useMemo } from 'react';
import { CryptoWallet } from '@recoil/atoms';
import Web3 from 'web3';
import { AbstractProvider } from 'web3-core';
import { JsonRpcPayload, JsonRpcResponse } from 'web3-core-helpers';
import { Address } from '@/models/nile/contract';
import { DeployRouterWalletConnect } from '@utils/contract/walletconnect/DeployRouter';
import { TokenManagerWalletConnect } from '@utils/contract/walletconnect/TokenManager';
import { OpenMarketWalletConnect } from '@utils/contract/walletconnect/OpenMarket';
import { CurateMarketWalletConnect } from '@utils/contract/walletconnect/CurateMarket';
import { NileERC721WalletConnect } from '@utils/contract/walletconnect/NileERC721';
import { NileERC1155WalletConnect } from '@utils/contract/walletconnect/NileERC1155';

declare class WalletConnectWeb3Provider
  extends WalletConnectProvider
  implements AbstractProvider
{
  sendAsync(
    payload: JsonRpcPayload,
    callback: (error: Error | null, result?: JsonRpcResponse) => void
  ): void;
}

export const useWalletConnect = () => {
  const [wallet, setWallet] = useRecoilState(CryptoWallet);
  const resetWallet = useResetRecoilState(CryptoWallet);
  const setModalState = useSetRecoilState(LoginModalState);

  const provider = useMemo(() => {
    return new WalletConnectProvider({
      chainId: 1112,
      rpc: {
        1111: 'https://api.wemix.com',
        1112: 'https://api.test.wemix.com',
      },
      qrcodeModal: {
        open(uri: string, cb: any, opts?: any) {
          setModalState({ open: true, uri });
        },
        close() {
          setModalState({ open: false });
        },
      },
    });
  }, [setModalState]);

  useEffect(() => {
    // Subscribe to connection events
    provider.connector?.on('connect', (error, payload) => {
      if (error) {
        throw error;
      }

      // Get provided accounts and chainId
      const { accounts, chainId } = payload.params[0];
      const [account] = accounts;
      setWallet({ address: account, provider: 'walletconnect' });
      console.log('connect', accounts, chainId);
    });

    provider.connector?.on('session_update', (error, payload) => {
      if (error) {
        throw error;
      }

      // Get updated accounts and chainId
      const { accounts, chainId } = payload.params[0];
      console.log('session update', accounts, chainId);
    });

    provider.connector?.on('disconnect', (error, payload) => {
      if (error) {
        throw error;
      }
      resetWallet();
    });
  }, [provider, setWallet, resetWallet]);

  const web3 = useMemo(() => new Web3(provider as WalletConnectWeb3Provider), [provider]);

  const personal = useMemo(() => web3.eth.personal, [web3.eth.personal]);

  const login = async () => {
    setModalState((prev) => ({ ...prev, open: true }));
    const connector = provider.connector ?? await provider.getWalletConnector({ disableSessionCreation: false });
    connector.connect().then(({ accounts }) => {
      const [account] = accounts;
      setWallet({ address: account, provider: 'walletconnect' });
    });
  };

  const signing: (data: string) => Promise<string | undefined> = useCallback(async (data) => {
    if (wallet.address) {
      return web3.eth.accounts.sign(data, wallet.address).messageHash;
    }
    return undefined;
  }, [wallet, web3]);

  const disconnect = async () => {
    resetWallet();
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('walletconnect');
    }
  };

  const contracts = useMemo(() => {
    if (!wallet.address) return undefined;
    return {
      DeployRouter: new DeployRouterWalletConnect(wallet.address),
      TokenManager: new TokenManagerWalletConnect(wallet.address),
      CurateMarket: new CurateMarketWalletConnect(wallet.address),
      OpenMarket: new OpenMarketWalletConnect(wallet.address),
      NileERC721: (contract: Address) => new NileERC721WalletConnect(contract, wallet.address ?? ''),
      NileERC1155: (contract: Address) => new NileERC1155WalletConnect(contract, wallet.address ?? ''),
    };
  }, [wallet]);

  return {
    web3,
    login,
    signing,
    disconnect,
    wallet,
    contracts,
  };
};
