import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { Drawer } from 'antd';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import Link from 'next/link';

import { css, Global } from '@emotion/core';
import { useRecoilState } from 'recoil';
import { CookieState } from '@recoil/atoms';

export const AllowCookiePopup = () => {
  const { t } = useTranslation(['terms']);
  const [state, setState] = useRecoilState(CookieState);
  const [open, setOpen] = useState<boolean>(state.allow === 'none');

  return (
    <Drawer
      mask={false}
      className="ant-cookies"
      closable={false}
      placement="bottom"
      open={open}
      onClose={() => setOpen(false)}
      destroyOnClose
    >
      <Global styles={css`
        .ant-cookies {
          .ant-drawer-content-wrapper {
            ${tw`!h-auto`}
            ${tw`border-t`}
            ${tw`border-gray-60`}
            box-shadow: 0 5px 20px rgb(0 0 0 / 20%);
          }
        }
      `} />
      <Wrapper>
        <Content>
          <BodyTitle>{t('cookies.title', { ns: 'terms' })}</BodyTitle>
          <BodyContent>
            {t('cookies.content', { ns: 'terms' })}{' '}
            <Link href="/" target="_blank">
              <AnchorPolicy>{t('cookies.anchorPrivacyPolicy', { ns: 'terms' })}</AnchorPolicy>
            </Link>
          </BodyContent>
        </Content>
        <ConfirmBtnWrapper>
          <StyledButton className="dark" onClick={() => {
            setOpen(false);
            setState({ allow: 'all' });
          }}>
            {t('cookies.btnAllowAll', { ns: 'terms' })}
          </StyledButton>
          <StyledButton onClick={() => {
            setOpen(false);
            setState({ allow: 'essential' });
          }}>
            {t('cookies.btnAllowEssential', { ns: 'terms' })}
          </StyledButton>
        </ConfirmBtnWrapper>
      </Wrapper>
    </Drawer>
  );
};

const Content = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-1`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-4`,
  tw`xl:gap-0`,
  tw`xl:justify-between`,
]);

const BodyTitle = styled.h2([
  tw`text-black`,
  tw`font-bold`,
  tw`text-sm`,
  tw`leading-[22px]`,
  tw`md:text-base`,
  tw`md:leading-[1.5]`,
]);

const StyledButton = styled.button([
  tw`h-9`,
  tw`text-sm`,
  tw`px-5`,
  tw`border`,
  tw`border-black`,
  tw`leading-none`,
  tw`text-black`,
  tw`hover:bg-gray-90`,
  tw`rounded`,
  tw`md:w-fit`,
  tw`md:h-10`,
  tw`md:text-base`,
  tw`xl:h-[38px]`,
  tw`xl:text-sm`,
  css`
    &.dark {
      ${tw`hover:bg-gray-10`}
      ${tw`border-transparent`}
      ${tw`text-white`}
      ${tw`bg-black`}
    }
  `,
]);

const AnchorPolicy = styled.span([
  tw`border-b`,
  tw`border-[#9860ff]`,
  tw`text-[#9860ff]`,
  tw`cursor-pointer`,
]);

const ConfirmBtnWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
  tw`md:flex-row`,
  tw`md:justify-end`,
]);

const BodyContent = styled.div([
  tw`text-gray-30`,
  tw`text-xs`,
]);
