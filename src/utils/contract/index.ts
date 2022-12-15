import { useEffect } from 'react';
import { useWalletConnect } from '@utils/walletconnect';
import { useMetamaskSDK } from '@utils/metamask';
import { AbiItem } from 'web3-utils';
import { ContractInterface } from 'ethers';
import Web3 from 'web3';

export const GasFee = Web3.utils.toWei('100', 'gwei');

export interface NileContract {
  address: string;
  abi: AbiItem[] | ContractInterface;
}

export type NileContractProps = {
  provider: 'metamask' | 'walletconnect';
};

export const useNileContract = ({ provider }: NileContractProps) => {
  const { login: loginViaWalletConnect } = useWalletConnect();
  const { login: loginViaMetamask } = useMetamaskSDK();

  useEffect(() => {
    switch (provider) {
      case 'metamask':
        loginViaMetamask();
        break;
      case 'walletconnect':
        loginViaWalletConnect();
        break;
      default:
        break;
    }
  }, [provider, loginViaMetamask, loginViaWalletConnect]);

  // TODO: 로그인 방식에 따라서 컨트랙트를 호출하는 방식 변경
  return undefined;
};
