import { atom } from 'recoil';
import { Atoms } from '@recoil/constants';
import { saveOnLocalStorage } from '@utils/recoil';

export type ModalProps = {
  open: boolean;
  onOk?: () => void;
  onCancel?: () => void;
};

export type CommonModalProps = {
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  message?: string;
} & ModalProps;

export const CommonModalState = atom<CommonModalProps>({
  key: Atoms.CommonModal,
  default: {
    open: false,
    size: 'md',
    title: undefined,
    message: undefined,
  },
});

export type PolicyModalProps = {
  agree?: boolean;
} & ModalProps;

export const PolicyModalState = atom<PolicyModalProps>({
  key: Atoms.PolicyModal,
  default: {
    open: false,
    agree: false,
  },
  effects: [
    saveOnLocalStorage(),
  ],
});

export type AskToJoinModalProps = {
  birth: string;
  zipcode?: string;
} & ModalProps;

export const AskToJoinModalState = atom<AskToJoinModalProps>({
  key: Atoms.AskToJoinModal,
  default: {
    open: false,
    birth: '',
  },
});

export type CookieProps = {
  allow: 'none' | 'all' | 'essential',
};

export const CookieState = atom<CookieProps>({
  key: Atoms.Cookie,
  default: {
    allow: 'none',
  },
  effects: [
    saveOnLocalStorage(),
  ],
});
