import { useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import tw from 'twin.macro';
import { useCountdown } from '@utils/countdown';

export type TextDaoCountdownProps = {
  expireTime: number;
  shrink?: boolean;
};

export const DaoCountdownText = ({ expireTime, shrink }: TextDaoCountdownProps) => {
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
    return value.toLocaleString('en-US', { minimumIntegerDigits: digit });
  }, []);

  return (
    <Container>
      {
        days > 0 && !shrink && (
          <Wrapper>
            <Value>{formatted(days)}</Value>
            <Title>days</Title>
          </Wrapper>
        )
      }
      <Wrapper>
        <Value>{formatted(hours)}</Value>
        <Title>hours</Title>
      </Wrapper>
      <Wrapper>
        <Value>{formatted(minutes)}</Value>
        <Title>minutes</Title>
      </Wrapper>
      {
        days <= 0 && !shrink && (
          <Wrapper>
            <Value>{formatted(seconds)}</Value>
            <Title>seconds</Title>
          </Wrapper>
        )
      }
    </Container>
  );
};

DaoCountdownText.defaultProps = {
  shrink: false,
};

const Container = styled.div([
  tw`flex`,
  tw`flex-row`,
  tw`items-center`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-row`,
  tw`mr-2`,
  tw`text-black`,
  tw`dark:text-white`,
]);

const Title = styled.span([
  tw`flex`,
  tw`items-end`,
  tw`text-xs`,
]);

const Value = styled.span([
  tw`text-2xl`,
  tw`mr-1`,
]);
