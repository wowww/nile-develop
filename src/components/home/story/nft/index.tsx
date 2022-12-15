import React, {useEffect, useState} from 'react';

import styled from "@emotion/styled";
import tw from "twin.macro";
import Link from "next/link";
import Image from "next/image";
import { css } from '@emotion/core';
import {NileCDNLoader} from "@utils/image/loader";
import {Button} from "@components";
import {message} from "antd";
import {useTranslation} from "next-i18next";
import classNames from "classnames";

export const StoryViewNftCard = () => {
  const { t } = useTranslation(['nile', 'common']);

  const nft = {
    thumbnail: '/img/story/story_detail_post.png',
    status: 'upcoming',
    title: 'Story3.0 #1',
    desc: 'dd',
  }
  return (
    <Container>
      <Info>
        <ImageContainer>
          <Image src={nft.thumbnail} layout="fill" quality="100" loading="eager" objectFit="cover" loader={NileCDNLoader} />
        </ImageContainer>
        <InfoContent>
          <Tag>{nft.status}</Tag>
          <Title>{nft.title}</Title>
          <InfoButton>
            <StyledButton className={classNames( 'disabled' )} onClick={() => message.info(`${t('NFTOpenMessage', { ns: 'common' })}`)}>
              {t('viewNft', { ns: 'common' })}
            </StyledButton>
            <Link href="/life/nile">
              <StyledButton>
                {t('viewCollectionInfo', { ns: 'common' })}
              </StyledButton>
            </Link>
          </InfoButton>
        </InfoContent>
      </Info>
      <ExtraInfo>
        <ExtraInfoItem>
          <dt>{t('startingBid', { ns: 'common' })}</dt>
          <dd>1,200<Unit>WEMIX</Unit></dd>
        </ExtraInfoItem>
        <ExtraInfoItem>
          <dt>{t('auctionStartsIn', { ns: 'common' })}</dt>
          <dd>2022-11-22 00:00</dd>
        </ExtraInfoItem>
      </ExtraInfo>
    </Container>
  );
}

const Tag = styled.span([
  tw`border border-gray-80`,
  tw`text-black`,
  tw`text-xs !leading-none`,
  tw`px-3`,
  tw`rounded-[24px]`,
  tw`h-[24px] w-fit md:h-[26px] xl:h-[24px]`,
  tw`inline-flex items-center justify-center`,
]);

const Unit = styled.span([
  tw`text-xs !text-black`,
  tw`!leading-none`,
  tw`font-normal`,
]);

const ExtraInfoItem = styled.dl([
  tw`min-w-[100px]`,
  tw`mt-6 first:mt-0`,
  css`
    dt {
      ${tw`text-xs !leading-none text-gray-60`}
    }
    
    dd {
      ${tw`text-base !leading-none`}
      ${tw`font-bold`}
      ${tw`flex items-baseline gap-1`}
      ${tw`mt-2 mb-0`}
      ${tw`md:text-xl xl:text-base`}
    }
  `,
]);

const ExtraInfo = styled.div([
  tw`p-6`,
  tw`flex relative`,
  tw`gap-10`,
  tw`md:w-[232px]`,
  tw`md:block`,
  css`
    &::before {
      ${tw`content-['']`}
      ${tw`absolute top-0 left-6`}
      ${tw`h-px w-[calc(100% - 48px)]`}
      ${tw`bg-gray-80`}
      ${tw`md:top-6 md:left-0`}
      ${tw`md:w-px md:h-[calc(100% - 48px)]`}
    }
  `,
]);

const Info = styled.div([
  tw`flex flex-col md:flex-row`,
  tw`relative`,
]);

const InfoButton = styled.div([
  tw`flex`,
  tw`mt-6`,
  tw`gap-[6px]`,
  tw`xl:mt-7`,
]);

const InfoContent = styled.div([
  tw`p-6`,
]);

const StyledButton = styled.button(({ className }) => [
  tw`flex items-center justify-center`,
  tw`hover:bg-gray-90`,
  tw`text-xs text-black leading-[30px]`,
  tw`h-7`,
  tw`border border-black`,
  tw`px-5`,
  tw`rounded-[2px]`,
  tw`md:h-[32px] xl:h-[28px]`,
  tw`md:px-4`,
  className?.includes('disabled') && [
    tw`border-gray-60 text-gray-60`,
    tw`hover:bg-white`,
  ],
]);

const Title = styled.h3([
  tw`text-black`,
  tw`text-base !leading-none`,
  tw`font-bold`,
  tw`mt-4`,
  tw`md:text-lg xl:text-base `,
]);

const Container = styled.div([
  tw`mt-8`,
  tw`overflow-hidden`,
  tw`border border-gray-80 rounded`,
  tw`md:flex`,
  tw`md:justify-between md:items-center`,
]);

const ImageContainer = styled.div([
  tw`relative`,
  tw`w-full md:w-[160px]`,
  tw`h-full min-h-[160px]`,
]);