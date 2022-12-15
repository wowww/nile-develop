import React, { useEffect, useRef, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DaoHomeHero } from '@components/dao/hero';
import DaoHomeCheckMore from '@components/dao/info';

import IconScrollArrow from '@/assets/icons/common/arrow/ico_arrow_right.svg';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import { css } from '@emotion/core';
import { DaoNeithComponents } from '@components/dao/neith/components';
import { DaoHomeType } from '@components/dao/apply';
import { DaoLottie } from '@components/dao/lottie';
import ReactFullpage, { fullpageApi } from '@fullpage/react-fullpage';
import { Footer } from '@components';
import {useRecoilState} from "recoil";
import {headerHide} from "@components/common/header/utils";

const Dao = () => {
  const [swiperMousewheel, setSwiperMousewheel] = useState<boolean>(false);
  const fullpage = useRef<fullpageApi>();
  const [swiperActive, setSwiperActive] = useState(0);
  const [allowScrolling, setAllowScrolling] = useState(false);
  const [swiperDirection, setSwiperDirection] = useState('up');

  const [hide, setHide] = useRecoilState(headerHide);

  useEffect(() => {
    if (fullpage.current !== null && fullpage.current !== undefined) {
      fullpage.current.setAllowScrolling(allowScrolling);
    }
  }, [allowScrolling]);

  useEffect(() => {
    if (swiperActive === 0) {
      if (swiperDirection === 'up') fullpage.current?.moveSectionUp();
    } else if (swiperActive === 5) {
      if (swiperDirection === 'down') fullpage.current?.moveSectionDown();
    }
  }, [swiperActive, swiperDirection]);

  return (
    <div>
      <ReactFullpage
        licenseKey="3K4BI-R3K06-HKP97-J56AH-UNYZO"
        scrollingSpeed={800}
        scrollOverflow
        onLeave={(origin, destination, direction) => {
          if (origin.index === 0 && direction === 'down') {
            setSwiperActive(1);
            setHide(true);
            // swiper in
          } else if (origin.index === 1 && direction === 'up') {
            setSwiperActive(0);
            // swiper up
          } else if (origin.index === 2 && direction === 'up') {
            setSwiperActive(1);
            setHide(true);
          }
        }}
        afterLoad={(origin, destination, direction) => {
          if (destination.index === 1) {
            if (fullpage.current !== null) {
              setAllowScrolling(false);
            }
          } else {
            setAllowScrolling(true);
            setSwiperMousewheel(true);
          }
          if (destination.index === 0 && direction === 'up') {
            setHide(false);
          }
        }}
        render={({ state, fullpageApi }) => {
          fullpage.current = fullpageApi;
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <DaoHomeHero />
                <DaoHomeCheckMore />
              </div>
              <LottieWrap className="section">
                <DaoLottie
                  swiperMousewheelState={swiperMousewheel}
                  swiperActive={swiperActive}
                  setAllowScrolling={setAllowScrolling}
                  setSwiperActive={setSwiperActive}
                  setSwiperDirection={setSwiperDirection}
                />
              </LottieWrap>
              <div className="section">
                <DaoNeithComponents />
                <DaoHomeType />
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <DaoFloating>
        <Scroll>
          <Icon>
            <IconScrollArrow />
          </Icon>
          <span>SCROLL</span>
        </Scroll>
        <Top
          onClick={() => {
            //
          }}
        >
          <Icon>
            <IconScrollArrow />
          </Icon>
          <span>TOP</span>
        </Top>
      </DaoFloating>
    </div>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'daoHome',
        'common',
      ])) /* 22.11.02 수정: 다국어 공통 파일 추가 */,
    },
  };
};

const LottieWrap = styled.div([
  css`
    .fp-overflow {
      ${tw`h-full`}
    }
  `,
])

const Top = styled.button([
  tw`absolute`,
  tw`bottom-10`,
  tw`right-10`,
  tw`bg-black`,
  tw`w-[60px]`,
  tw`h-[60px]`,
  tw`flex`,
  tw`items-center`,
  tw`flex-col`,
  tw`justify-center`,
  tw`rounded-[50%]`,
  css`
    span {
      ${tw`font-bold`}
      ${tw`mt-[2px]`}
      ${tw`text-xs`}
      ${tw`leading-none`}
      ${tw`text-white`}
    }
  `,
]);

const Scroll = styled.div([
  tw`absolute`,
  tw`bottom-10`,
  tw`right-10`,
  tw`w-[60px]`,
  tw`h-[60px]`,
  tw`flex`,
  tw`items-center`,
  tw`flex-col`,
  tw`justify-center`,
  tw`bg-white`,
  tw`rounded-[50%]`,
  css`
    span {
      ${tw`font-bold`}
      ${tw`text-black`}
      ${tw`mt-[2px]`}
      ${tw`text-xs`}
      ${tw`leading-none`}
    }
  `,
]);

const Icon = styled.div([
  `transform: rotate(90deg)`,
  css`
    @keyframes jump-arrow {
      0%,
      20%,
      55%,
      80%,
      100% {
        transform: translate3d(0, 0, 0);
      }

      40% {
        transform: translate3d(-10px, 0, 0);
      }

      70% {
        transform: translate3d(-5px, 0, 0);
      }

      90% {
        transform: translate3d(-3px, 0, 0);
      }
    }

    svg {
      ${tw`w-6`}
      ${tw`h-6`}
      animation: jump-arrow 2.5s infinite;
    }
  `,
]);

const DaoFloating = styled.div([
  tw`sticky`,
  tw`bottom-0`,
  tw`h-fit`,
  tw`z-[1]`,
  tw`w-full`,
  css`
    ${Top} {
      ${Icon} {
        transform: translateY(-10px) rotate(-90deg);

        path {
          fill: #fff;
        }
      }
    }
  `,
]);

export default Dao;
