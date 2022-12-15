import menus from '@components/common/header/links/menus.json';
import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import { ReactSVG } from 'react-svg';
import { useLayoutResize } from '@utils/layout';
import cn from 'classnames';
import { NileCDNLoader } from '@utils/image/loader';
import { useRouter } from 'next/router';

export const HeaderNavigations = () => {
  const { isLargeDesktop } = useLayoutResize();
  const { asPath } = useRouter();

  return (
    <Container>
      <Wrapper>
        {
          menus.map((menu) => (
            <Item key={menu.id} className={cn([menu.status, { active: asPath.startsWith(menu.url) }])}>
              <Link href={{ pathname: menu.url }}>
                <TitleWrapper>
                  <Title>{menu.title}</Title>
                  <HiddenTitle>{menu.title}</HiddenTitle>
                  {
                    !isLargeDesktop
                      ? <ReactSVG src={NileCDNLoader({ src: '/icons/common/ico_arrow_16.svg' })} />
                      : ''
                  }
                </TitleWrapper>
              </Link>
            </Item>
          ))
        }
      </Wrapper>
    </Container>
  );
};


const Container = styled.nav([
  tw`xl:absolute`,
  tw`xl:top-[50%]`,
  tw`xl:left-[50%]`,
  tw`mt-5 xl:mt-0`,
  css`
    @media (min-width: 1280px) {
      transform: translate(-50%, -50%);
    }
  `,
]);

const Wrapper = styled.ul([
  tw`flex`,
  tw`mt-8 lg:mt-0`,
  tw`flex-col xl:flex-row`,
  tw`gap-7 xl:gap-12`,
]);

const Item = styled.li(({ className }) => [
  tw`cursor-pointer`,
  className?.includes('disabled') && [
    css`
      ${Title} {
        ${tw`text-gray-60`}
        &::after {
          padding: 4px 8px;
          margin-left: 10px;
          border-radius: 2px;
          white-space: nowrap;
          ${tw`bg-gray-20`}
          ${tw`text-white`}
          ${tw`text-xs`}
          content: "Unfolding Soon";
        }
      }
    `,
    tw`cursor-not-allowed`,
    tw`pointer-events-none`,
  ],
  className?.includes('active') && [
    tw`font-bold`,
  ],
  css`
    @media (min-width: 1280px) {
     
      &::after {
        clear: both;
        content: "";
        bottom: 0;
        left: 0;
        display: block;
        opacity: 0;
        width: 100%;
        height: 2px;
        transition: opacity 300ms;
        ${tw`bg-black`}
      }

      &:hover, &:focus {
        transition-duration: 200ms;

        strong {
          font-weight: bold;
          letter-spacing: -0.6px;
        }

        &::after {
          opacity: 1;
        }
      }
    }
  `,
]);

const TitleWrapper = styled.a([
  tw`block`,
  tw`relative`,
  tw`text-black`,
  tw`text-xl xl:text-[16px]`,

  css`
    span, strong {
      ${tw`w-full`}
      ${tw`xl:text-center`}
    }
    
    svg {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%) rotate(270deg);

      @media (min-width: 1280px) {
        svg {
          display: none;
        }
      }
    }
  `,
]);

const Title = styled.strong([
  tw`block`,
  tw`absolute`,
  tw`top-0`,
  tw`left-0`,
  tw`font-bold xl:font-normal`,
]);

const HiddenTitle = styled.span([
  tw`block`,
  tw`relative`,
  tw`opacity-0`,
]);
