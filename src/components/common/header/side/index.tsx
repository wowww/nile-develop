import React, { useState } from 'react';
import { LanguagesProps } from '@components/common/languages';
import { HeaderNavigations } from '@components/common/header/navigations';
import { UtilityButton } from '@components/common/utility/button';
import { HeaderNotificationButton } from '@components/common/header/notifications';
import { MyInformation } from '@components/common/myinfo';
import { ReactSVG } from 'react-svg';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import { Drawer } from 'antd';
import IconClose from '@/assets/icons/common/ico_close.svg';
import { useRecoilValue } from 'recoil';
import { CheckLogin } from '@recoil/selector/account';
import { LanguagesToggle } from '@components/common/languages/toggle';

export type HeaderSideButtonProps = {
  isPublished?: boolean;
} & LanguagesProps;

export const HeaderSideButton = ({ isPublished, ...props }: HeaderSideButtonProps) => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const isLogon = useRecoilValue(CheckLogin);

  return (
    <DrawerContainer>
      <UtilityButton onClick={() => setDrawerOpen(true)}>
        <ReactSVG src="https://file.mir4global.com/nile/resources/icons/common/ico_menu.svg" />
      </UtilityButton>
      <Drawer
        title={
          <SideBarTitle>
            {isPublished && <HeaderNotificationButton />}
            <LanguagesToggle {...props} />
          </SideBarTitle>
        }
        placement="right"
        closable={false}
        closeIcon={false}
        onClose={() => setDrawerOpen(false)}
        open={isDrawerOpen}
        extra={<CloseButton onClick={() => setDrawerOpen(false)} title="close"><IconClose /></CloseButton>}
      >
        {isLogon && <MyInformation />}
        <HeaderNavigations />
      </Drawer>
    </DrawerContainer>
  );
};

HeaderSideButton.defaultProps = {
  isPublished: undefined,
};

const DrawerContainer = styled.div([
  tw`flex`,
]);

const SideBarTitle = styled.div([
  tw`flex`,
  tw`order-1`,
  css`
    svg {
      ${tw`w-[32px]`}
      ${tw`h-[32px]`}
      path {
        fill: #000;
      }
    }

    .ant-popover-content {
      ${tw`rounded`}
      box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);

      ul {
        ${tw`flex`}
        ${tw`flex-col`}
        ${tw`gap-3`}
        ${tw`py-5`}
        ${tw`px-3`}
        li {
          ${tw`text-sm`}
          ${tw`cursor-pointer`}
          &:after {
            ${tw`w-[18px]`}
            ${tw`h-[18px]`}
            ${tw`bg-contain`}
          }
        }
      }
    }
  `,
]);

const CloseButton = styled.button([
  tw`flex`,
  tw`justify-end`,
  tw`items-center`,
  tw`w-10`,
  tw`h-10`,

  css`
    svg {
      ${tw`w-8`}
      ${tw`h-8`}
    }
  `,
]);
