import { forwardRef, useMemo, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import { CardBannerCountdown } from '@components/market/countdown/card-v2';
import { NileCDNLoader } from '@utils/image/loader';
import moment from 'moment-timezone';

export const LusMainInfo = forwardRef<HTMLDivElement>((_, ref) => {
  const targetDate = moment.tz(process.env.NEXT_PUBLIC_ENV_NFT_SALE_START_DATE, 'Asia/Seoul');
  const remainSeconds = useMemo(() => targetDate.diff(moment(), 'seconds'), [targetDate]);
  const [currentState, setCurrentState] = useState<string>('upcoming');

  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>
            LONDON<br />
            UNDERGROUND<br />
            STATION 264<br />
            GENESIS
          </Title>
          <ArtistInfo>
            <strong>Artist</strong>
            <ArtistName>
              <ArtistIconWrapper>
                <Image src="/img/lus/ico_lus_artist_border_male.png" layout="fill" loader={NileCDNLoader} />
              </ArtistIconWrapper>
              <ArtistIconWrapper>
                <Image src="/img/lus/ico_lus_artist_border_female.png" layout="fill" loader={NileCDNLoader} />
              </ArtistIconWrapper>
              <span>Zeeha & Locho</span>
            </ArtistName>
            {
              moment().isAfter(targetDate) && (
                <Link href="/marketplace/collection/lus264">
                  <StyledButton>
                    {
                      {
                        upcoming: 'View NFT',
                        'buy-now': 'Buy NFT',
                      } [currentState]
                    }
                  </StyledButton>
                </Link>
              )
            }

            {/* Auction 시작 전 */}
            {currentState === 'upcoming' && (
              <Time ref={ref}>
                <TimeInner>
                  <TimeDesc>
                    <span>Auction starts in</span>
                  </TimeDesc>
                  <CardBannerCountdown expireTime={remainSeconds} />
                </TimeInner>
              </Time>
            )}

            {/* Auction 판매 중 */}
            {currentState === 'buy-now' && (
              <Sale ref={ref}>
                <SaleInner>
                  <span>Starting Bid</span>
                  <strong>1,200 WEMIX$</strong>
                </SaleInner>
              </Sale>
            )}
          </ArtistInfo>
        </Content>
      </Wrapper>
      <BusAnimation>
        <Row>
          <BusWrapper>
            <Image src="/img/lus/ico_lus_bus.gif" layout="fill" width="100%" loader={NileCDNLoader} />
          </BusWrapper>
        </Row>
      </BusAnimation>
    </Container>
  );
});

const SaleInner = styled.div([
  tw`flex`,
  tw`items-center`,
  tw`justify-center`,
  tw`mt-8`,
  tw`w-[308px]`,
  tw`h-[72px]`,
  tw`mr-[-32px]`,
  tw`ml-[-32px]`,
  tw`bg-black`,
  tw`gap-3`,
  tw`md:mt-[72px]`,
  tw`md:mx-0`,
  tw`xl:mt-[409px]`,
  css`
    > span {
      ${tw`text-base`}
      ${tw`text-white`}
      ${tw`leading-[24px]`}
    }

    > strong {
      ${tw`font-bold`}
      ${tw`text-2xl`}
      ${tw`text-white`}
      ${tw`leading-[100%]`}
    }
  `,
]);

const BusWrapper = styled.div([
  tw`absolute`,
  tw`z-[100]`,
  tw`bottom-[18.76px]`,
  tw`left-[-189.35px]`,
  tw`w-[189.35px]`,
  tw`h-[122.64px]`,
  tw`md:bottom-[30px]`,
  tw`md:left-[-315.75px]`,
  tw`md:w-[315.75px]`,
  tw`md:h-[204.51px]`,
  tw`xl:bottom-[48px]`,
  tw`xl:left-[-430px]`,
  tw`xl:w-[430px]`,
  tw`xl:h-[278px]`,
]);

const Row = styled.div([
  tw`w-full`,
  tw`animate-move-right`,
]);

const BusAnimation = styled.div([
  tw`flex`,
  tw`flex-wrap`,
]);

const Sale = styled.div([
  tw`w-full`,
  tw`flex`,
  tw`justify-end`,
]);

const IconWrapper = styled.span([
  tw`flex`,
  tw`items-center`,
  tw`justify-center`,
  tw`bg-gray-10`,
  tw`rounded-[50%]`,
  tw`w-7`,
  tw`h-7`,
  `
    svg {
      path {
        fill: #fff;
      }
    }
  `,
]);

const TimeDesc = styled.div([
  tw`flex`,
  tw`items-center`,
  tw`gap-2`,
  tw`text-base`,
  tw`font-bold`,
  tw`text-white`,
  tw`md:gap-3`,
  tw`md:text-lg`,
  tw`xl:text-base`,
]);

const TimeInner = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`items-start`,
  tw`gap-3`,
  tw`md:gap-4`,
  tw`xl:gap-5`,
]);

const Time = styled.div([
  tw`flex`,
  tw`justify-end`,
  tw`w-full`,
  tw`mt-6`,
  tw`md:mt-[61px]`,
  tw`xl:mt-[365px]`,
]);

const StyledButton = styled.span([
  tw`w-[160px]`,
  tw`h-[44px]`,
  tw`flex`,
  tw`rounded`,
  tw`items-center`,
  tw`justify-center`,
  tw`text-base`,
  tw`text-black`,
  tw`mt-7`,
  tw`bg-white`,
  tw`cursor-pointer`,
  tw`md:text-xl`,
  tw`md:w-[200px]`,
  tw`md:h-[52px]`,
  tw`md:mt-[72px]`,
  tw`xl:text-base`,
  tw`hover:bg-gray-80`,
]);

const ArtistInfo = styled.div([
  tw`mt-6`,
  tw`md:mt-8`,
  tw`xl:mt-[52px]`,
  css`
    strong {
      ${tw`text-sm`}
      ${tw`font-bold`}
      ${tw`text-gray-30`}
      ${tw`md:text-base`}
    }
  `,
]);

const ArtistName = styled.div([
  tw`flex`,
  tw`items-center`,
  tw`mt-2`,
  tw`md:mt-4`,
  css`
    > span {
      ${tw`text-base`}
      ${tw`leading-none`}
      ${tw`ml-3`}
      ${tw`md:text-xl`}
      ${tw`md:ml-4`}
    }
  `,
]);

const ArtistIconWrapper = styled.div([
  tw`relative`,
  tw`w-[52px]`,
  tw`h-[52px]`,
  tw`md:w-[60px]`,
  tw`md:h-[60px]`,
  css`
    & + div {
      ${tw`ml-[-10px]`}
      ${tw`md:ml-[-16px]`}
    }
  `,
]);

const Content = styled.div([
  tw`w-full`,
  tw`px-8`,
  tw`md:px-[80px]`,
  tw`xl:px-0`,
  tw`xl:max-w-[1200px]`,
  tw`xl:mx-auto`,
]);

const Title = styled.h2([
  tw`font-header`,
  tw`font-bold`,
  tw`pt-8`,
  tw`text-3xl`,
  tw`md:text-[54px]`,
  tw`md:pt-[80px]`,
  tw`leading-[34px]`,
  tw`md:leading-[60px]`,
]);

const Wrapper = styled.div([
  tw`relative`,
  tw`max-w-[1920px]`,
  tw`min-h-[600px]`,
  tw`mx-auto`,
  `background: url("https://file.mir4global.com/nile/resources/img/lus/bg_life_lus.png") left / cover no-repeat`,
  tw`md:min-h-[1000px]`,
  tw`xl:min-h-[1500px]`,
]);

const Container = styled.div([
  tw`relative`,
  tw`overflow-hidden`,
  `background: url("https://file.mir4global.com/nile/resources/img/lus/bg_life_lus_1px.png") repeat`,
]);
