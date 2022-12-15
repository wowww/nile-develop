import styled from '@emotion/styled';
import tw from 'twin.macro';
import cn from 'classnames';
import { MarketNftItemStatus, MarketNftItemStatusType } from '@components/market/nft/item/status';
import { CardBannerCountdown } from '@components/market/countdown/card-v2';
import { Button } from '@components';
import Image, { StaticImageData } from 'next/image';
// import { NileCDNLoader } from '@utils/image/loader';
import React, { useMemo, useState } from 'react';
// import bannerImages from '@components/market/banner//banner-image.json';
import moment from 'moment-timezone';
import { TimeFormat } from '@utils/formatter/time';
import { css } from '@emotion/core';
import { useTranslation } from 'next-i18next';
import BgNilePyramid from '@/assets/img/banner/img_nile_pyramid.png';
import ImageNileStar1 from '@/assets/img/banner/image_nile_star1.png';
import ImageNileStar2 from '@/assets/img/banner/image_nile_star2.png';
import ImageNileStar3 from '@/assets/img/banner/image_nile_star3.png';

export type MarketBannerActionProps = {
  remain?: number;
}

export const MarketBannerAction = ({ remain }: MarketBannerActionProps) => {
  const { t } = useTranslation(['marketplace']);
  const targetDate = moment.tz(process.env.NEXT_PUBLIC_ENV_NFT_SALE_START_DATE, 'Asia/Seoul');
  const remainSeconds = useMemo(() => remain ?? targetDate.diff(moment(), 'seconds'), [remain, targetDate]);
  const [status, setStatus] = useState<MarketNftItemStatusType>(remainSeconds > 0 ? MarketNftItemStatusType.UPCOMING : MarketNftItemStatusType.AUCTION_LIVE_BEFORE_BID);

  const copyEvent = (times: number, list: StaticImageData) => {
    const newList = [];

    for (let i = 0; i < times; i += 1) {
      newList.push(list);
    }

    return (
      <>
        {newList.map((list) => (
          <div key={`star-${list}`} className={cn('img-box')}>
            <Image
              key={`banner-img-${list}`}
              src={list}
              alt=""
              layout="responsive"
              quality="100"
              loading="eager"
              objectFit="cover"
              unoptimized
            />
          </div>
        ))}
      </>
    );
  };

  return (
    <Container>
      <Content>
        <Header>
          <MarketNftItemStatus status={status} />
          <Description>{t('hero.lus.desc', { ns: 'marketplace' })}</Description>
          <Title>Sights of NILE</Title>
        </Header>
        {status === MarketNftItemStatusType.UPCOMING &&
					<Countdown>
            <span className="text-white font-bold text-[16px] mt-[20px] md:mt-[20px]">
              Auction starts in
            </span>
						<CardBannerCountdown expireTime={remainSeconds} onFinish={() => setStatus(MarketNftItemStatusType.AUCTION_LIVE_BEFORE_BID)} />
						<div className="flex gap-[8px] items-center">
							<Tag>OPEN</Tag>
							<span className="text-white text-xs">{targetDate.format(TimeFormat.STANDARD_WITH_TIMEZONE)}</span>
						</div>
					</Countdown>
        }
        {status === MarketNftItemStatusType.AUCTION_LIVE_BEFORE_BID &&
					<Countdown>
            <span className="text-white font-bold text-[16px] mt-[20px] md:mt-[20px]">
              Auction starts in
            </span>
						<CardBannerCountdown expireTime={remainSeconds} onFinish={() => setStatus(MarketNftItemStatusType.AUCTION_LIVE_BEFORE_BID)} />
						<div className="flex gap-[8px] items-center">
							<Tag>OPEN</Tag>
							<span className="text-white text-xs">{targetDate.format(TimeFormat.STANDARD_WITH_TIMEZONE)}</span>
						</div>
					</Countdown>
        }
        {status === MarketNftItemStatusType.AUCTION_LIVE_BEFORE_BID && (<Button
            className="hover:bg-gray-80"
            bg="white"
            color="black"
            borderRadius="4px"
            size="16px"
            width="160px"
            height="32px"
            marginTop="20px"
          >
            View NFT
          </Button>
        )}
      </Content>
      <BannerBackground>
        <BackgroundWrapper>
          <PyramidWrapper>
            <Image src={BgNilePyramid} alt="" layout="responsive" quality="100" loading="eager" objectFit="cover" unoptimized />
          </PyramidWrapper>
          <StarWrapper className={cn('star-wrap star1')}>{copyEvent(2, ImageNileStar1)}</StarWrapper>
          <StarWrapper className={cn('star-wrap star2')}>{copyEvent(2, ImageNileStar2)}</StarWrapper>
          <StarWrapper className={cn('star-wrap star3')}>{copyEvent(2, ImageNileStar3)}</StarWrapper>
        </BackgroundWrapper>
        <NileGradient className={cn('nile-gradient')} />
      </BannerBackground>
    </Container>
  );
};

MarketBannerAction.defaultProps = {
  remain: undefined,
};

const PyramidWrapper = styled.div([
  css`
      position: relative;
    width: 100%;
   
  `,
]);

const StarWrapper = styled.div([
  css`
  &.type1 {animation: nile-star-scrolling-type 600s linear infinite;}
  &.type2 {animation: nile-star-scrolling-type 480s linear infinite;}
  &.type3 {animation: nile-star-scrolling-type 400s linear infinite;}
  
position: absolute;
    z-index: -1;
    top: 0;
    left: 46px;
    display: flex;
    justify-content: flex-start;
    
    .img-box {
        position: relative;
    width: 3930px;
    
    }
  
  `,
]);

const NileGradient = styled.div([
  css`
  position: absolute;
    z-index: 2;
    top: 0;
    left: 50%;
    width: 100%;
    max-width: 1920px;
    height: 100%;
    transform: translateX(-50%);
    
    &:before {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 193px;
    height: 100%;
    background: linear-gradient(269.78deg, rgba(26, 26, 26, 0) 0.22%, rgba(26, 26, 26, 0.8) 75.98%, #191919 99.84%);
    content: "";
    }
    
    &:after {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    width: 193px;
    height: 100%;
    background: linear-gradient(88.92deg, rgba(26, 26, 26, 0) 0.78%, rgba(26, 26, 26, 0.8) 75.42%, #191919 98.94%);
    content: "";
    
    }
  
  `,

]);

const Container = styled.div([
  tw`h-full`,
]);

const Content = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`items-center`,
  tw`justify-between`,
  tw`pt-[41px]`,
  tw`pb-[70px]`,
  tw`h-full`,
  tw`md:pt-[90px]`,
  tw`md:pb-[108px]`,
  css`
    .ant-tag {
      background: #FFFFFF;
    }
  `,
]);

const Header = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`items-center`,
  tw`gap-[12px]`,
  tw`px-[24px]`,
  tw`md:gap-[12px]`,
]);

const Description = styled.span([
  tw`text-[16px]`,
  tw`text-white`,
  tw`text-center`,

  tw`md:text-[16px]`,
]);

const Title = styled.h1([
  tw`font-header`,
  tw`text-[32px]`,
  tw`text-white`,
  tw`font-bold`,
  tw`text-center`,
  tw`leading-[1.111]`,
  tw`max-w-[312px]`,
  tw`md:text-[60px]`,
  tw`md:leading-[62px]`,
  tw`md:max-w-[816px]`,
]);

const Countdown = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-[20px]`,
  tw`items-center`,
  tw`mb-[44px] md:mb-0`,
]);

const Tag = styled.span([
  tw`inline-flex`,
  tw`justify-center`,
  tw`items-center`,
  tw`px-2 py-1`,
  tw`border`,
  tw`border-white`,
  tw`rounded-full`,
  tw`text-white`,
  tw`text-xs`,
  tw`font-bold`,
]);

const BannerBackground = styled.div([
  tw`absolute`,
  tw`z-[-1]`,
  tw`top-0`,
  tw`left-0`,
  tw`overflow-hidden`,
  tw`h-full`,
  tw`w-full`,
  tw`bg-black`,
  tw`before:absolute`,
  tw`before:content-[""]`,
  tw`before:inset-0`,
  tw`before:bg-[rgba(26, 26, 26, 0.7)]`,
  tw`after:content-[""]`,
  tw`after:absolute`,
  tw`after:top-0`,
  tw`after:left-0`,
  tw`after:w-full`,
  tw`after:h-[198px]`,
  tw`after:-rotate-180`,
  css`&::after {
    ${tw`h-full`}
      background: linear-gradient(180deg, rgba(26, 26, 26, 0) 0%, rgba(26, 26, 26, 0.8) 76.04%, #1a1a1a 100%);
      transform: rotate(180deg) !important;
  }`,
]);

const BackgroundWrapper = styled.div([
  tw`relative`,
  tw`z-[-1]`,
  tw`flex`,
  tw`h-full`,
  tw`justify-center`,
  tw`gap-[20px]`,
]);

const Column = styled.div(({ className }) => [
  tw`flex`,
  tw`h-full`,
  tw`flex-col`,
  className?.includes('reverse') && [
    tw`justify-end`,
  ],
]);

const Rolling = styled.div(({ className }) => [
  tw`flex`,
  tw`flex-col`,
  tw`animate-market-scrolling`,
  className?.includes('reverse') && [
    tw`animate-market-scrolling-reverse`,
  ],
]);

const Box = styled.div([
  tw`w-[160px]`,
  tw`h-[160px]`,
  tw`my-[10px]`,
  tw`md:w-[320px]`,
  tw`md:h-[320px]`,
]);
