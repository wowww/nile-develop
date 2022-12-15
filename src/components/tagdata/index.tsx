import React, { useMemo } from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';

import IconArrowUp from '@/assets/icons/common/arrow/ico_arrow_data_up.svg';
import IconArrowDown from '@/assets/icons/common/arrow/ico_arrow_data_down.svg';

import {background, BackgroundColorProps, SizeProps} from 'styled-system';

export type tagPropsType = {
  number: number;
  backgroundType?: boolean;
  showSign?: boolean;
  format?: string;
  showArrow?: boolean;
  theme?: "dark" | "light"; // dark or light
} & React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>
  & BackgroundColorProps
  & SizeProps

export const TagData: React.FC<tagPropsType> = ({ number, backgroundType, showSign, format, showArrow, theme }) => {

  const numberSign = useMemo(() => (number >= 0 ? '+' : '-'), [number]);

  const arrowSign = useMemo(() => {
    return (
      <span>
        {number >= 0 ? <IconArrowUp /> : <IconArrowDown />}
      </span>
    );
  }, [number]);

  const value = useMemo(() => {
    if (number > 0) return 'up';
    if (number < 0) return 'down';
    return 'zero';
  }, [number]);

  const dataNumber = useMemo(() => {
   return <>
     {showArrow && arrowSign}
     <TagDataText className={number >= 0 ? 'up' : 'down'}>{showSign? `${numberSign}${Math.abs(number)}` : Math.abs(number)}{format}</TagDataText>
   </>
  }, [showArrow, arrowSign, number, showSign, numberSign, format])

  return <TagDataWrapper className={classNames(backgroundType ? `bg-${theme}-${value}` : '', { bg: backgroundType })}>{dataNumber}</TagDataWrapper>
}

TagData.defaultProps = {
  backgroundType: false,
  showArrow: false,
  showSign: false,
  format: '',
  theme: "light",
}

const TagDataText = styled.strong(({ className }) => [
  tw`font-normal`,
  tw`text-xs`,
  className?.includes('up') && [
    tw`text-[#27c683]`,
  ],
  className?.includes('down') && [
    tw`text-[#fa5454]`,
  ],
]);

const TagDataWrapper = styled.div(({ className }) => [
  tw`flex`,
  tw`gap-1`,
  tw`flex-grow-0`,
  tw`items-center`,
  tw`h-fit`,
  className?.includes('bg') && [
    tw`px-2`,
    tw`py-1`,
    tw`w-fit`,
    tw`rounded-full`,
    css`
      ${TagDataText} {
        ${tw`font-bold`}      
      }
    `,
  ],
  className?.includes('bg-light-up') && [
    tw`bg-[#EAFBF4]`,
    css`
      ${TagDataText} {
        ${tw`text-[#27c683]`}      
      }
    `,
  ],
  className?.includes('bg-light-zero') && [
    tw`bg-gray-90`,
    css`
      ${TagDataText} {
        ${tw`text-gray-10`}      
      }
    `,
  ],
  className?.includes('bg-light-down') && [
    tw`bg-[#FFF5F5]`,
    css`
      ${TagDataText} {
        ${tw`text-[#FA5454]`}      
      }
    `,
  ],
  className?.includes('bg-dark-up') && [
    tw`bg-[#0D402A]`,
    css`
      ${TagDataText} {
        ${tw`text-[#27C683]`}      
      }
    `,
  ],
  className?.includes('bg-dark-zero') && [
    tw`bg-gray-10`,
    css`
      ${TagDataText} {
        ${tw`text-gray-80`}      
      }
    `,
  ],
  className?.includes('bg-dark-down') && [
    tw`bg-[#4A0202]`,
    css`
      ${TagDataText} {
        ${tw`text-[#FA5454]`}      
      }
    `,
  ],
]);

