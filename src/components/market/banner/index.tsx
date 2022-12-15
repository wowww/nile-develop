import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import classNames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import { MarketBannerLus264 } from '@components/market/banner/lus264';
import { MarketBannerTangled } from '@components/market/banner/tangled';
import { MarketBannerNile } from "@components/market/banner/nile";
import { MarketBannerAction } from "@components/market/banner/action/inex";

interface MarketMainBannerProps {
  swiperTime?: number;
}

export const MarketMainBanner = ({ swiperTime }: MarketMainBannerProps) => {
  return (
    <Container>
      <Swiper
        className={classNames('marketplace-swiper w-full')}
        style={{ '--swiper-time': `${swiperTime ?? 5}s` } as React.CSSProperties}
        slidesPerView={1}
        speed={1000}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        touchStartPreventDefault={false}
        loop
        autoplay={{ delay: (swiperTime ?? 5) * 1000, disableOnInteraction: false, waitForTransition: false }}
      >
        <SwiperSlide>
          <MarketBannerNile />
        </SwiperSlide>
        <SwiperSlide>
          <MarketBannerLus264 />
        </SwiperSlide>
        {/* <SwiperSlide> */}
        {/*  <MarketBannerTangled /> */}
        {/* </SwiperSlide> */}
        <SwiperSlide>
          <MarketBannerAction />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

MarketMainBanner.defaultProps = {
  swiperTime: 50,
};

const Container = styled.div([
  tw`flex`,
  tw`w-full`,
  tw`h-fit`,
]);
