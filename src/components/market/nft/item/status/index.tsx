import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useCountdown } from '@utils/countdown';
import { useMemo } from 'react';
import moment from 'moment';
import { Tag as AntdTag } from 'antd';
import classNames from 'classnames';

export enum MarketNftItemStatusType {
  UPCOMING = 'upcoming',
  AUCTION_LIVE_BEFORE_BID = 'action-live-before-bid',
  AUCTION_LIVE_AFTER_BID = 'auction-live-after-bid',
  AUCTION_CLOSED = 'auction-closed',
  LISTING = 'listing',
  OFFER_BEFORE = 'offer-before',
  OFFER_ONGOING = 'offer-ongoing',
  NOT_FOR_SALE = 'not-for-sale',
}

export type AuctionNftItemProps = {
  status: MarketNftItemStatusType;
  remain?: number;
};

export const MarketNftItemStatus = ({ status, remain }: AuctionNftItemProps) => {
  const isCountdown = useMemo(() => {
    return [
      MarketNftItemStatusType.AUCTION_LIVE_AFTER_BID,
    ].includes(status);
  }, [status]);

  const { remainTime } = useCountdown({ seconds: remain ?? 0, active: isCountdown });

  const live = useMemo(() => {
    return [
      MarketNftItemStatusType.AUCTION_LIVE_BEFORE_BID,
      MarketNftItemStatusType.AUCTION_LIVE_AFTER_BID,
    ].includes(status);
  }, [status]);

  const inverted = useMemo(() => {
    return [
      MarketNftItemStatusType.AUCTION_LIVE_AFTER_BID,
    ].includes(status);
  }, [status]);

  const closed = useMemo(() => {
    return [
      MarketNftItemStatusType.AUCTION_CLOSED,
    ].includes(status);
  }, [status]);

  const disabled = useMemo(() => {
    return [
      MarketNftItemStatusType.NOT_FOR_SALE,
    ].includes(status);
  }, [status]);

  const remainTimeText = useMemo(() => {
    const time = moment().startOf('day').seconds(remainTime);
    return time.format('HH[h] : mm[m] : ss[s]');
  }, [remainTime]);

  const messages = ({
    [MarketNftItemStatusType.UPCOMING]: 'Upcoming',
    [MarketNftItemStatusType.AUCTION_LIVE_BEFORE_BID]: 'Auction Now',
    [MarketNftItemStatusType.AUCTION_LIVE_AFTER_BID]: remainTimeText,
    [MarketNftItemStatusType.AUCTION_CLOSED]: 'Closed',
    [MarketNftItemStatusType.LISTING]: 'For Sale',
    [MarketNftItemStatusType.OFFER_BEFORE]: 'Open for Offers',
    [MarketNftItemStatusType.OFFER_ONGOING]: 'Open for Offers',
    [MarketNftItemStatusType.NOT_FOR_SALE]: 'Not Sale',
  });

  return (
    <Tag className={classNames({ live, inverted, closed, disabled })}>
      {messages[status]}
    </Tag>
  );
};

MarketNftItemStatus.defaultProps = {
  remain: 0,
};

const Tag = styled(AntdTag)(({ className }) => [
  tw`inline-flex`,
  tw`w-min`,
  tw`justify-center`,
  tw`items-center`,
  tw`px-2 py-0.5`,
  tw`border`,
  tw`border-black`,
  tw`rounded-full`,
  tw`text-black`,
  tw`text-xs`,

  className?.includes('live') && [
    tw`before:w-1.5`,
    tw`before:h-1.5`,
    tw`before:mr-1`,
    tw`before:bg-negative`,
    tw`before:clear-both`,
    tw`before:inline-flex`,
    tw`before:content-[""]`,
    tw`before:animate-auction-live`,
    tw`before:rounded-full`,
    tw`font-bold`,
    tw`text-negative`,
    tw`border-gray-60`,
  ],

  className?.includes('inverted') && [
    tw`bg-black`,
    tw`text-white`,
  ],

  className?.includes('closed') && [
    tw`bg-gray-60`,
    tw`text-white`,
    tw`border-gray-60`,
  ],

  className?.includes('disabled') && [
    tw`border-gray-60`,
    tw`text-gray-60`,
  ],
]);
