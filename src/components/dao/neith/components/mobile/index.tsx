import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { DaoNeithComponentsProps } from '@components/dao/neith/components';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import tw from 'twin.macro';
import ImgStation from '@/assets/img/daoNeith/img_station.svg';
import ImgTrust from '@/assets/img/daoNeith/img_trust.svg';
import ImgTreasury from '@/assets/img/daoNeith/img_treasury.svg';
import ImgStaking from '@/assets/img/daoNeith/img_staking_pool.svg';
import ImgFurnace from '@/assets/img/daoNeith/img_furnace.svg';
import ImgGovernance from '@/assets/img/daoNeith/img_governance.svg';
import ImgCreator from '@/assets/img/daoNeith/img_creator.svg';
import {useTranslation} from "next-i18next";

export const DaoNeithComponentsForMobile = ({
  components,
}: DaoNeithComponentsProps) => {
  const neithImage = (neithType: string) => {
    switch (neithType) {
      case 'station':
        return <ImgStation />;
      case 'trust':
        return <ImgTrust />;
      case 'treasury':
        return <ImgTreasury />;
      case 'staking-pool':
        return <ImgStaking />;
      case 'furnace':
        return <ImgFurnace />;
      case 'governance':
        return <ImgGovernance />;
      case 'creator':
        return <ImgCreator />;
      default:
        return false;
    }
  };
  const { t } = useTranslation('daoHome');

  return (
    <StyledSwiper
      modules={[Pagination]}
      loop
      centeredSlides
      slidesPerView={1.2}
      speed={300}
      threshold={10}
      pagination={{
        clickable: true,
      }}
      draggable
    >
      {components?.map((component) => (
        <SwiperSlide key={component.name}>
          <ItemContainer>
            <ImageContainer>
              <ImageContainer>{neithImage(component.key)}</ImageContainer>
            </ImageContainer>
            <ContentWrapper>
              <ItemTitle>{t(`${component.name}`)}</ItemTitle>
              <ItemDescription>{t(`${component.description}`)}</ItemDescription>
            </ContentWrapper>
          </ItemContainer>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

const ImageContainer = styled.div([
  tw`absolute`,
  tw`top-4`,
  tw`right-4`,
  tw`w-[140px]`,
  tw`text-[140px]`,
  `
    path.img_station_svg__dao-neith,
    path.img_trust_svg__dao-neith,
    path.img_treasury_svg__dao-neith,
    path.img_staking_pool_svg__dao-neith,
    path.img_governance_svg__dao-neith,
    path.img_creator_svg__dao-neith,
    path.img_furnace_svg__dao-neith {
      fill: #5e5ff5;
    }
  `,
]);

const StyledSwiper = styled(Swiper)([
  tw`flex`,
  tw`flex-col`,
  tw`mt-8`,
  css`
    .swiper-pagination {
      ${tw`static`}
      ${tw`flex items-center justify-center`}
      ${tw`mt-6`}
      .swiper-pagination-bullet {
        ${tw`bg-gray-60`}
      }

      .swiper-pagination-bullet-active {
        ${tw`bg-black`}
      }
    }
  `,
]);

const ItemContainer = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`h-[280px]`,
  tw`justify-end`,
  tw`p-4`,
  tw`pb-5`,
  tw`bg-white`,
  tw`mx-2`,
]);

const ContentWrapper = styled.dl([
  tw`flex`,
  tw`flex-col`,
  tw`text-left`,
  tw`gap-2`,
]);

const ItemTitle = styled.dt([
  tw`text-base`,
  tw`text-black`,
  tw`font-bold`,
  tw`capitalize`,
]);

const ItemDescription = styled.dd([
  tw`font-header`,
  tw`text-sm`,
  tw`text-gray-40`,
]);
