import { useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import tw from 'twin.macro';
import { useCountdown } from '@utils/countdown';
import { CardBannerCountdownItem } from '@components/market/countdown/card-v2/item';

export type CardBannerCountdownProps = {
  expireTime?: number;
  shrink?: boolean;
  onFinish?: () => void;
};

export const CardBannerCountdown = ({ expireTime, shrink, onFinish }: CardBannerCountdownProps) => {
  const { remainTime } = useCountdown({ seconds: expireTime ?? 300, onFinish });

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

  const formattedDays = useMemo(() => {
    return <CardBannerCountdownItem value={formatted(days)} unit="Days" />;
  }, [days, formatted]);

  const formattedHours = useMemo(() => {
    return <CardBannerCountdownItem value={formatted(hours)} unit="Hours" />;
  }, [hours, formatted]);

  const formattedMinutes = useMemo(() => {
    return <CardBannerCountdownItem value={formatted(minutes)} unit="Minutes" />;
  }, [minutes, formatted]);

  const formattedSeconds = useMemo(() => {
    return <CardBannerCountdownItem value={formatted(seconds)} unit="Seconds" />;
  }, [seconds, formatted]);

  return (
    <Container>
      {days > 0 && !shrink && formattedDays}
      {formattedHours}
      {formattedMinutes}
      {formattedSeconds}
    </Container>
  );
};

CardBannerCountdown.defaultProps = {
  expireTime: undefined,
  shrink: false,
  onFinish: undefined,
};

const Container = styled.div([
  tw`inline-flex`,
  tw`w-min`,
  tw`flex-row`,
  tw`items-center`,
  tw`gap-2`,
  tw`md:gap-5`,
]);
