import classNames from "classnames";
import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import { css } from '@emotion/core';

import { Radio } from 'antd';

export type ChartPeriodToggleButtonProps = {
  periodType : {
    value: string,
    text: string,
  }[];
  setPeriod: (t: string) => void;
  dark?: boolean;
}

export const ChartPeriodToggleButton = ({ periodType, setPeriod, dark }: ChartPeriodToggleButtonProps) => {

  return (
    <RadioContainer className={classNames({ dark })}>
      <Radio.Group defaultValue={periodType[0].value} onChange={(e) => setPeriod(e.target.value)}>
        {periodType.map((item) => {
          return (
            <Radio.Button value={item.value} key={item.value}>
              {item.text}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    </RadioContainer>
  );
};

ChartPeriodToggleButton.defaultProps = {
  dark: false,
}

const RadioContainer = styled.div(({ className }) => [
  tw`flex`,
  css`
    .ant-radio-button-wrapper {
      font-family: "Roboto", sans-serif;
      ${tw`w-fit`}
      ${tw`px-[10px]`}
      ${tw`first:pl-0`}
      ${tw`last:pr-0`}
      ${tw`rounded-none`}
      ${tw`border-0`}
      ${tw`border-r`}
      ${tw`h-auto`}
      ${tw`text-gray-50`}
      ${tw`bg-transparent`}
      ${tw`last:border-0`}
      ${tw`text-xs`}
      border-color: #595959 !important;
      line-height: 100% !important;
      
      &:before {
        content: none;
      }
      
      &-checked {
        ${tw`font-bold`}
        ${tw`text-black`}
        &:before {
          content: none;
        }
      }
      
      .ant-radio-button {
        ${tw`leading-[100%]`}
        ${tw`h-auto`}
      }
    }
  `,
  className?.includes('dark') && [
    `
      .ant-radio-button-wrapper {
        color: #a6a6a6 !important;
        
        &-checked {
          color: #fff !important;
        }
      }
    `,
  ],
]);