import React, { useMemo } from 'react';
import Image from 'next/image';
import { useLayoutResize } from '@utils/layout';
import { NileCDNLoader } from '@utils/image/loader';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';

import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import { useTranslation } from 'next-i18next';

export const LifeTheTeam = () => {
  const { t } = useTranslation(['life']);
  const { isTablet } = useLayoutResize();

  const teamData = useMemo(() => ([
    {
      image: '/img/tangled/overview/img_team_jinpark.png',
      name: t('tangled.overview.theTeam.1.name', { ns: 'life' }),
      rank: t('tangled.overview.theTeam.1.rank', { ns: 'life' }),
      intro: t('tangled.overview.theTeam.1.desc', { ns: 'life' }),
    },
    {
      image: '/img/tangled/overview/img_team_edwardlee.png',
      name: t('tangled.overview.theTeam.2.name', { ns: 'life' }),
      rank: t('tangled.overview.theTeam.2.rank', { ns: 'life' }),
      intro: t('tangled.overview.theTeam.2.desc', { ns: 'life' }),
    },
    {
      image: '/img/tangled/overview/img_team_jsshin.png',
      name: t('tangled.overview.theTeam.3.name', { ns: 'life' }),
      rank: t('tangled.overview.theTeam.3.rank', { ns: 'life' }),
      intro: t('tangled.overview.theTeam.3.desc', { ns: 'life' }),
    },
    {
      image: '/img/tangled/overview/img_team_moomin.png',
      name: t('tangled.overview.theTeam.4.name', { ns: 'life' }),
      rank: t('tangled.overview.theTeam.4.rank', { ns: 'life' }),
      intro: t('tangled.overview.theTeam.4.desc', { ns: 'life' }),
    },
    {
      image: '/img/tangled/overview/img_team_hyopark.png',
      name: t('tangled.overview.theTeam.5.name', { ns: 'life' }),
      rank: t('tangled.overview.theTeam.5.rank', { ns: 'life' }),
      intro: t('tangled.overview.theTeam.5.desc', { ns: 'life' }),
    },

    {
      image: '/img/tangled/overview/img_team_paulcho.png',
      name: t('tangled.overview.theTeam.6.name', { ns: 'life' }),
      rank: t('tangled.overview.theTeam.6.rank', { ns: 'life' }),
      intro: t('tangled.overview.theTeam.6.desc', { ns: 'life' }),
    },
  ]), [t]);

  return (
    <Container>
      <Wrapper>
        {isTablet ? (
          <TeamItemWrapper>
            {teamData.map((item) => (
              <TeamItem key={item.name}>
                <ImageContainer>
                  <Image src={item.image} alt="" layout="fill" loader={NileCDNLoader} />
                </ImageContainer>
                <Name>{item.name}</Name>
                <Rank>{item.rank}</Rank>
                <Intro>{item.intro}</Intro>
              </TeamItem>
            ))}
          </TeamItemWrapper>
        ) : (
          <StyledSwiper
            modules={[Pagination]}
            centeredSlides
            slidesPerView={1.2}
            spaceBetween={16}
            speed={300}
            threshold={10}
            pagination={{
              clickable: true,
            }}
            draggable
          >
            {teamData.map((item) => (
              <SwiperSlide key={item.name}>
                <SliderItem>
                  <TeamItem>
                    <ImageContainer>
                      <Image src={item.image} alt="" layout="fill" loader={NileCDNLoader} />
                    </ImageContainer>
                    <Name>{item.name}</Name>
                    <Rank>{item.rank}</Rank>
                    <Intro>{item.intro}</Intro>
                  </TeamItem>
                </SliderItem>
              </SwiperSlide>
            ))}
          </StyledSwiper>
        )}
      </Wrapper>
    </Container>
  );
};

const StyledSwiper = styled(Swiper)([
  css`
    .swiper-pagination {
      ${tw`flex`}
      ${tw`items-center`}
      ${tw`justify-center`}
      ${tw`mt-6`}
      ${tw`gap-2`}
      .swiper-pagination-bullet {
        ${tw`w-2`}
        ${tw`h-2`}
        ${tw`rounded-full`}
        ${tw`bg-gray-60`}
      }

      .swiper-pagination-bullet-active {
        ${tw`bg-gray-80`}
      }
    }
  `,
]);

const TeamItemWrapper = styled.div([
  `
    column-count: 2;
    column-fill: balance;
    column-gap: 20px;

    @media (min-width: 1280px) {
      column-count: 3;
    }
  `,
]);

const TeamItem = styled.div([
  tw`h-[514px]`,
  tw`flex`,
  tw`flex-col`,
  tw`overflow-hidden`,
  tw`items-center`,
  tw`border`,
  tw`border-gray-10`,
  tw`bg-[rgba(255, 255, 255, 0.08)]`,
  tw`rounded-[16px]`,
  `word-break: keep-all`,
  tw`py-[54px]`,
  tw`px-[32px]`,
  tw`md:mb-5`,
  tw`md:p-8`,
  tw`md:h-auto`,
]);

const SliderItem = styled.div([
  tw`w-full`,
]);

const ImageContainer = styled.div([
  tw`relative`,
  tw`w-[152px]`,
  tw`h-[152px]`,
]);

const Name = styled.span([
  tw`text-xl`,
  tw`leading-none`,
  tw`font-bold`,
  tw`mt-5`,
  tw`text-white`,
  tw`md:text-2xl`,
]);

const Rank = styled.span([
  tw`text-sm`,
  tw`leading-[18px]`,
  tw`font-bold`,
  tw`mt-[10px]`,
  tw`text-[#a055ff]`,
  tw`md:text-base`,
]);

const Intro = styled.p([
  tw`text-sm`,
  tw`mt-[10px]`,
  tw`text-white`,
  tw`leading-[22px]`,
  tw`md:text-base`,
  tw`leading-[1.5]`,
]);

const Wrapper = styled.div([
  tw`w-auto`,
  tw`mx-auto`,
  tw`xl:w-[1040px]`,
]);

const Container = styled.div([
  tw`mt-[40px]`,
  tw`mx-[-20px]`,
  tw`md:mx-0`,
  tw`xl:mt-[60px]`,
]);
