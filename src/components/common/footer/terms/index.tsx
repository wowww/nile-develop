import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import terms from '@components/common/footer/terms/links.json';
import { LanguageButton } from '@components/common/languages';
import Link from 'next/link';

export const FooterTermsSection = () => {
  return (
    <Container>
      {
        terms.map(({ id, link, name }) => (
          <Link key={id} href={link} target="_blank" rel="noreferrer">
            <LinkItem>
              {name}
            </LinkItem>
          </Link>
        ))
      }
      <LinkItem>
        <LanguageButton />
      </LinkItem>
    </Container>
  );
};

const Container = styled.ul([
  tw`flex`,
  tw`flex-wrap`,
  tw`items-center`,
  tw`gap-x-4 md:gap-x-6`,
  tw`justify-center md:justify-start`,
  tw`max-w-[500px]`,
]);

const LinkItem = styled.li([
  tw`text-xs`,
  tw`text-gray-40`,
  tw`cursor-pointer`,
  tw`leading-[32px]`,
  css`
    svg {
      ${tw`w-6`}
      ${tw`h-6`}
      path {
        fill: #737373;
      }
    }
  `,
]);
