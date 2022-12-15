import { atom } from 'recoil';
import { Atoms } from '@recoil/constants';
import { handleAccount, saveOnLocalStorage } from '@utils/recoil';

export type ModalState = {
  open: boolean;
};

export type CryptoWallet = {
  provider?: 'metamask' | 'walletconnect';
  address?: string;
};

export const CryptoWallet = atom<CryptoWallet>({
  key: Atoms.CryptoWallet,
  default: {
    address: undefined,
    provider: undefined,
  },
  effects: [
    saveOnLocalStorage(),
    handleAccount(),
  ],
});

export type NileAccount = {
  // TODO: any ->
  account?: {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    address?: string;
    authorities?: any[];
    country?: any;
    img?: string;
    nickname?: string;
    nonce?: number;
    roles?: any[];
    snsLinks?: any[];
  },
  token?: string,
};

export const NileAccount = atom<NileAccount>({
  key: Atoms.NileAccount,
  default: {
    account: undefined,
    token: undefined,
  },
  effects: [
    saveOnLocalStorage(),
  ],
});

export const WalletModalState = atom<ModalState>({
  key: Atoms.WalletModal,
  default: {
    open: false,
  },
});

export const AccountModalState = atom<ModalState>({
  key: Atoms.AccountModal,
  default: {
    open: false,
  },
});


