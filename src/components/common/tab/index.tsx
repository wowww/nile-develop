import styled from '@emotion/styled';
import { Tabs } from 'antd';
import { css } from '@emotion/core';
import tw from 'twin.macro';
import classNames from 'classnames';
import * as React from 'react';

export type CustomTabProps = {
  defaultActiveKey?: string;
  activeKey?: string;
  items: {
    label: string;
    key: string;
    children: React.ReactNode;
  }[];
  onTabClick?: (key: string) => void;
  dark?: boolean;
  md?: boolean;
};

export const CustomTab = ({
  defaultActiveKey,
  activeKey,
  items,
  onTabClick,
  dark,
  md,
}: CustomTabProps) => {
  return (
    <StyledTabs
      className={classNames({ dark, md })}
      destroyInactiveTabPane
      activeKey={activeKey}
      defaultActiveKey={defaultActiveKey}
      items={items}
      onTabClick={onTabClick}
    />
  );
};

CustomTab.defaultProps = {
  defaultActiveKey: undefined,
  activeKey: undefined,
  onTabClick: () => {
    // TODO
  },
  dark: false,
  md: false,
};

const StyledTabs = styled(Tabs)(({ className }) => [
  css`
    .ant-tabs-nav {
      ${tw`border-b`}
      ${tw`border-gray-80`}
        
      &-list {
        ${tw`w-full`}
      }

      &-wrap {
        ${tw`xl:max-w-[1200px]`}
        ${tw`xl:mx-auto`}
      }
      &-operations {
        ${tw`!hidden`}
      }
    }

    .ant-tabs-tab {
      ${tw`w-full`}
      ${tw`flex`}
      ${tw`justify-center`}
      ${tw`items-center`}
      ${tw`h-[40px]`}
      ${tw`md:h-[60px]`}
      ${tw`m-0`}
      
      &-active {
        .ant-tabs-tab-btn {
          ${tw`font-bold`}
          ${tw`text-black`}
        }
      }
    }

    .ant-tabs-ink-bar {
      ${tw`bg-black`}
    }

    .ant-tabs-tab-btn {
      font-family: 'Roboto', sans-serif;
      ${tw`h-fit`}
      ${tw`text-black`}
      ${tw`text-sm`}
      ${tw`leading-none`}
      ${tw`md:text-base`}
      ${tw`md:px-10`}
    }
  `,
  className?.includes('dark') && [
    css`
      .ant-tabs-nav {
        ${tw`border-0`}
      }

      .ant-tabs-tab {
        &-active {
          .ant-tabs-tab-btn {
            ${tw`text-white`}
          }
        }
      }

      .ant-tabs-ink-bar {
        ${tw`bg-white`}
      }

      .ant-tabs-tab-btn {
        ${tw`text-white`}
      }
    `,
  ],
  className?.includes('md') && [
    css`
      .ant-tabs-tab {
        ${tw`h-[48px]`}
        ${tw`md:h-[48px]`}
      }
      .ant-tabs-tab-btn {
        ${tw`text-sm`}
        ${tw`md:text-sm`}
      ${tw`p-0`}
      }
    `,
  ],
]);
