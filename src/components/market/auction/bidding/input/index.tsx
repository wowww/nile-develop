import cn from 'classnames';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { NileCDNLoader } from '@utils/image/loader';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import { useAuctionBiddingCalculator } from '@utils/auction/bidding/calulator';

export type InputNumberProps = {
  defaultValue?: number;
  unit?: string;
  onChangeValue?: (value: number) => void;
  error?: boolean;
  useNumberFormat?: boolean;
  theme?: 'light' | 'dark',
};

export const MarketAuctionBiddingInput = ({ defaultValue, unit, onChangeValue, error, useNumberFormat, theme }: InputNumberProps) => {
  const [value, setValue] = useState<number>(defaultValue ?? 0);
  const { getNextPrice, getPrevPrice } = useAuctionBiddingCalculator();

  const formatted = useMemo(() => {
    return value.toLocaleString('en-US');
  }, [value]);

  useEffect(() => {
    onChangeValue?.(value);
  }, [onChangeValue, value]);

  return (
    <Container className={cn({ error }, theme)}>
      <InputWrapper>
        <Unit>{unit}</Unit>
        <Input type="text" readOnly value={useNumberFormat ? formatted : value} />
      </InputWrapper>
      <ButtonWrapper>
        <Button type="button" className={cn('plus')} onClick={() => setValue((prev) => getNextPrice(prev))}>
          <Image src="/icons/common/ico_input_num_up.svg" loader={NileCDNLoader} width={12} height={12} />
          <span className={cn('a11y')}>plus</span>
        </Button>
        <Button type="button" className={cn('minus')} onClick={() => setValue((prev) => getPrevPrice(prev))}>
          <Image src="/icons/common/ico_input_num_down.svg" loader={NileCDNLoader} width={12} height={12} />
          <span className={cn('a11y')}>minus</span>
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

MarketAuctionBiddingInput.defaultProps = {
  defaultValue: 0,
  unit: undefined,
  error: false,
  theme: 'light',
  useNumberFormat: true,
  onChangeValue: undefined,
};

const Unit = styled.span([
  tw`block`,
  tw`text-gray-60`,
]);

const Input = styled.input([
  tw`text-right`,
]);

const Container = styled.div(({ className }) => [
  tw`relative`,
  tw`flex`,
  tw`border`,
  tw`rounded-sm`,
  className?.includes('light') && [
    tw`border-gray-80`,
    tw`bg-white`,
    css`
      ${Input} {
        ${tw`bg-white`}
        ${tw`text-black`}
      }
    `,
  ],
  className?.includes('dark') && [
    tw`border-gray-10`,
    tw`bg-black`,
    css`
      ${Input} {
        ${tw`bg-black`}
        ${tw`text-white`}
      }
    `,
  ],
  className?.includes('error') && [
    tw`border-negative`,
    css`
      ${Input} {
        ${tw`text-negative`}
      }
    `,
  ],
]);

const InputWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`justify-center`,
  tw`w-full`,
  tw`px-8 py-2`,
]);

const ButtonWrapper = styled.div`

`;

const Button = styled.button([
  tw`flex`,
  tw`h-1/2`,
  tw`px-2 py-3`,
  tw`justify-center`,
  tw`items-center`,
  tw`bg-gray-90`,
]);
