import { selector } from 'recoil';
import { CryptoWallet } from '@recoil/atoms';

export const CheckLogin = selector({
  key: 'isLogon',
  get: ({ get }) => {
    const wallet = get(CryptoWallet);
    return wallet.address && wallet.address.length > 0;
  },
});
