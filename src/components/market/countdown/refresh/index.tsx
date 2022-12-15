import { useCountdown } from '@utils/countdown';
import Image from 'next/image';
import { NileCDNLoader } from '@utils/image/loader';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import cn from 'classnames';

export type MarketCountdownRefreshProps = {
  expireTime?: number;
  onRefresh?: () => void;
};

export const MarketCountdownRefresh = ({ expireTime, onRefresh }: MarketCountdownRefreshProps) => {
  const { remainTime, refresh } = useCountdown({ seconds: expireTime ?? 5, onRefresh });

  useEffect(() => {
    if (remainTime === 0) {
      setTimeout(() => {
        refresh();
      }, 1000);
    }
  }, [remainTime, refresh]);

  return (
    <Wrapper>
      <Icon
        className={cn({ refreshing: remainTime === 0 })}
        src="/icons/common/ico_refresh_countdown.svg"
        loader={NileCDNLoader}
        width={24}
        height={24}
      />
      <Counter>{remainTime}</Counter>
    </Wrapper>
  );
};

MarketCountdownRefresh.defaultProps = {
  onRefresh: undefined,
};

const Wrapper = styled.span([
  tw`absolute`,
]);

const Icon = styled(Image)(({ className }) => [
  className?.includes('refreshing') && [
    tw`animate-rotate`,
  ],
]);

const Counter = styled.span([
  tw`absolute`,
  tw`inset-0`,
  tw`flex`,
  tw`text-xs`,
  tw`items-center`,
  tw`justify-center`,
]);

MarketCountdownRefresh.defaultProps = {
  expireTime: 5,
};
