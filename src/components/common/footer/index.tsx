import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/react';
import { FooterFamilySection } from '@components/common/footer/family';
import { FooterMenuSection } from '@components/common/footer/menu';
import { FooterSnsSection } from '@components/common/footer/sns';
import { FooterTermsSection } from '@components/common/footer/terms';
import { FooterAddressSection } from '@components/common/footer/address';
import { ReactSVG } from 'react-svg';

export type FooterProps = {
  // TODO
};

export const Footer = (props: FooterProps) => {
  return (
    <Container>
      <Wrapper>
        <LinkWrapper>
          <Link href="/">
            <Logo data-testid="logo">
              <ReactSVG src="https://file.mir4global.com/nile/resources/icons/common/logo/icon_logo_grayscale_white.svg" />
            </Logo>
          </Link>

          <LinkListContainer data-testid="icons-container">
            <FooterFamilySection />
            <FooterMenuSection />
          </LinkListContainer>
        </LinkWrapper>

        <Divider />

        <InformationContainer>
          <ServiceInfoWrapper>
            <FooterTermsSection />
            <FooterAddressSection />
          </ServiceInfoWrapper>
          <FooterSnsSection />
        </InformationContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.footer([
  tw`flex`,
  tw`py-16`,
  tw`bg-black`,
  tw`overflow-hidden`,
  tw`text-white`,
  tw`justify-center`,
]);

const Wrapper = styled.div([
  tw`container`,
  tw`flex`,
  tw`flex-col`,
  tw`px-4`,
]);

const LinkWrapper = styled.div([
  tw`flex md:block`,
  tw`items-center`,
  tw`justify-between`,
])

const Logo = styled.div([
  tw`flex md:inline-flex`,
  tw`max-w-[85px]`,
  css`
    svg {
      ${tw`w-full`}
      ${tw`h-6`}
    }
  `,
]);

const LinkListContainer = styled.div([
  tw`md:flex`,
  tw`justify-between`,
  tw`items-center`,
  tw`list-none`,
  tw`p-0`,
  tw`m-0`,
  tw`md:mt-8`,
]);

const InformationContainer = styled.div([
  tw`flex`,
  tw`flex-col md:flex-row`,
  tw`justify-between`,
  tw`m-0`,
  tw`gap-y-4`,

]);

const ServiceInfoWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`items-center md:items-start`,
  tw`gap-y-[8px]`,
  tw`order-2 md:order-1`,
]);

const Divider = styled.hr([
  tw`border-gray-10`,
  tw`my-8`,
]);
