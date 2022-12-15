import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import cn from 'classnames';
import Image from 'next/image';

import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import 'swiper/css';
import 'swiper/css/navigation';

import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';

// my papyrus 임시 데이터
const papyrusList = [
  { name: 'WONDER DAO', imgUrl: 'https://file.mir4global.com/nile/resources/img/sample/@temp_sample.jpg' },
  { name: 'LUS', imgUrl: 'https://file.mir4global.com/nile/resources/img/sample/@temp_collection_lus.png' },
  { name: 'Tangled', imgUrl: 'https://file.mir4global.com/nile/resources/img/sample/@temp_collection_tangled.png' },
  { name: 'Patron Long Patron', imgUrl: 'https://file.mir4global.com/nile/resources/img/sample/@temp_collection_represent.png' },
  { name: 'WONDER DAO', imgUrl: 'https://file.mir4global.com/nile/resources/img/sample/@temp_collection_lus.png' },
];

export type PapyrusSectionProps = {
  // TODO
};

export const PapyrusSection = (props: PapyrusSectionProps) => {
  // my page mini > Papyrus 제어용
  const [hasPapyrus, setHasPapyrus] = useState(true);
  const [swiperSetting, setSwiperSetting] = useState<SwiperProps | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  SwiperCore.use([Navigation]);

  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting({
        spaceBetween: 12,
        navigation: {
          prevEl: prevRef.current, // 이전 버튼
          nextEl: nextRef.current, // 다음 버튼
        },
        slidesPerView: 4,
        onBeforeInit: (swiper: SwiperCore) => {
          if (typeof swiper.params.navigation !== 'boolean') {
            if (swiper.params.navigation) {
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.prevEl = prevRef.current;
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }
          swiper.navigation.update();
        },
      });
    }
  }, [swiperSetting]);

  return (
    <Container>
      { hasPapyrus && (
        <Contents>
          <Title>My Papyrus</Title>
          <SwiperWrapper className={cn('my-mini-contents')}>
            <button type="button" ref={prevRef} className={cn('btn-swiper', 'btn-prev')}>
              <span className={cn('a11y')}>이전</span>
              <IconArrow />
            </button>
            <button type="button" ref={nextRef} className={cn('btn-swiper', 'btn-next')}>
              <span className={cn('a11y')}>다음</span>
              <IconArrow />
            </button>
            { swiperSetting && (
              <Swiper { ...swiperSetting }>
                {papyrusList.map((item) => (
                  <SwiperSlide className={cn('slide-item')} key={item.name}>
                    <a href="/" target="_blank">
                      <ImageBlock>
                        <Image src={item.imgUrl} alt="" layout="fill" quality="100" loading="eager" objectFit="cover" />
                      </ImageBlock>
                      <TextBlock>{item.name}</TextBlock>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </SwiperWrapper>
        </Contents>
      )}
    </Container>
  );
};

PapyrusSection.defaultProps = {
  // TODO
};

const Container = styled.section([]);

const Contents = styled.div([
  tw`mt-5`,
]);

const Title = styled.h3([
  tw`text-sm`,
  tw`font-bold`,
]);

const SwiperWrapper = styled.div([
  tw`relative`,
  tw`mt-2`,
  tw`px-3`,
  css`
    .btn-swiper {
      ${tw`z-10`}
      ${tw`flex`}
      ${tw`justify-center`}
      ${tw`items-center`}
      ${tw`flex`}    
      ${tw`absolute`}
      ${tw`w-4`}
      ${tw`h-4`}
      ${tw`top-6`}

      &.btn-prev {
        ${tw`left-0`}
        transform: translateX(-65%) rotate(90deg);
      }
      
      &.btn-next {
        ${tw`right-0`}
        transform: translateX(65%) rotate(-90deg);
      }
      &.swiper-button-disabled {
        ${tw`hidden`}
      }
    }
    
    .swiper-slide {
      ${tw`min-h-[100px]`}
      
      a {
        ${tw`block`}
        
        &:hover {
          span {
            img {
              border-color: #1a1a1a !important; 
            }
          }
          > div {
            text-decoration: underline;
          }  
        }
      }
    }
  `,
]);

const ImageBlock = styled.div([
  tw`relative`,
  tw`h-[60px]`,
  css`
    img {
      ${tw`border`}
      ${tw`border-transparent`}
      ${tw`rounded-full`}
    }
  `,
]);

const TextBlock = styled.div([
  tw`text-xs`,
  tw`leading-normal`,
  tw`text-center`,
  tw`mt-1`,
  css`
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `,
]);