import { useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import tw from 'twin.macro';
import { useCountdown } from '@utils/countdown';
import { CardAuctionCountdownItem } from '@components/market/countdown/card/item';

export type CardAuctionCountdownProps = {
  expireTime: number;
  shrink?: boolean;
};

export const MarketCountdownCard = ({ expireTime, shrink }: CardAuctionCountdownProps) => {
  const { remainTime } = useCountdown({ seconds: expireTime });

  const time = useMemo(() => {
    return moment.duration(remainTime, 'seconds');
  }, [remainTime]);

  const days = useMemo(() => {
    return Math.floor(time.asDays());
  }, [time]);

  const hours = useMemo(() => {
    return time.hours();
  }, [time]);

  const minutes = useMemo(() => {
    return time.minutes();
  }, [time]);

  const seconds = useMemo(() => {
    return time.seconds();
  }, [time]);

  const formatted = useCallback((value: number, digit = 2) => {
    return value.toLocaleString('en-US', { minimumIntegerDigits: digit });
  }, []);

  const separator = useMemo(() => {
    return (<Separator>:</Separator>);
  }, []);

  const formattedDays = useMemo(() => {
    return (<CardAuctionCountdownItem value={formatted(days)} unit="Days" />);
  }, [days, formatted]);

  const formattedHours = useMemo(() => {
    return (<CardAuctionCountdownItem value={formatted(hours)} unit="Hours" />);
  }, [hours, formatted]);

  const formattedMinutes = useMemo(() => {
    return (<CardAuctionCountdownItem value={formatted(minutes)} unit="Minutes" />);
  }, [minutes, formatted]);

  const formattedSeconds = useMemo(() => {
    return <CardAuctionCountdownItem value={formatted(seconds)} unit="Seconds" />;
  }, [seconds, formatted]);

  return (
    <Container>
      {
        days > 0 && !shrink && (
          <>
            {formattedDays}
            {separator}
          </>
        )
      }
      {formattedHours}
      {separator}
      {formattedMinutes}
      {separator}
      {formattedSeconds}
    </Container>
  );
};

MarketCountdownCard.defaultProps = {
  shrink: false,
};

const Container = styled.div([
  tw`inline-flex`,
  tw`w-min`,
  tw`flex-row`,
  tw`items-center`,
]);

const Card = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`bg-gray-50`,
  tw`rounded`,
  tw`text-white`,
  tw`text-center`,
  tw`w-16`,
  tw`min-w-min`,
  tw`p-2`,
]);

const Separator = styled.span([
  tw`text-xl`,
  tw`text-black dark:text-white`,
  tw`m-1`,
]);

const Title = styled.span([
  tw`text-xs`,
]);

const Value = styled.span([
  tw`text-2xl`,
]);
