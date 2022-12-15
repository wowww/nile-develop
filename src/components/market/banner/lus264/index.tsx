import styled from '@emotion/styled';
import tw from 'twin.macro';
import { MarketNftItemStatus, MarketNftItemStatusType } from '@components/market/nft/item/status';
import { CardBannerCountdown } from '@components/market/countdown/card-v2';
import { Button } from '@components';
import classNames from 'classnames';
import Image from 'next/image';
import { NileCDNLoader } from '@utils/image/loader';
import React, { useMemo, useState } from 'react';
import bannerImages from '@components/market/banner/lus264/banner-image.json';
import moment from 'moment-timezone';
import { TimeFormat } from '@utils/formatter/time';
import { css } from '@emotion/core';
import { useTranslation } from 'next-i18next';

export type MarketBannerLus264Props = {
  remain?: number;
}

export const MarketBannerLus264 = ({ remain }: MarketBannerLus264Props) => {
  const { t } = useTranslation(['marketplace']);
  const targetDate = moment.tz(process.env.NEXT_PUBLIC_ENV_NFT_SALE_START_DATE, 'Asia/Seoul');
  const remainSeconds = useMemo(() => remain ?? targetDate.diff(moment(), 'seconds'), [remain, targetDate]);
  const [status, setStatus] = useState<MarketNftItemStatusType>(remainSeconds > 0 ? MarketNftItemStatusType.UPCOMING : MarketNftItemStatusType.AUCTION_LIVE_BEFORE_BID);

  return (
    <Container>
      <Content>
        <Header>
          <MarketNftItemStatus status={status} />
          <Description>{t('hero.lus.desc', { ns: 'marketplace' })}</Description>
          <Title>London Underground Station 264 Genesis</Title>
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
          {bannerImages.map((images, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Column className={classNames({ reverse: index % 2 === 0 })} key={index}>
              <Rolling className={classNames({ reverse: index % 2 === 0 })}>
                {images.map((list, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Box key={index}>
                    <Image src={list} alt="" layout="responsive" width="100%" height="100%" loader={NileCDNLoader} />
                  </Box>
                ))}
              </Rolling>
            </Column>
          ))}
        </BackgroundWrapper>
      </BannerBackground>
    </Container>
  );
};

MarketBannerLus264.defaultProps = {
  remain: undefined,
};

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
