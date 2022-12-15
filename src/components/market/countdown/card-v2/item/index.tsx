import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useMemo } from 'react';

export type CardAuctionCountdownItem = {
  value: string;
  unit: string;
};

export const CardBannerCountdownItem = ({ value, unit }: CardAuctionCountdownItem) => {
  const unitComponent = useMemo(() => {
    return <Unit>{unit}</Unit>;
  }, [unit]);

  return (
    <Container>
      <Value>{value}</Value>
      {unitComponent}
    </Container>
  );
};

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`justify-center`,
  tw`bg-black`,
  tw`text-white`,
  tw`gap-2`,
  tw`w-[64px]`,
  tw`h-[68px]`,
  tw`md:w-[80px]`,
  tw`md:h-[88px]`,
]);

const Unit = styled.span([
  tw`text-[12px]`,
  tw`text-gray-60`,
  tw`leading-none`,
  tw`text-center`,
]);

const Value = styled.span([
  tw`text-[28px]`,
  tw`leading-none`,
  tw`md:text-[32px]`,
  tw`text-center`,
]);
