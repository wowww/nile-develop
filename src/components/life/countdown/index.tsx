import { useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import { useCountdown } from '@utils/countdown';

export type TextCountdownProps = {
  expireTime: number;
  shrink?: boolean;
};

export const LifeCountdownText = ({ expireTime, shrink }: TextCountdownProps) => {
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

  const remainTimeText = useMemo(() => {
    const time = moment().startOf('day').seconds(remainTime);
    if (shrink) {
      return time.hours() > 0 ? time.format('H[h] : m[m] : s[s]') : time.format('m[m] : ss[s]');
    }
    return time.format('H[h] : m[m] : s[s]');
  }, [remainTime, shrink]);

  const formatted = useCallback((value: number, digit = 2) => {
    return value.toLocaleString('en-US', { minimumIntegerDigits: digit });
  }, []);

  return (
    <Container>
      <Text>
        {days > 0 && `${formatted(days)}d : `}
        {formatted(hours)}h : {formatted(minutes)}m : {formatted(seconds)}s
      </Text>
    </Container>
  );
};

LifeCountdownText.defaultProps = {
  shrink: false,
};

const Container = styled.div([]);

const Text = styled.p([]);
