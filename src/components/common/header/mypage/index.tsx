import { Popover as AntdPopover } from 'antd';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import classNames from 'classnames';
import Image from 'next/image';
import { UtilityButton } from '@components/common/utility/button';
import { MyInformation } from "@components/common/myinfo";
import { HeaderMypageInfo } from "@components/common/header/mypage/section";
import {AccountButton} from "@components/common/auth/account/button";

  export type HeaderMypageProps = {
  // TODO
};

export const HeaderMypage = (props: HeaderMypageProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <Container>
      <Popover
        content={
          <ListWrapper>
            <MyInformation />
            <HeaderMypageInfo />
          </ListWrapper>
        }
        trigger="click"
        open={isOpen}
        onOpenChange={setOpen}
        placement="bottom"
        getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
      >

        <div className={classNames({ active: isOpen })}>
          <AccountButton />
        </div>
      </Popover>
    </Container>
  );
};

HeaderMypage.defaultProps = {
  // TODO
};

const Container = styled.div([
  css`
    .ant-popover {
      &-placement {
        &-bottom .ant-popover-arrow,
        &-bottomLeft .ant-popover-arrow,
        &-bottomRight .ant-popover-arrow {
          width: 18px;
          height: 18px;
          transform: translateY(-100%) translateX(6px);
        }
      }

      &-inner {
        box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%) !important;
      }

      &-arrow {
        display: block;
        transform: translate(-50%, -100%) !important;
      }
    }

    & > .ant-popover-arrow-content {
      box-shadow: 2px 2px 5px rgb(0 0 0 / 3%);

      &::before {
        clip-path: inset(30% 30%);
      }
    }

    img {
      ${tw`rounded-full`}
      border: 1px solid #fff !important;
    }
  `,
])

const Popover = styled(AntdPopover)([]);

const ListWrapper = styled.div([
  `width: 340px`,

  tw`rounded-lg`,
  tw`pt-2.5 px-2.5 pb-5`,
  tw``,
]);