import { useEffect, useMemo, useRef } from 'react';
import lottie from 'lottie-web';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTranslation } from 'next-i18next';
import lottieHeroWonderDao from './data/lottie_dao_home_wonderdao.json';
import { IconLogo } from '@/components/common/logo/icon';
import { Tag } from '@components/common/tag';

import { css } from '@emotion/core';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import Link from 'next/link';

import IconArrow from '@/assets/icons/common/arrow/ico_arrow_right.svg';

export const DaoHomeHero = () => {
  const { t } = useTranslation('daoHome');
  const { i18n } = useTranslation('ko');
  // lottie div Element
  const daoLottieHeroWonder = useRef<HTMLDivElement>(null);

  const swiperHero = useRef<HTMLDivElement>(null);

  const swiperEvt = useRef<any>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const lottieLoad = lottie.loadAnimation({
      container: daoLottieHeroWonder.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: lottieHeroWonderDao,
    });
  }, []);

  return (
    <HeroBannerSection ref={swiperHero}>
      <Swiper
        // initialSlide={1}
        slidesPerView={1}
        speed={1000}
        threshold={20}
        onInit={(swiper) => {
          swiperEvt.current = swiper;
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          console.log(swiper.activeIndex, 'active index');
        }}
        onSlidePrevTransitionEnd={(swiper) => {
          //
        }}
        onSlidePrevTransitionStart={(swiper) => {
          //
        }}
        onSlideNextTransitionStart={(swiper) => {
          //
        }}
        onSlideNextTransitionEnd={(swiper) => {
          //
        }}
      >
        <SwiperSlide className="wonder-dao">
          <HeroBannerWrap>
            {/* 11월 11일 오픈 임시 컨텐츠 */}
            <HeroBannerInner>
              <HeroTextContainer>
                <HeroLogo>
                  <IconLogo type="wonder" size={60} fullType />
                </HeroLogo>
                <Title>
                  <Tag background="white" color="#1a1a1a">
                    Unfolding Soon!
                  </Tag>
                  <h1>WONDER DAO</h1>
                </Title>
                <HeroDesc>
                  {i18n.language === 'en'
                    ? 'WONDER DAO is a DAO that is entrusted with one of 40 powers to operate the WEMIX blockchain ecosystem. Recruitment will start soon. wait please!'
                    : 'WONDER DAO는 WEMIX 블록체인 생태계 운영을 위한 40개의 권한 중 하나를 위임받는 DAO입니다. 모집이 곧 시작될 예정입니다. 조금만 기다려주세요!'}
                </HeroDesc>
                <Link
                  href={
                    i18n.language === 'en'
                      ? 'https://40wonders.wemix.com/'
                      : 'https://40wonders.wemix.com/?lang=ko'
                  }
                  target="_blank"
                >
                  <HeroWonderBtn>
                    <span>
                      {i18n.language === 'en'
                        ? 'Browse 40 WONDERS'
                        : '40 WONDERS 살펴보기'}
                    </span>
                    <IconArrow width={24} height={24} />
                  </HeroWonderBtn>
                </Link>
                <HeroDashboard>
                  {i18n.language === 'en' ? (
                    <>
                      <span>Recruitment start date</span>
                      <strong>Unfolding Soon in December</strong>
                    </>
                  ) : (
                    <>
                      <span>모집 시작일</span>
                      <strong>12월 중 오픈 예정</strong>
                    </>
                  )}
                </HeroDashboard>
              </HeroTextContainer>
              <HeroLottie ref={daoLottieHeroWonder} />
            </HeroBannerInner>
          </HeroBannerWrap>
        </SwiperSlide>
      </Swiper>
    </HeroBannerSection>
  );
};

const HeroWonderBtn = styled.div([
  tw`font-header`,
  tw`pt-5 md:pt-6`,
  tw`flex gap-2 items-center`,
  tw`text-sm md:text-base`,
  tw`text-white`,
  tw`!leading-none`,
  tw`font-bold`,
  tw`cursor-pointer`,
  css`
    svg {
      path {
        fill: white;
      }
      ${tw`md:w-8`}
      ${tw`md:h-8`}
    }
    &:hover {
      span {
        ${tw`underline`}
      }
    }
  `,
]);

const HeroLottie = styled.div([
  tw`w-full`,
  tw`h-full`,
  tw`md:pt-[74px]`,
  tw`md:pb-[76px]`,
  tw`lg:w-[48.2%]`,
  tw`lg:p-0`,
  tw`lg:mb-[34px]`,
  tw`xl:w-[624px]`,
  tw`xl:mb-[56px]`,
  css`
    svg {
      ${tw`w-auto`}
      ${tw`h-full`}
    }
  `,
]);

const HeroDesc = styled.p([
  tw`text-sm md:text-lg xl:text-base`,
  tw`leading-[22px] md:leading-[26px] xl:leading-[1.5]`,
  tw`text-white`,
  tw`font-header`,
  tw`pt-4 lg:pt-3 xl:pt-4`,
  tw`whitespace-pre-line`,
]);

const HeroDashboard = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`pt-8 md:pt-[50px] xl:pt-[50px]`,
  tw`gap-2 md:gap-4`,
  css`
    span {
      ${tw`font-header`}
      ${tw`!leading-none`}
      ${tw`text-xs md:text-sm`}
      ${tw`text-gray-60`}
    }

    strong {
      ${tw`!leading-none`}
      ${tw`text-xl md:text-2xl`}
      ${tw`text-white`}
      ${tw`font-bold`}
    }
  `,
]);

const HeroTextContainer = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`w-full`,
  tw`flex-wrap`,
  tw`order-2`,
  tw`lg:order-none`,
  `
    @media (min-width: 1024px) {
      width: calc(100% - 48.2% - 34px);
    }
  `,
  tw`lg:w-[calc(51.8% - 34px)]`,
  tw`lg:justify-center`,
  tw`lg:items-start`,
  tw`xl:w-[calc(100% - 624px - 56px)]`,
]);

const Title = styled.div([
  tw`pt-4`,
  tw`md:pt-10`,
  css`
    h1 {
      ${tw`pt-2 md:pt-4`}
      ${tw`text-[32px] md:text-[64px] xl:text-[60px]`}
      ${tw`leading-[34px] md:leading-[66px] xl:leading-[62px]`}
      ${tw`font-bold`}
      ${tw`font-header`}
      ${tw`text-white`}
    }
  `,
]);

const HeroLogo = styled.div([
  tw`w-[32px]`,
  tw`md:w-[60px]`,
  css`
    svg {
      ${tw`w-full`}
      ${tw`h-auto`}
    }
  `,
]);

const HeroBannerInner = styled.div([
  tw`flex`,
  tw`h-full`,
  tw`justify-between`,
  tw`w-full`,
  tw`flex-wrap`,
  tw`px-5`,
  tw`gap-10`,
  tw`md:gap-0`,
  tw`md:flex-nowrap`,
  tw`md:justify-start`,
  tw`md:flex-col`,
  tw`md:pt-10`,
  tw`md:pb-[60px]`,
  tw`md:px-10`,
  tw`lg:gap-[34px]`,
  tw`lg:py-0`,
  tw`lg:flex-row`,
  tw`xl:gap-[56px]`,
  tw`xl:px-0`,
  tw`xl:max-w-[1200px]`,
  tw`xl:mx-auto`,
]);

const HeroBannerWrap = styled.div([tw`h-full`]);

const HeroBannerSection = styled.div([
  tw`w-full`,
  tw`lg:h-[740px]`,
  tw`pt-12 md:pt-[60px]`,
  css`
    .swiper {
      ${tw`h-full`}

      &-slide {
        ${tw`pt-[58px]`}
        ${tw`pb-10`}
        ${tw`md:p-0`}
        ${tw`h-full`}
        
        &.wonder-dao {
          ${tw`bg-black`}
        }
      }
    }
  `,
]);
