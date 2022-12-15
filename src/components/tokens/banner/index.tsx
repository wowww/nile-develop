import React from 'react';
import styled from '@emotion/styled';
import tw from "twin.macro";
import {TokensTinyLineChart} from "@components/tokens/chart/line/tiny";
import {IconLogo} from "@components/common/logo/icon";
import {TagData} from "@components/tagdata";
import { css } from '@emotion/core';

interface TokensWemixPriceBannerProps {
  data: any[];
}

export const TokensWemixPriceBanner = ({ data }: TokensWemixPriceBannerProps) => {

  return (
    <Container>
      <Wrapper>
        <PriceItem>
          <IconWrapper>
            <IconLogo type="wemix" size={40} />
          </IconWrapper>
          <InfoWrapper>
            <Value>WEMIX</Value>
            <Info>
              <Amount>$2.35</Amount>
              <TagData number={9.66} backgroundType theme="dark" format="%" showSign />
            </Info>
          </InfoWrapper>
          <TokensTinyLineChart data={data} />
        </PriceItem>
        <PriceItem>
          <IconWrapper>
            <IconLogo size={40} type="wemix$" />
          </IconWrapper>
          <InfoWrapper>
            <Value>WEMIX</Value>
            <Info>
              <Amount>$2.35</Amount>
              <TagData number={0} backgroundType theme="dark" format="%" showSign />
            </Info>
          </InfoWrapper>
          <TokensTinyLineChart data={data} />
        </PriceItem>
      </Wrapper>
    </Container>
  )
};

const IconWrapper = styled.div([
  `flex: 0 0 40px`,
  tw`mr-5`,
  tw`md:mr-6`,
]);

const Value = styled.span([
  tw`text-sm`,
  tw`text-gray-60`,
  tw`leading-[100%]`,
]);

const Amount = styled.strong([
  tw`text-[28px]`,
  tw`font-bold`,
  tw`leading-[100%]`,
  tw`text-white`,
  `text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)`,
  tw`md:text[32px]`,
]);

const Info = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
  tw`md:flex-row`,
]);

const InfoWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
  tw`mr-7`,
  tw`md:mr-[18px]`,
  tw`xl:mr-[56px]`,
]);

const PriceItem = styled.div([
  tw`flex`,
  tw`px-5`,
  tw`md:items-center`,
  tw`md:px-10`,
  tw`md:py-[28px]`,
  tw`xl:px-0`,
  tw`xl:py-[27px]`,
]);

const Container = styled.div([
  tw`w-full`,
  tw`bg-black`,
]);

const Wrapper = styled.div([
  tw`max-w-[1200px]`,
  tw`flex`,
  tw`flex-col`,
  tw`mx-auto`,
  tw`gap-10`,
  tw`py-6`,
  css`
    ${PriceItem} {
      &:first-child {
        ${tw`relative`}
        ${tw`after:absolute`}
        ${tw`after:bottom-[-20px]`}
        ${tw`after:left-0`}
        ${tw`after:content-['']`}
        ${tw`after:w-full`}
        ${tw`after:h-px`}
        ${tw`after:bg-gray-10`}
        
        @media (min-width: 768px) {
          &:after {
            content: none;
          }
        }
      }
    }
  `,
  tw`md:py-0`,
  tw`md:gap-0`,
  tw`xl:flex-row`,
  tw`xl:justify-between`,
]);