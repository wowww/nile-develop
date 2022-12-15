import { useRecoilValue } from 'recoil';
import { CryptoWallet } from '@recoil/atoms';
import { useMetamaskSDK } from '@utils/metamask';
import { useWalletConnect } from '@utils/walletconnect';
import { useMemo } from 'react';

export const useWeb3Provider = () => {
  const wallet = useRecoilValue(CryptoWallet);
  const metamask = useMetamaskSDK();
  const walletconnect = useWalletConnect();

  const provider = useMemo(() => {
    if (!wallet.provider) return metamask;
    return ({
      metamask,
      walletconnect,
    })[wallet.provider];
  }, [wallet, metamask, walletconnect]);

  return {
    ...provider,
  };
};
