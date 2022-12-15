import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';

import Image from 'next/image';
import { NileCDNLoader } from '@utils/image/loader';

import { PapyrusBanner } from '@components/community/papyrus/banner';
import { PapyrusAnchor } from '@components/community/papyrus/anchor';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {useTranslation} from "next-i18next";

const Papyrus = () => {
  const { t } = useTranslation('communityPapyrus');
  return (
    <Container>
      <PapyrusBanner />
      <Content>
        <List>
          <Item>
            <ImageContainer>
              <span>
                <Image src="/img/community/img_papyrus_info1.svg" loader={NileCDNLoader} layout="fill" objectFit="cover" />
              </span>
            </ImageContainer>
            <Info>
              <Title>파피루스는 블록체인 Token 기반의 커뮤니케이션 툴입니다.</Title>
              <Desc>Web3 세계에서는 사람들간의 새로운 연결 방식이 필요합니다. 파피루스는 기존처럼 로그인을 하고 Community를 찾아 참여하는 것을 넘어서, 보유한 Token과 NFT를 기반으로 같은 관심사를 가진 사람들을 연결시켜 줍니다.</Desc>
            </Info>
          </Item>
          <Item>
            <Info>
              <Title>Token이나 NFT를 보유하면 해당 Community에 자동으로 참여됩니다.</Title>
              <Desc>파피루스에서는 특별히 Community를 찾고 가입할 필요가 없습니다. WEMIX 블록체인 네트워크 생태계 내에서 만들어지는 Token과 NFT들을 소유하면, 해당 Community에 자동으로 참여가 됩니다. 이를 통해 참여자들끼리 더 의미있는 이야기들을 나눌 수 있습니다.</Desc>
            </Info>
            <ImageContainer>
              <span>
                <Image src="/img/community/img_papyrus_info2.svg" loader={NileCDNLoader} layout="fill" objectFit="cover"  />
              </span>
            </ImageContainer>
          </Item>
          <Item>
            <ImageContainer>
              <span>
                <Image src="/img/community/img_papyrus_info3.svg" loader={NileCDNLoader} layout="fill" objectFit="cover"  />
              </span>
            </ImageContainer>
            <Info>
              <Title>Community에서 다양한 채널과 DM으로 소통할 수 있습니다.</Title>
              <Desc>개별 Community에서도 다양한 주제에 대해 이야기를 나눌 수 있도록 채널 기능을 제공합니다. 그리고 DM을 사용해 특정 구성원과 별도의 대화를 나눌 수 있습니다.
                물론, 이런 대화는 모두 같은 Token, NFT를 가진 인증된 구성원들끼리 하는 것입니다.</Desc>
            </Info>
          </Item>
        </List>
      </Content>
      <PapyrusAnchor />
    </Container>
  )
};

const List = styled.ul([
  tw`flex`,
  tw`flex-col`,
  tw`gap-10`,
  tw`md:gap-[60px]`,
  tw`xl:gap-[80px]`,
  css`
    li {
      &:nth-child(2) {
        > div {
          &:first-child {
            order: 2;
          }
        }
      }
    }
    @media (min-width: 768px) {
      li {
        &:nth-child(2) {
          > div {
            &:first-child {
              order: 0;
            }
          }
        }
      }
    }
    
  `,
])

const Title = styled.h3([
  tw`font-bold`,
  tw`text-[22px]`,
  tw`text-black`,
  tw`md:text-[26px]`,
  tw`xl:text-2xl`,
]);

const Info = styled.div([
  tw`flex`,
  tw`w-full`,
  tw`flex-col`,
  tw`gap-3`,
  tw`xl:w-1/2`,
]);

const Desc = styled.span([
  tw`text-sm`,
  tw`text-gray-30`,
  tw`md:text-base`,
  tw`xl:text-sm`,
]);

const ImageContainer = styled.div([
  tw`w-full`,
  `aspect-ratio: 10/6`,
  tw`relative`,
  tw`xl:static`,
  tw`xl:w-1/2`,
  tw`xl:flex`,
  tw`xl:items-center`,
  tw`xl:justify-center`,
  tw`xl:h-[240px]`,
  `
    > span {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    @media (min-width: 1280px) {
      > span {
        position: relative;
        width: 400px;
        height: 240px;
      }
    }
  `,
]);

const Item = styled.li([
  tw`flex`,
  tw`items-center`,
  tw`flex-wrap`,
  tw`gap-7`,
  tw`md:gap-[30px]`,
  tw`md:flex-nowrap`,
  tw`xl:gap-0`,
]);

const Container = styled.div([
  tw`w-full`,
]);

const Content = styled.div([
  tw`max-w-[1200px]`,
  tw`px-5`,
  tw`pt-10`,
  tw`pb-[60px]`,
  tw`md:pt-[60px]`,
  tw`md:pb-[64px]`,
  tw`md:px-10`,
  tw`xl:px-0`,
  tw`xl:pb-[80px]`,
  tw`xl:mx-auto`,
]);

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? 'en', ['common', 'community']);
  return { props: { ...translations } };
};

export default Papyrus;
