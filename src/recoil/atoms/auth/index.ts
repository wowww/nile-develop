import { atom } from 'recoil';
import { Atoms } from '@recoil/constants';

export type LoginModal = {
  open: boolean;
  uri?: string;
};

export const LoginModalState = atom<LoginModal>({
  key: Atoms.LoginModal,
  default: {
    open: false,
    uri: undefined,
  },
});

