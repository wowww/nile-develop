import { atom } from 'recoil';
import { Atoms } from '@recoil/constants';

export const MarketCurrentTab = atom<string>({
  key: Atoms.MarketCurrentTab,
  default: 'collection',
});

export const MarketNftListViewType = atom<'list' | 'grid'>({
  key: Atoms.MarketNftListViewType,
  default: 'list',
});

export type IMarketFilterState = {
  selected: {
    // TODO
  }[];
};

export const MarketFilterState = atom<IMarketFilterState>({
  key: Atoms.MarketFilter,
  default: {
    selected: [],
  },
});

