import Image from 'next/image';

import cn from 'classnames';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import { NileCDNLoader } from "@utils/image/loader";


export const MarketBannerNile = () => {
  const copyEvent = (times: number, list: string) => {
    const newList = [];

    for (let i = 0; i < times; i += 1) {
      newList.push(list);
    }

    return (
      <>
        {newList.map((list) => (
          <div key={`banner-img-${list}`} className={cn('img-box')}>
            <Image src={list} alt="" layout="responsive" width="100%" height="100%" loader={NileCDNLoader}/>
          </div>
        ))}
      </>
    );
  };

  return (
    <MarketplaceBanner className={cn('marketplace-banner marketplace-banner-type3')}>
      <BannerInner className={cn('banner-inner')}>
        <TextWrapper className={cn('text-wrap')}>
          <TitleWrapper className={cn('title-wrap')}>
            <Title>NFT is Life Evolution</Title>
          </TitleWrapper>
        </TextWrapper>
      </BannerInner>
      <BannerBackground>
        <BackgroundWrapper>
          <ImageWrapper className='top'>{copyEvent(3, '/img/banner/img_marketplace_evolution_top.png')}</ImageWrapper>
          <ImageWrapper className='middle'>{copyEvent(3, '/img/banner/img_marketplace_evolution_mid.png')}</ImageWrapper>
          <ImageWrapper className='bottom'>{copyEvent(3, '/img/banner/img_marketplace_evolution_bottom.png')}</ImageWrapper>
        </BackgroundWrapper>
      </BannerBackground>
    </MarketplaceBanner>
  );
};

const MarketplaceBanner = styled.div([
  tw`relative`,
  tw`h-[540px] md:h-[620px] lg:h-[680px]`,
]);
const BannerInner = styled.div([
  tw`relative`,
  tw`h-[540px] md:h-[620px] lg:h-[680px]`,
  tw`w-full`,
  tw`h-full`,
  tw`my-0`,
  tw`mx-auto`,
  tw`pt-[120px] md:pt-[60px] xl:pt-[90px]`,
  tw`pb-[120px] md:pb-[64px] xl:pb-[120px]`,
]);

const TextWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`items-center`,
  tw`justify-between`,
]);

const TitleWrapper = styled.div([]);
const Title = styled.h2([
  tw`text-white`,
  tw`font-bold`,
  tw`text-[30px] md:text-[54px]`,
  tw`leading-none`,
  css`
    font-family: "Times New Roman", "Judson", serif;
  `,
]);
const BannerBackground = styled.div([
  tw`absolute`,
  tw`z-[-1]`,
  tw`w-full`,
  tw`h-full`,
  tw`top-0`,
  tw`left-0`,
  tw`overflow-hidden`,
  tw`bg-black`,
  css`
    &::before, 
    &::after {
      ${tw`absolute`}
      ${tw`top-0`}
      ${tw`w-[40px] lg:w-[300px]`}
      ${tw`h-full`}
      content: "";
    }
    &::before {  
      ${tw`left-0`}
      background: linear-gradient(269.78deg, rgba(26, 26, 26, 0) 0.22%, rgba(26, 26, 26, 0.8) 75.98%, #1a1a1a 99.84%);
    }
    
    &::after {
      ${tw`right-0`}
      background: linear-gradient(88.92deg, rgba(26, 26, 26, 0) 7.29%, rgba(26, 26, 26, 0.8) 76.04%, #1a1a1a 100%);
    }
  `,
]);
const BackgroundWrapper = styled.div([
  tw`z-[-1]`,
  tw`flex-row`,
  tw`flex`,
  tw`absolute`,
  tw`top-[184px]`,
  tw`left-0`,
  tw`w-full`,
  tw`h-[auto]`,
  css`
    flex-direction: row;
  `,
]);
const ImageWrapper = styled.div([
  tw`flex`,
  tw`absolute`,
  tw`w-full`,
  tw`h-full`,

  css`
    > div {
      ${tw`w-[1924px] lg:w-[2540px] xl:w-[3140px]`}
      ${tw`h-[275px] lg:h-[363px] xl:h-[449px]`}
      flex-shrink: 0;
      
      > span {
        width: 100% !important;
        height: 100% !important;
      }
    }
    
    &.top {
      ${tw`z-[2]`}
      ${tw`animate-marketplace-banner-type-nile`}
    }
    
    &.middle {
    ${tw`z-[1]`}
      ${tw`animate-marketplace-banner-type-nile-md`}
    }
    
    &.bottom {
    ${tw`z-[0]`}
     ${tw`animate-marketplace-banner-type-nile-sm`}
    }
  `,
]);