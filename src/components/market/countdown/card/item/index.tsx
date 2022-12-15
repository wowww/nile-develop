import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useMemo } from 'react';

export type CardAuctionCountdownItem = {
  value: string;
  unit: string;
};

export const CardAuctionCountdownItem = ({ value, unit }: CardAuctionCountdownItem) => {
  const unitComponent = useMemo(() => {
    return (<Unit>{unit}</Unit>);
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
  tw`bg-gray-50`,
  tw`rounded`,
  tw`text-white`,
  tw`text-center`,
  tw`w-16`,
  tw`min-w-min`,
  tw`p-2`,
]);

const Unit = styled.span([
  tw`text-xs`,
]);

const Value = styled.span([
  tw`text-2xl`,
]);
