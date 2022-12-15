import styled from '@emotion/styled';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CryptoWallet, WalletModalState } from '@recoil/atoms';
import tw from 'twin.macro';
import { WalletModal } from '@components/common/auth/wallet/modal';
import { useWalletFormatter } from '@utils/formatter/wallet';

export const WalletButton = (props: any) => {
  const wallet = useRecoilValue(CryptoWallet);
  const { shorten } = useWalletFormatter();
  const setWalletModal = useSetRecoilState(WalletModalState);

  return <WalletModal />
};
