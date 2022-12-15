import React, {useCallback, useMemo, useState} from 'react';

import IcoTypeConcert from '@/assets/icons/daotype/ico_type_concert.svg';
import IcoTypeFilm from '@/assets/icons/daotype/ico_type_film.svg';
import IcoTypeEntertainment from '@/assets/icons/daotype/ico_type_entertainment.svg';
import IcoTypeInvestment from '@/assets/icons/daotype/ico_type_investment.svg';
import IcoTypeBusiness from '@/assets/icons/daotype/ico_type_business.svg';
import IcoTypeFandom from '@/assets/icons/daotype/ico_type_fandom.svg';
import IcoTypeProduct from '@/assets/icons/daotype/ico_type_product.svg';
import IcoTypeArt from '@/assets/icons/daotype/ico_type_art.svg';
import IcoTypeSport from '@/assets/icons/daotype/ico_type_sport.svg';
import IcoTypeMusic from '@/assets/icons/daotype/ico_type_music.svg';
import IcoTypeSocial from '@/assets/icons/daotype/ico_type_social.svg';

import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import {useTranslation} from "next-i18next";
import DaoRequest from "@components/dao/apply/modal";

export const DaoHomeType = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const typeList = useMemo(() => (['concert', 'film', 'entertainment', 'investment', 'business', 'fandom', 'product', 'art', 'sport', 'music', 'social']), []);

  const { t } = useTranslation('daoHome');

  const typeIcon = useCallback((iconType: string) => {
    switch (iconType) {
      case 'concert':
        return <IcoTypeConcert />;
      case 'film':
        return <IcoTypeFilm />;
      case 'entertainment':
        return <IcoTypeEntertainment />;
      case 'investment':
        return <IcoTypeInvestment />;
      case 'business':
        return <IcoTypeBusiness />;
      case 'fandom':
        return <IcoTypeFandom />;
      case 'product':
        return <IcoTypeProduct />;
      case 'art':
        return <IcoTypeArt />;
      case 'sport':
        return <IcoTypeSport />;
      case 'music':
        return <IcoTypeMusic />;
      case 'social':
        return <IcoTypeSocial />;
      default:
        return false;
    }
  }, []);

  const copyEvent = (times: number) => {
    const newList: React.ReactElement[] = [];

    for (let i = 0; i < times; i += 1) {
      newList.push(
        ...typeList.map((item, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <BannerItem key={item + idx + i}>
            {typeIcon(item)}
            <BannerItemName>{item} DAO</BannerItemName>
          </BannerItem>
        )),
      );
    }
    return newList;
  }

  return (
    <DaoJoin>
      <DaoTypeWrap>
        <TitleWrap>
          <small>{t('type.title1')}</small>
          <span>{t('type.title2')}</span>
          <Desc>
            {t('type.desc1')}<br />
            {t('type.desc2')}
          </Desc>
        </TitleWrap>
        <TypeBannerWrap>
          <TypeBanner>
            {copyEvent(2)}
          </TypeBanner>
        </TypeBannerWrap>
      </DaoTypeWrap>
      <DaoJoinWrap>
        <TitleWrap>
          <span>{t('join.title')}</span>
          <Desc>{t('join.desc')}</Desc>
        </TitleWrap>
        <StyledButton type="button" onClick={() => {
          setIsModalOpen(true);
        }}>
          {t('join.btn1')}
        </StyledButton>
      </DaoJoinWrap>
      <DaoRequest isModal={isModalOpen} setIsModal={setIsModalOpen}/>
    </DaoJoin>
  );
};

const StyledButton = styled.button([
  tw`font-header`,
  tw`px-5`,
  tw`h-9 md:h-10`,
  tw`text-base md:text-lg`,
  tw`border`,
  tw`border-white`,
  tw`text-white`,
  tw`hover:bg-[rgba(255, 255, 255, 0.2)]`,
  tw`leading-none`,
  tw`mt-5 md:mt-[38px]`,
  tw`rounded-[2px]`,
  tw`md:mt-[38px]`,
]);

const BannerItem = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`items-center`,
  tw`justify-center`,
  tw`gap-6`,
  tw`border`,
  tw`border-white`,
  tw`mx-3`,
  tw`w-[234px]`,
  tw`h-[200px]`,
  tw`flex-shrink-0`,
  css`
    svg {
      ${tw`w-12`}
      ${tw`h-12`}
      ${tw`md:w-[64px]`}
      ${tw`md:h-[64px]`}
    }
  `,
  tw`md:w-[282px]`,
  tw`md:h-[240px]`,
]);

const BannerItemName = styled.span([
  tw`text-base`,
  tw`leading-none`,
  tw`font-bold`,
  tw`text-white`,
  tw`text-center`,
  tw`uppercase`,
]);

const TypeBannerWrap = styled.div([

]);

const TypeBanner = styled.div([
  tw`flex`,
  tw`animate-scrolling-type-s`,
  tw`md:animate-scrolling-type-m`,
  tw`xl:animate-scrolling-type`,
]);

const Desc = styled.p([
  tw`font-header`,
  tw`text-sm`,
  tw`mt-3`,
  tw`text-gray-60`,
  tw`leading-[22px]`,
  tw`text-center`,
]);

const TitleWrap = styled.div([
  tw`text-center`,
  tw`max-w-[320px] md:max-w-none`,
  tw`mx-auto`,
  css`
    small {
      ${tw`block`}
      ${tw`text-xl md:text-[22px]`}
      ${tw`!leading-none`}
      ${tw`md:font-bold`}
      ${tw`text-white`}
      ${tw`md:text-2xl`}
    }
    
    span {
      ${tw`block`}
      ${tw`font-header`}
      ${tw`mt-3 md:mt-8`}
      ${tw`text-white`}
      ${tw`text-[22px] md:text-[32px]`}
      ${tw`leading-[28px] md:leading-[1.5]`}
      ${tw`font-bold`}
      ${tw`whitespace-pre-line`}
      word-break: keep-all;
    }
  `,
]);

const DaoJoinWrap = styled.div([
  tw`pt-[31px]`,
  tw`flex`,
  tw`flex-col`,
  tw`items-center`,
]);

const DaoTypeWrap = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-[54px]`,
  tw`pb-[31px]`,
  tw`md:pb-[80px]`,
  tw`md:gap-[60px]`,
]);

const DaoJoin = styled.div([
  tw`pt-[60px]`,
  tw`pb-[100px]`,
  `background: url('https://file.mir4global.com/nile/resources/img/bg_daotype_sm.png') top / 767px no-repeat`,
  tw`bg-gray-10`,
  tw`overflow-hidden`,
]);
