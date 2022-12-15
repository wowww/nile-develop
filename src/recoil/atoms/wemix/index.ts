import { atom } from 'recoil';
import { Atoms } from '@recoil/constants';

export type WemixCommonModalType = {
  open: boolean;
  requestId: string;
  onSuccess?: <T>(res: T) => void;
  onError?: <T>(error: T) => void;
  type?: 'login' | 'transaction';
};

export const WemixCommonModal = atom<WemixCommonModalType>({
  key: Atoms.WemixCommonModal,
  default: {
    open: false,
    requestId: '',
    onSuccess: undefined,
    onError: undefined,
    type: undefined,
  },
});
