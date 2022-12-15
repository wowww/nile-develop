import React, { useCallback, useRef, useState } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';
import { stackChartDarkDefaultData } from '@components/home/chart/data/chartDummyData';
import 'swiper/css';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import classNames from 'classnames';
import { css } from '@emotion/core';
import { HomeStackLineChart } from '@components/home/chart';

import IconArrow from '@/assets/icons/common/arrow/ico_arrow_24.svg';

interface BannerDataType {
  name: string;
  figure: number;
  unit: string;
}

type NileHomeBannerProps = {
  data: BannerDataType[],
};

export const NileHomeBanner = ({ data }: NileHomeBannerProps) => {
  const [hasChart, setHasChart] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const growthSwiper = useRef<any>();

  const onClickItem = useCallback((index) => {
    growthSwiper.current?.slideTo(index, 0, false);
    setSelectedIndex(index);
  }, []);

  const onClickBtn = useCallback(() => {
    if (isOpen) {
      setSelectedIndex(0);
    }
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  const swiperSetOptions: SwiperOptions = {
    slidesPerView: 1,
    speed: 1000,
    threshold: 10,
    modules: [Navigation],
    navigation: {
      prevEl: prevRef.current, // 이전 버튼
      nextEl: nextRef.current, // 다음 버튼
    },
    spaceBetween: 0,
  };

  const swiperSetEvents: any = {
    onInit: (swiper: SwiperCore) => {
      growthSwiper.current = swiper;
    },
    onSlideChangeTransitionStart: (swiper: any) => {
      // console.log(swiper.activeIndex);
      setSelectedIndex(swiper.activeIndex);
    },
    onBeforeInit: (swiper: any) => {
      // eslint-disable-next-line no-param-reassign
      swiper.params.navigation.prevEl = prevRef.current;
      // eslint-disable-next-line no-param-reassign
      swiper.params.navigation.nextEl = nextRef.current;
    },
  };

  return (
    <Container>
      <Wrapper>
        <List>
          <ListInner>
            {data.map((item, index) => (
              <ListItem
                key={item.name}
                tabIndex={index}
                className={classNames({ isOpen, selected: isOpen && index === selectedIndex })}
                onClick={() => {
                  onClickItem(index);
                }}>
                <Value>
                  {item.unit}
                  <CountUp start={0} end={item.figure} separator="," decimals={0} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </Value>
                <Description>{item.name}</Description>
              </ListItem>
            ))}
          </ListInner>
        </List>
        {hasChart &&
          <StyledButton onClick={onClickBtn}>
            {isOpen && 'Close'}
            {isOpen ? <CloseArrow /> : <IconArrow />}
          </StyledButton>
        }
        {isOpen &&
          <ChartContainer>
            <ChartWrapper>
              <ChartButton className={classNames('before')} type="button" ref={prevRef}>
                <IconArrow />
              </ChartButton>
              <ChartButton type="button" ref={nextRef}>
                <IconArrow />
              </ChartButton>
              <Swiper {...swiperSetOptions} {...swiperSetEvents}>
                <SwiperSlide>
                  <div>
                    <Chart>
                      <HomeStackLineChart data={stackChartDarkDefaultData} category={['Total', 'WONDER', 'PATRON', 'Top3', 'etc']} />
                    </Chart>
                    <ChartDesc>각 DAO별 DT와 GT를 합산한 값입니다.</ChartDesc>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <Chart>
                      <HomeStackLineChart data={stackChartDarkDefaultData} category={['Total Volume', 'LUS264', 'Tangled', 'Top3', 'etc']} />
                    </Chart>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <Chart>
                      <HomeStackLineChart data={stackChartDarkDefaultData} category={['Total Transaction', 'DAO', 'Marketplace', 'Life(Dapp)']} />
                    </Chart>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <Chart>
                      <HomeStackLineChart data={stackChartDarkDefaultData} category={['Total Number of Profile Creations']} />
                    </Chart>
                  </div>
                </SwiperSlide>
              </Swiper>
            </ChartWrapper>
          </ChartContainer>
        }
      </Wrapper>
    </Container>
  );
};

const Chart = styled.div([
  tw`min-h-[252px]`,
]);

const ChartButton = styled.button(({ className }) => [
  tw`hidden`,
  tw`absolute`,
  tw`xl:block`,
  tw`w-10`,
  tw`h-10`,
  tw`right-0`,
  tw`top-[50%]`,
  tw`mt-[-20px]`,
  `
    flex: 0 0 auto;

    svg {
      transform: rotate(-90deg);
      width: 100%;
      height: 100%;
    }
  `,
  className?.includes('before') && [
    `
      right: initial;
      left: 0;

      svg {
        transform: rotate(90deg);
      }
    `,
  ],
]);

const ChartDesc = styled.span([
  tw`hidden`,
  tw`xl:flex`,
  tw`xl:items-center`,
  tw`xl:justify-end`,
  tw`mt-3`,
  tw`text-right`,
  tw`text-xs`,
  tw`text-gray-80`,
  `
    &:before {
      display: block;
      width: 4px;
      height: 4px;
      margin-right: 4px;
      background: #a6a6a6;
      border-radius: 50%;
      content: "";
    }
  `,
]);

const ChartWrapper = styled.div([
  tw`w-full`,
  tw`max-w-[1024px]`,
  tw`relative`,
  tw`xl:mx-auto`,
  tw`px-5`,
  tw`pt-5`,
  tw`md:pt-10`,
  tw`md:px-10`,
  tw`xl:px-[88px]`,
]);

const ListInner = styled.div([
  tw`grid`,
  tw`grid-cols-2`,
  tw`gap-x-6`,
  tw`gap-y-4`,
  tw`py-6`,
  tw`px-5`,
  tw`md:flex`,
  tw`max-w-[1200px]`,
  tw`mx-auto`,
  tw`md:py-0`,
  tw`md:px-10`,
  tw`xl:px-0`,
  tw`justify-between`,
]);

const CloseArrow = styled(IconArrow)([
  `transform: rotate(180deg)`,
]);

const ChartContainer = styled.div([
  tw`bg-black`,
  tw`h-[283px]`,
  tw`md:h-[474px]`,
  tw`xl:h-[367px]`,
]);

const Container = styled.div([
  tw`relative`,
  tw`z-10`,
  tw`bg-black`,
  tw`relative`,
]);

const Wrapper = styled.div([
  tw`relative`,
]);

const List = styled.ul([
  tw`relative`,
  tw`w-full`,
  tw`after:content-['']`,
  tw`after:absolute`,
  tw`after:bottom-0`,
  tw`after:h-px`,
  tw`after:w-full`,
  tw`after:bg-gray-10`,
]);

const ListItem = styled.li(({ className }) => [
  tw`flex`,
  tw`flex-col`,
  tw`gap-1`,
  tw`md:w-[180px]`,
  tw`relative`,
  tw`md:py-[35px]`,
  className?.includes('isOpen') && [
    tw`cursor-pointer`,
  ],
  className?.includes('selected') && [
    tw`after:content-['']`,
    tw`after:absolute`,
    tw`after:h-full`,
    tw`after:w-0.5`,
    tw`after:bg-white`,
    css`
      @media (max-width: 767px) {
        ${tw`after:top-0`}
        ${tw`after:left-[-10px]`}
      }
      @media (min-width: 768px) {
        ${tw`after:bottom-0`}
        ${tw`after:h-0.5`}
        ${tw`after:w-full`}
      }
    `,
  ],
]);

const Value = styled.span([
  tw`font-header`,
  tw`font-bold`,
  tw`text-xl`,
  tw`md:text-3xl`,
  tw`text-white`,
]);

const Description = styled.span([
  tw`text-xs`,
  tw`text-gray-80`,
]);

const StyledButton = styled.button([
  tw`text-base`,
  tw`text-white`,
  tw`absolute`,
  tw`bottom-[13px]`,
  tw`left-[50%]`,
  tw`flex`,
  tw`gap-2`,
  tw`items-center`,
  `
    transform: translateX(-50%);

    svg {
      path {
        fill: #FFFFFF;
      }
    }
  `,
]);
