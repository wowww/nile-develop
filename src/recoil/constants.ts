import { v1 } from 'uuid';

export const Atoms = {
  Counter: `Counter/${v1()}`,
  CommonModal: `common/modal/${v1()}`,
  PolicyModal: `common/policy/modal`,
  AskToJoinModal: `common/askToJoin/${v1()}`,
  Cookie: `common/cookie`,
  LoginModal: `auth/login/modal/${v1()}`,
  NileAccount: `account/nile`,
  CryptoWallet: `account/wallet`,
  WalletModal: `account/wallet/modal/${v1()}`,
  AccountModal: `account/wallet/modal/${v1()}`,
  MarketCurrentTab: `market/tab/current/${v1()}`,
  MarketNftListViewType: `market/nft/list/view-type/${v1()}`,
  MarketFilter: `market/filter/${v1()}`,
  WemixCommonModal: `wemix/common/modal/${v1()}`,
  WemixAccount: `wemix/account/${v1()}`,
};

export enum Selectors {

}
