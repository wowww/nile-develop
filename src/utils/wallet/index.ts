import { useResetRecoilState } from 'recoil';
import { CryptoWallet } from '@recoil/atoms';
import { useMetamaskSDK } from '@utils/metamask';
import { useCallback } from 'react';

export const useWalletUtil = () => {
  const resetWallet = useResetRecoilState(CryptoWallet);
  const { disconnect } = useMetamaskSDK();

  const logout = useCallback(() => {
    resetWallet();
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('walletconnect');
    }
    disconnect();
  }, [resetWallet, disconnect]);


  const shorten = (address?: string) => {
    const shortenRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;
    const match = address?.match(shortenRegex);
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
  };

  return {
    logout,
    shorten,
  };
};
