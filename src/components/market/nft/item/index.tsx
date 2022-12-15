import { MarketNftItemStatusType } from '@components/market/nft/item/status';
import { MarketNftListItem } from '@components/market/nft/item/list';
import { MarketNftGridItem } from '@components/market/nft/item/grid';
import Nft from '@/models/nile/market/nft';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';

export type MarketNftItemProps = {
  favoriteVisible?: boolean,
  viewType?: 'list' | 'grid';
  data?: Omit<MarketNftItemProps, 'viewType'>[];
} & Nft;

export const MarketNftItemPriceTitle = {
  [MarketNftItemStatusType.UPCOMING]: 'Starting Bid',
  [MarketNftItemStatusType.AUCTION_LIVE_BEFORE_BID]: 'Starting Bid',
  [MarketNftItemStatusType.AUCTION_LIVE_AFTER_BID]: 'Current Bid',
  [MarketNftItemStatusType.AUCTION_CLOSED]: 'Final Bid',
  [MarketNftItemStatusType.LISTING]: 'Fixed Price',
  [MarketNftItemStatusType.OFFER_BEFORE]: 'Last Price',
  [MarketNftItemStatusType.OFFER_ONGOING]: 'Current Offer',
  [MarketNftItemStatusType.NOT_FOR_SALE]: 'Last Price',
};

export const MarketNftItem = ({ viewType, data, ...props }: MarketNftItemProps) => {
  const dataLength = Number(data?.length);
  return ({
    'list': <MarketNftListItem {...props} />,
    'grid': (dataLength <= 2 ? <ListWrapper><MarketNftListItem {...props} /></ListWrapper> : <MarketNftGridItem {...props} /> ),
  })[viewType ?? 'grid'];
};

MarketNftItem.defaultProps = {
  remainTime: 0,
};

const ListWrapper = styled.div([
  tw`w-full`,
  tw`min-w-full`,
  css`
    &:last-child {
      div {
        border: none;
      }
    }
  `,
])