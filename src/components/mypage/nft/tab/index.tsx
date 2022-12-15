import { Tabs } from 'antd';
import * as React from 'react';
import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import tw from "twin.macro";

export interface NftTabProps {
  currentTab: string;
  items: {
    label: string;
    key: string;
    children: React.ReactNode;
  }[];
  onTabClick: (key: string) => void;
}

export const NftTab = forwardRef(
  ({ currentTab, items, onTabClick }: NftTabProps, ref: any) => {
    return (
      <StyledTabs
        activeKey={currentTab}
        animated={false}
        items={items}
        onTabClick={(key: string) => onTabClick(key)}
      />
    );
  },
);

const StyledTabs = styled(Tabs)([
  css`
    .ant-tabs {
      &-nav {
        ${tw`border-0`}
      }
      
      &-nav-list {
        ${tw`gap-2`}
        ${tw`w-auto`}
      }
      
      &-nav-wrap {
        &::before,
        &::after {
          content: none !important;
        }
      }
      
      &-ink-bar {
        ${tw`!hidden`}
      }
      
      &-tab {
        ${tw`m-0`}
        ${tw`p-0`}
        ${tw`hover:text-black`}
        
        &-btn {
          ${tw`flex`}
          ${tw`items-center`}
          ${tw`justify-center`}
          ${tw`px-5`}
          ${tw`border`}
          ${tw`border-black`}
          ${tw`h-8`}
          ${tw`text-sm`}
          ${tw`leading-[1px]`}
          ${tw`rounded-[100px]`}
          ${tw`md:h-9`}
          ${tw`md:text-base`}
        }
        
        &-active {
          ${tw`border-0`}
          ${tw`hover:text-white`}
          
          .ant-tabs-tab-btn {
            ${tw`bg-black`}
            ${tw`text-white`}
            ${tw`font-normal`}
          }
        }
      }
    }
  `,
]);
