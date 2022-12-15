import { useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import tw from 'twin.macro';
import { useCountdown } from '@utils/countdown';

export type CardDaoCountdownProps = {
  expireTime: number;
  shrink?: boolean;
};

export const DaoCountdownCard = ({expireTime, shrink}: CardDaoCountdownProps) => {
  const {remainTime} = useCountdown({seconds: expireTime});

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
    return value.toLocaleString('en-US', {minimumIntegerDigits: digit});
  }, []);

  return (
    <Container>
      {
        days > 0 && !shrink && (
          <>
            <Card>
              <Value>{formatted(days)}</Value>
              <Title>Days</Title>
            </Card>
            <Separator />
          </>
        )
      }
      <Card>
        <Value>{formatted(hours)}</Value>
        <Title>Hours</Title>
      </Card>
      <Separator />
      <Card>
        <Value>{formatted(minutes)}</Value>
        <Title>Minutes</Title>
      </Card>
      <Separator />
      <Card>
        <Value>{formatted(seconds)}</Value>
        <Title>Seconds</Title>
      </Card>
    </Container>
  );
};

DaoCountdownCard.defaultProps = {
  shrink: false,
};

const Container = styled.div([
  tw`flex`,
  tw`flex-row`,
  tw`items-center`,
]);

const Card = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`rounded`,
  tw`text-black`,
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
