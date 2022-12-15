import { Radio, RadioChangeEvent } from 'antd';
import styled from "@emotion/styled";
import tw from "twin.macro";

import { css } from '@emotion/core';

import classNames from "classnames";

export type RadioTabButtonProps = {
  buttonList: {
    text: string,
    value: string,
  }[];
  currentTab: string;
  setCurrentTab: (t: string) => void;
}

export const RadioTabButton = ({ buttonList, currentTab, setCurrentTab }: RadioTabButtonProps) => {
  return (
    <StyledRadio onChange={(e: RadioChangeEvent) => setCurrentTab(e.target.value)} value={currentTab}>
      {buttonList.map((item) => (
        <Radio.Button value={item.value} key={item.value}>
          {item.text}
        </Radio.Button>
      ))}
    </StyledRadio>
  );
};

const StyledRadio = styled(Radio.Group)([
  tw`flex`,
  tw`gap-2`,
  css`
    .ant-radio-button-wrapper {
      font-family: "Roboto", sans-serif;
      ${tw`w-fit`}
      ${tw`px-4`}
      ${tw`h-8`}
      ${tw`flex`}
      ${tw`items-center`}
      ${tw`rounded-[100px]`}
      ${tw`border`}
      ${tw`leading-[100%]`}
      ${tw`text-black`}
      ${tw`bg-transparent`}
      ${tw`text-sm`}
      ${tw`md:h-9`}
      ${tw`md:text-base`}
      ${tw`md:px-5`}
      ${tw`xl:h-8`}
      border-color: #1A1A1A !important;
      
      &:before {
        content: none;
      }
      
      &-checked {
        ${tw`bg-black`}
        ${tw`text-white`}
        ${tw`hover:text-white`}
        &:before {
          content: none;
        }
      }
    }
  `,
]);