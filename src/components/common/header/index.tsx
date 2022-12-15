import React, {useState, useEffect, useMemo, useRef, useCallback} from 'react';
import { Logo } from '@components';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import { useLayoutResize } from '@utils/layout';
import { HeaderLanguageButton } from '@components/common/header/languages';
import { useRouter } from 'next/router';
import { HeaderNavigations } from '@components/common/header/navigations';
import { LoginButton } from '@components/common/auth/login/button';
import { HeaderSideButton } from '@components/common/header/side';
import { HeaderNotificationButton } from '@components/common/header/notifications';
import { HeaderSearchButton } from '@components/common/header/search';
import { useRecoilValue, useRecoilState } from 'recoil';
import { CheckLogin } from '@recoil/selector/account';
import { WalletButton } from '@components/common/auth/wallet/button';
import { HeaderMypage } from '@components/common/header/mypage';
import cn from 'classnames';
import { throttle } from 'lodash';
import {headerMyPage, headerNotification, headerLang, headerAccount, headerHide} from '@components/common/header/utils';

export type HeaderProps = {
  // TODO
};

export const Header = (props: HeaderProps) => {
  const documentRef = useRef<Document>();
  const { isLargeDesktop } = useLayoutResize();
  const { asPath, locale } = useRouter();
  const [pageY, setPageY] = useState(0);
  const [hide, setHide] = useRecoilState(headerHide);
  const [isHeaderTop, setIsHeaderTop] = useState(true);
  const [myPageVisible, setMyPageVisible] = useRecoilState(headerMyPage);
  const [notificationVisible, setNotificationVisible] = useRecoilState(headerNotification);
  const [langVisible, setLangVisible] = useRecoilState(headerLang);
  const [accountVisible, setAccountVisible] = useRecoilState(headerAccount);

  const isLogin = useRecoilValue(CheckLogin);
  const isPublished = false;

  const throttleHandler = useMemo(
    () =>
      throttle(() => {
        const { pageYOffset } = window;
        const deltaY = pageYOffset - pageY;
        const hide = pageYOffset >= 60 && deltaY >= 0;
        setHide(hide);
        setPageY(pageYOffset);
        setIsHeaderTop(pageYOffset <= 60);
      }, 500),
    [pageY, setHide],
  );

  useEffect(() => {
    documentRef.current = document;
    const documentCurrent = documentRef.current;

    documentCurrent.addEventListener('scroll', throttleHandler);
    return () => {
      documentCurrent.removeEventListener('scroll', throttleHandler);
    };
    /* 22.11.09 수정: 디펜던시 어레이 값 추가 */
  }, [throttleHandler]);

  const closeAllHeaderModal = useCallback(() => {
    setMyPageVisible(false);
    setNotificationVisible(false);
    setLangVisible(false);
    setAccountVisible(false);
  }, [setAccountVisible, setLangVisible, setMyPageVisible, setNotificationVisible]);

  useEffect(() => {
    console.log("hide change!!!", hide);
    if (hide) {
      closeAllHeaderModal();
    }
  }, [hide, closeAllHeaderModal]);

  const composition = useMemo(() => {
    return ({
      mobile: (
        <Wrapper>
          <Logo />
          <UtilitySection>
            {isLogin && <WalletButton />}
            {!isLogin && <LoginButton />}
            <HeaderSideButton currentLanguage={locale} path={asPath} isPublished={isPublished} />
          </UtilitySection>
        </Wrapper>
      ),
      desktop: (
        <Wrapper>
          <Logo />
          <HeaderNavigations />
          <UtilitySection>
            {isPublished && <HeaderSearchButton />}
            {isPublished && <HeaderNotificationButton />}
            {isLogin && <HeaderMypage />}
            {!isLogin && <LoginButton />}
            <HeaderLanguageButton currentLanguage={locale} path={asPath} />
          </UtilitySection>
        </Wrapper>
      ),
    })[isLargeDesktop ? 'desktop' : 'mobile'];
  }, [isLargeDesktop, isLogin, locale, asPath, isPublished]);

  return (
    <Container data-testid="container" className={cn('header', hide ? 'hide' : 'active', isHeaderTop && 'header-top')}>
      {composition}
    </Container>
  );
};

const Container = styled.header([
  tw`flex`,
  tw`h-header`,
  tw`px-2 md:px-3 lg:px-4`,
  tw`items-center`,
  tw`bg-white`,
  tw`fixed`,
  tw`z-[50]`,
  tw`w-full`,
  tw`bg-[rgba(255, 255, 255, 0.8)]`,
  css`
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    transition: top 300ms, transform 300ms, background-color 300ms;
    will-change: transform, top, background-color;
    
    &.hide {
      ${tw`top-[-60px]`}
    }
    
    &.active {
      ${tw`top-0`}
    }
  `,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`w-full`,
  tw`mx-auto`,
  tw`h-header`,
  tw`justify-between`,
  tw`items-center`,
  tw`relative`,
]);

const UtilitySection = styled.div([
  tw`flex`,
  tw`items-center`,
  tw`gap-2`,
]);
