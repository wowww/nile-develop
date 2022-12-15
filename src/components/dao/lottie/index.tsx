import lottieWonderDao00 from './data/vid0.json';
import lottieWonderDao01 from './data/vid1-1.json';
import lottieWonderDao02 from './data/vid1-2.json';
import lottieWonderDao03 from './data/vid2-1.json';
import lottieWonderDao04 from './data/vid2-2.json';
import lottieWonderDao05 from './data/vid3-1.json';
import lottieWonderDao06 from './data/vid3-2.json';
import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import { useTranslation } from 'next-i18next';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import SwiperCore, { Mousewheel, EffectFade, SwiperOptions } from 'swiper';

import { css } from '@emotion/core';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import classNames from 'classnames';

interface DaoLottieProps {
  swiperMousewheelState: boolean;
  swiperActive: number;
  setSwiperActive: (t: number) => void;
  setAllowScrolling: (t: boolean) => void;
  setSwiperDirection: (t: string) => void;
}

export const DaoLottie = ({
  swiperMousewheelState,
  swiperActive,
  setAllowScrolling,
  setSwiperActive,
  setSwiperDirection,
}: DaoLottieProps) => {
  const { t } = useTranslation('daoHome');

  const daoLottieEl000 = useRef<HTMLDivElement>(null);
  const daoLottieEl010 = useRef<HTMLDivElement>(null);
  const daoLottieEl011 = useRef<HTMLDivElement>(null);
  const daoLottieEl020 = useRef<HTMLDivElement>(null);
  const daoLottieEl021 = useRef<HTMLDivElement>(null);
  const daoLottieEl030 = useRef<HTMLDivElement>(null);
  const daoLottieEl031 = useRef<HTMLDivElement>(null);

  const lottieLoadRef = useRef<any>();
  const lottieRef = useRef<any>();
  const swiperEvt = useRef<any>();

  useEffect(() => {
    if (swiperMousewheelState) swiperEvt.current.mousewheel.enable();
    else swiperEvt.current.mousewheel.disable();
  }, [swiperMousewheelState]);

  useEffect(() => {
    if (swiperEvt.current !== null && swiperEvt.current !== undefined) {
      swiperEvt.current.slideTo(
        swiperActive,
      ); /* 22.11.02 수정: 전역 데이터로 변경 */
    }
  }, [swiperActive]);

  const removeClassAll = (index: number) => {
    lottieRef.current.forEach((lottieEl: HTMLElement, idx: number) => {
      if (index !== idx) lottieEl.classList.remove('active');
    });
  };

  const lottieAct = (pause: number | undefined, active: number | undefined) => {
    if (pause !== undefined) lottieLoadRef.current[pause].lottie.pause();
    if (active !== undefined) {
      removeClassAll(active);
      lottieLoadRef.current[active].lottie.setDirection(1);
      lottieRef.current[active].classList.add('active');
      lottieLoadRef.current[active].lottie.goToAndPlay(0);
    }
  };
  const lottieReverseAct = (active: number) => {
    lottieLoadRef.current[active].lottie.setDirection(-1);
    lottieLoadRef.current[active].lottie.play();
  };
  const lottieReverseOnCompleteAct = (
    active: number,
    remove: boolean | undefined,
    nextActive: number,
    nextPlay: boolean | undefined,
  ) => {
    if (active !== undefined) {
      lottieLoadRef.current[active].lottie.pause();
      lottieLoadRef.current[active].lottie.setDirection(1);
    }
    if (remove) removeClassAll(nextActive);
    if (nextActive !== undefined) {
      lottieRef.current[nextActive].classList.add('active');
      lottieLoadRef.current[nextActive].lottie.setDirection(-1);
      if (nextPlay) lottieLoadRef.current[nextActive].lottie.play();
    }
  };

  const swiperSetEvents: any = {
    onInit: (swiper: SwiperCore) => {
      swiperEvt.current = swiper;
    },
    /* 22.11.02 수정 start: onSlideChange 이벤트 추가 */
    onSlideChange: (swiper: SwiperCore) => {
      setSwiperActive(swiper.activeIndex);
      console.log(swiper.previousIndex);
      if (swiper.previousIndex >= swiper.activeIndex) {
        setSwiperDirection('up');
      } else {
        setSwiperDirection('down');
      }
    },
    /* 22.11.02 수정 end: onSlideChange 이벤트 추가 */
    onSlideChangeTransitionStart: (swiper: SwiperCore) => {
      swiperEvt.current.mousewheel.enable();
    },
    // 첫 슬라이드 도달 시
    onReachBeginning: (swiper: SwiperCore) => {
      setAllowScrolling(true);
      swiperEvt.current.mousewheel.disable();
    },
    // 마지막 슬라이드 도달 시
    onReachEnd: (swiper: SwiperCore) => {
      setAllowScrolling(true);
      swiperEvt.current.mousewheel.disable();
    },
    onSlideNextTransitionStart: (swiper: SwiperCore) => {
      if (swiper.activeIndex === 1) {
        lottieAct(0, 0);
      } else if (swiper.activeIndex === 2) {
        lottieAct(0, 1);
      } else if (swiper.activeIndex === 3) {
        lottieAct(2, 3);
      } else if (swiper.activeIndex === 4) {
        lottieAct(4, 5);
      } else if (swiper.activeIndex === 5) {
        /* 22.11.02 수정 start: 동작 오류 수정 */
        setAllowScrolling(true);
        swiperEvt.current.mousewheel.disable();
      }
      /* 22.11.02 수정 end: 동작 오류 수정 */
    },
    onSlideNextTransitionEnd: (swiper: SwiperCore) => {
      if (swiper.activeIndex === 2) {
        lottieAct(1, 2);
      } else if (swiper.activeIndex === 3) {
        lottieAct(3, 4);
      } else if (swiper.activeIndex === 4) {
        lottieAct(5, 6);
      }
    },
    onSlidePrevTransitionStart: (swiper: SwiperCore) => {
      if (swiper.activeIndex === 3) {
        lottieReverseOnCompleteAct(6, true, 5, true);
      } else if (swiper.activeIndex === 2) {
        lottieReverseOnCompleteAct(4, true, 3, true);
      } else if (swiper.activeIndex === 1) {
        lottieReverseOnCompleteAct(2, true, 1, true);
      } else if (swiper.activeIndex === 0) {
        /* 22.11.02 수정 start: 동작 오류 수정 */
        setAllowScrolling(true);
        swiperEvt.current.mousewheel.disable();
      }
      /* 22.11.02 수정 end: 동작 오류 수정 */
    },
    onSlidePrevTransitionEnd: (swiper: SwiperCore) => {
      if (swiper.activeIndex === 4) {
        lottieReverseAct(6);
      } else if (swiper.activeIndex === 3) {
        lottieReverseOnCompleteAct(5, true, 4, true);
      } else if (swiper.activeIndex === 2) {
        lottieReverseOnCompleteAct(3, true, 2, true);
      }
    },
  };

  useEffect(() => {
    const lottieAni = [
      lottieWonderDao00,
      lottieWonderDao01,
      lottieWonderDao02,
      lottieWonderDao03,
      lottieWonderDao04,
      lottieWonderDao05,
      lottieWonderDao06,
    ];
    const lottieElRef: HTMLDivElement[] = [
      daoLottieEl000.current!,
      daoLottieEl010.current!,
      daoLottieEl011.current!,
      daoLottieEl020.current!,
      daoLottieEl021.current!,
      daoLottieEl030.current!,
      daoLottieEl031.current!,
    ];

    const lottieLoad: object[] = [{}, {}, {}, {}, {}, {}, {}];

    lottieLoad.forEach((obj: object, index: number) => {
      const lottieLoop = () => {
        return index === 2 || index === 4;
      };
      const lottieAutoPlay = () => {
        return index === 2 || index === 4;
      };

      lottieLoad[index] = {
        lottie: lottie.loadAnimation({
          container: lottieElRef[index],
          renderer: 'svg',
          loop: lottieLoop(),
          autoplay: true,
          animationData: lottieAni[index],
        }),
      };
    });

    lottieLoadRef.current = lottieLoad;
    lottieRef.current = lottieElRef;
  }, []);

  const swiperSetOptions: SwiperOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    modules: [Mousewheel, EffectFade],
    mousewheel: {
      thresholdDelta: 30, // 휠 감도
      thresholdTime: 300, // 휠 지연
    },
    speed: 1000,
    threshold: 0, // 터치 감도
    effect: 'fade',
  };

  return (
    <Container>
      <Swiper {...swiperSetOptions} {...swiperSetEvents}>
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
      </Swiper>
      <LottieDescWrap>
        <LottieDescInner>
          <LottieTitleWrap
            className={classNames({
              active: swiperActive === 0 || swiperActive === 1,
            })}
          >
            <SubTitle>{t('coreValue.title1')}</SubTitle>
            <Title>{t('coreValue.title2')}</Title>
          </LottieTitleWrap>
          <InfoList>
            <InfoListItem
              className={classNames({ active: swiperActive === 2 })}
            >
              <ItemTitle>{t('coreValue.subtitle1')}</ItemTitle>
              <ItemDesc>
                <strong>{t('coreValue.subdesc1-1')}</strong>
                <span>{t('coreValue.subdesc1-2')}</span>
              </ItemDesc>
            </InfoListItem>
            <InfoListItem
              className={classNames({ active: swiperActive === 3 })}
            >
              <ItemTitle>{t('coreValue.subtitle2')}</ItemTitle>
              <ItemDesc>
                <strong>{t('coreValue.subdesc2-1')}</strong>
                <span>{t('coreValue.subdesc2-2')}</span>
              </ItemDesc>
            </InfoListItem>
            <InfoListItem
              className={classNames({
                active: swiperActive === 4 || swiperActive === 5,
              })}
            >
              <ItemTitle>{t('coreValue.subtitle3')}</ItemTitle>
              <ItemDesc>
                <strong>{t('coreValue.subdesc3-1')}</strong>
                <span>{t('coreValue.subdesc3-2')}</span>
              </ItemDesc>
            </InfoListItem>
          </InfoList>
        </LottieDescInner>
      </LottieDescWrap>
      <LottieComponentWrap>
        <LottieComponentInner>
          <LottieComponent ref={daoLottieEl000} />
          <LottieComponent ref={daoLottieEl010} />
          <LottieComponent ref={daoLottieEl011} />
          <LottieComponent ref={daoLottieEl020} />
          <LottieComponent ref={daoLottieEl021} />
          <LottieComponent ref={daoLottieEl030} />
          <LottieComponent ref={daoLottieEl031} />
        </LottieComponentInner>
      </LottieComponentWrap>
    </Container>
  );
};

const LottieComponent = styled.div(({ className }) => [
  tw`opacity-0`,
  tw`absolute`,
  tw`bottom-0`,
  tw`flex`,
  tw`left-[50%]`,
  tw`w-full`,
  tw`h-full`,
  tw`max-h-[800px]`,
  tw`justify-center`,
  tw`bg-white`,
  `transform: translateX(-50%)`,
  css`
    &.active {
      ${tw`opacity-100`}
      &:first-of-type {
        ${tw`z-[19]`}
      }
      &:nth-of-type(2) {
        ${tw`z-[18]`}
      }
      &:nth-of-type(3) {
        ${tw`z-[17]`}
      }
      &:nth-of-type(4) {
        ${tw`z-[16]`}
      }
      &:nth-of-type(5) {
        ${tw`z-[15]`}
      }
      &:nth-of-type(6) {
        ${tw`z-[14]`}
      }
      &:nth-of-type(7) {
        ${tw`z-[13]`}
      }

      svg {
        ${tw`left-[50%]`}
        ${tw`bottom-0`}
        ${tw`absolute`}
        ${tw`!w-auto`}
        ${tw`!h-[100.834vw]`}
        ${tw`md:!h-[70.9vh]`}
        ${tw`xl:left-[57.96%]`}
        ${tw`xl:!h-full`}
        transform: translate3d(-50%, 0, 0) !important;
      }
    }
  `,
]);

const LottieComponentWrap = styled.div([
  tw`absolute`,
  tw`top-0`,
  tw`left-0`,
  tw`z-0`,
  tw`overflow-hidden`,
  tw`w-full`,
  tw`h-full`,
]);

const LottieComponentInner = styled.div([
  tw`relative`,
  tw`flex`,
  tw`w-full`,
  tw`h-full`,
  tw`mx-auto`,
]);

const Container = styled.div([
  tw`relative`,
  tw`top-0`,
  tw`h-full`,
  css`
    .swiper {
      ${tw`absolute`}
      ${tw`w-full`}
      ${tw`h-auto`}
      ${tw`left-0`}
      ${tw`top-0`}
      ${tw`z-[10]`}
      
      &-wrapper {
        height: calc(var(--vh, 1vh) * 100) !important;
      }

      &-slide {
        ${tw`!h-full`}
      }
    }
  `,
]);

const ItemDesc = styled.div([
  tw`font-header`,
  tw`pb-10`,
  tw`md:pb-0`,
  tw`md:h-0`,
  tw`md:overflow-hidden`,
  tw`md:pl-[52px]`,
  `transition: all .3s`,
  css`
    strong {
      ${tw`block`}
      ${tw`text-sm`}
      ${tw`text-gray-30`}
      ${tw`leading-[22px]`}
      ${tw`font-normal`}
      ${tw`pt-3`}
      ${tw`md:text-lg`}
      ${tw`md:leading-[26px]`}
      ${tw`md:leading-[26px]`}
      ${tw`md:font-bold`}
      ${tw`md:text-black`}
    }

    span {
      ${tw`text-sm`}
      ${tw`text-gray-30`}
      ${tw`leading-[22px]`}
      ${tw`md:text-base`}
      ${tw`md:leading-[1.5]`}
      ${tw`md:pt-2 md:pb-10`}
      ${tw`md:block`}
    }
  `,
]);

const ItemTitle = styled.h3([
  tw`text-lg`,
  tw`leading-[24px]`,
  tw`font-bold`,
  tw`md:text-xl`,
  tw`md:leading-[1.8]`,
  tw`md:py-3`,
  tw`md:pl-[61px]`,
  tw`md:font-normal`,
  tw`md:whitespace-nowrap`,
  css`
    @media (min-width: 768px) {
      transition: all 0.3s;
      text-indent: -61px;
      
      &::before {
        content: '0' counter(number);
        counter-increment: number;
        ${tw`font-bold`}
        ${tw`text-2xl`}
        ${tw`pr-6`}
      }

      &::after {
        ${tw`block`}
        ${tw`content-['']`}
        ${tw`absolute`}
        ${tw`bottom-0`}
        ${tw`left-0`}
        ${tw`w-full`}
        ${tw`border-b`}
        ${tw`border-black`}
      }
    }
  `,
]);

const InfoList = styled.ol([
  tw`relative`,
  `counter-reset: number`,
  tw`md:max-w-[486px]`,
  css`
    @media (min-width: 768px) {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border-top: 1px solid #1a1a1a;
      }
    }
  `,
]);

const InfoListItem = styled.li(({ className }) => [
  tw`font-header`,
  tw`flex`,
  tw`flex-col`,
  tw`gap-3`,
  tw`relative`,
  tw`pt-5`,
  `transition: all .3s`,
  tw`hidden`,
  tw`text-center`,
  tw`md:p-0`,
  tw`md:block`,
  tw`md:text-left`,
  className?.includes('active') && [
    tw`block`,
    tw`md:pt-10`,
    css`
      @media (min-width: 768px) {
        ${ItemTitle} {
          ${tw`text-[28px]`}
          ${tw`font-bold`}
          ${tw`leading-[1.25]`}
        }

        ${ItemDesc} {
          ${tw`h-auto`}
        }
      }
    `,
  ],
]);

const Title = styled.h2([
  tw`font-header`,
  tw`pt-4 md:p-0`,
  tw`font-bold`,
  tw`text-xl md:text-4xl`,
  `transition: all .3s`,
  tw`leading-[28px] md:leading-[1.5]`,
  tw`hidden`,
  tw`md:block`,
  tw`md:whitespace-pre-line`,
  tw`md:h-0`,
  tw`md:overflow-hidden`,
]);

const SubTitle = styled.span([
  tw`text-base`,
  tw`!leading-none`,
  tw`md:text-2xl`,
  tw`md:font-medium`,
  tw`md:block`,
  tw`md:pb-0`,
]);

const LottieTitleWrap = styled.div(({ className }) => [
  tw`text-center`,
  tw`md:text-left`,
  tw`md:pb-[44px]`,
  tw`xl:pb-[80px]`,
  className?.includes('active') && [
    tw`md:pb-[120px]`,
    css`
      ${Title} {
        ${tw`h-auto`}
        ${tw`block`}
      }
      
      ${SubTitle} {
        ${tw`md:pb-10`}
      }
    `,
  ],
]);

const LottieDescInner = styled.div([
  tw`w-full`,
  tw`px-5`,
  tw`md:px-10`,
  tw`xl:p-0`,
  tw`xl:max-w-[1200px]`,
  tw`xl:mx-auto`,
]);

const LottieDescWrap = styled.div([
  tw`relative`,
  tw`z-[5]`,
  tw`top-0`,
  tw`left-0`,
  tw`flex`,
  tw`w-full`,
  tw`h-full`,
  tw`justify-center`,
  tw`pt-[11.73vw]`,
  tw`xl:pt-[108px]`,
  css`
    ${LottieTitleWrap} {
      &.active {
        + ${InfoList} {
          &::before {
            content: none;
          }
        }
      }
    }
  `,
]);
