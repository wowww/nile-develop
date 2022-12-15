import menu from '@components/common/footer/links/menu.json';
import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';

export const FooterMenuSection = () => {
  return (
    <Container>
      {
        menu.map(({ id, title, path }) => (
          title !== 'Tokens' ? (
            <LinkItem key={id}>
              <Link href={path}>
                <span>{title}</span>
              </Link>
            </LinkItem>
          ) : (
            <LinkItem key={id} className='disabled'>
              <Link href={path}>
                <span>{title}</span>
              </Link>
            </LinkItem>
          )
        ))
      }
    </Container>
  );
};

const Container = styled.ul([
  tw`gap-x-10`,
  tw`hidden md:flex`,
]);

const LinkItem = styled.li(({ className }) => [
  tw`text-base`,
  tw`font-bold`,
  tw`cursor-pointer`,
  tw`leading-tight`,
  className?.includes('disabled') && [
    tw`text-[#404040]`,
    css`
      cursor: not-allowed;
      pointer-events: none;
    `,
  ],
  css`
    &:hover {
      text-decoration: underline;
    }
  `,
]);
