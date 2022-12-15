import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import { Trans, useTranslation } from 'next-i18next';
import { Popover } from 'antd';
import IconInfo from '@/assets/icons/common/icon_info.svg';

import IconDaoComingOpen from '@/assets/icons/common/ico_coming_open_dao_home.svg';

import { css, Global } from '@emotion/core';

import styled from '@emotion/styled';
import tw from 'twin.macro';
import React from 'react';

export const DaoHomeCheckMore = () => {
  const { t } = useTranslation('daoHome');
  const { i18n } = useTranslation('ko');

  return (
    <CheckSection>
      <Global
        styles={css`
          .tooltip {
            .ant-popover-arrow-content {
              ${tw`bg-gray-10`}
              ${tw`w-2`}
                  ${tw`h-2`}
                  ${tw`absolute`}
                  ${tw`inset-0`}
                  ${tw`block`}
                  &::before {
                content: none;
              }
            }
          }
        `}
      />
      <CheckSectionInner>
        <CheckSectionTitle>
          {i18n.language === 'en' ? (
            <>
              <h2>
                Check out information about
                <br />
                WONDER DAO* earlier!
              </h2>
              {/* 22.11.09 수정: 문구 추가 및 변경 */}
              <strong>
                Recruiting will begin soon! More details to follow in December.
              </strong>
              <span>*Decentralized Autonomous Organization</span>
            </>
          ) : (
            <>
              <h2>
                WONDER DAO*에 대한 정보를
                <br />
                미리 확인해보세요!
              </h2>
              {/* 22.11.09 수정: 문구 추가 및 변경 */}
              <strong>
                모집이 곧 시작될 예정입니다! 모집에 대한 자세한 내용은 12월에
                공개됩니다.{' '}
              </strong>
              <span>
                *Decentralized Autonomous Organization (탈중앙화된 자율조직)
              </span>
            </>
          )}
        </CheckSectionTitle>
        <CheckSwiperBox>
          <Swiper
            // initialSlide={1}
            modules={[Pagination]}
            slidesPerView={3}
            spaceBetween={0}
            speed={300}
            threshold={10}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <CheckSwiperWrapper>
                <CheckSwiperTitle>{t('check.subtitle1')}</CheckSwiperTitle>
                <CheckSwiperContent>
                  <CheckSwiperDesc>
                    {t('check.subdesc1')}
                    <small>
                      {i18n.language === 'en'
                        ? '*WEMIX On-chain Network Decentralized Ecosystem Regulator'
                        : '*WEMIX On-chain Network Decentralized Ecosystem Regulator'}
                    </small>
                  </CheckSwiperDesc>
                  <CheckSwiperField>
                    <Desc>
                      <Popover
                        overlayClassName="tooltip"
                        placement="top"
                        content={
                          <TooltipContent>
                            <Trans i18nKey={t('check.subtooltip1')} />
                          </TooltipContent>
                        }
                        trigger="click"
                        getPopupContainer={(triggerNode) =>
                          triggerNode.parentNode as HTMLElement
                        }
                      >
                        <button type="button">
                          <IconInfo />
                        </button>
                      </Popover>
                      <span>
                        {i18n.language === 'en'
                          ? 'Total rewards that can be generated through WONDER DAO operations'
                          : 'WONDER DAO 운영을 통해 창출 가능한 리워드 총량'}
                      </span>
                    </Desc>
                    <Value>
                      <Num>26,280</Num>
                      <Unit>WEMIX/month</Unit>
                    </Value>
                  </CheckSwiperField>
                </CheckSwiperContent>
              </CheckSwiperWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <CheckSwiperWrapper>
                <CheckSwiperTitle>{t('check.subtitle2')}</CheckSwiperTitle>
                <CheckSwiperContent>
                  <CheckSwiperDesc>
                    {i18n.language === 'en' ? (
                      <>
                        Ownership of Wonder and g.Wonder, tokens of the WONDER
                        DAO, establishes participation in the DAO. After
                        recruiting is over, Wonder is distributed in the{' '}
                        <strong>proportional distribution method</strong>—in
                        proportion to the total recruiting amount and amount
                        participated, and a{' '}
                        <strong>
                          hard cap (maximum distribution limit per person)
                          applies.
                        </strong>
                      </>
                    ) : (
                      <>
                        WONDER DAO의 토큰인 Wonder와 g.Wonder를 보유하면 WONDER
                        DAO에 참여하게 됩니다. 모집 종료 후, Wonder는 전체 모집
                        금액 대비 참여금액 비율에 따라 배분되는{' '}
                        <strong>비례배분방식</strong>으로 배분되며,{' '}
                        <strong>하드캡(1인당 최대 배분한도)</strong>이
                        적용됩니다.
                      </>
                    )}
                  </CheckSwiperDesc>
                  <CheckSwiperField>
                    <CheckSwiperFieldItem>
                      <Desc>
                        <span>{t('check.subfield2')}</span>
                      </Desc>
                      <Value>
                        <Num>1,500,000</Num>
                        <Unit>WDR</Unit>
                      </Value>
                    </CheckSwiperFieldItem>
                    <CheckSwiperFieldItem>
                      <Desc>
                        <span>
                          {i18n.language === 'en'
                            ? 'Maximum Distribution Limit per Person'
                            : '1인당 최대 배분 한도'}
                        </span>
                      </Desc>
                      <Value>
                        <Num>3,000,000</Num>
                        <Unit>WDR</Unit>
                      </Value>
                    </CheckSwiperFieldItem>
                    <CheckSwiperFieldItem>
                      <Desc>
                        <span>{t('check.subtitle4')}</span>
                      </Desc>
                      <Value>
                        <Num>1</Num>
                        <Unit>WDR</Unit>
                        <span>=</span>
                        <Num>0.1003</Num>
                        <Unit>WEMIX</Unit>
                      </Value>
                    </CheckSwiperFieldItem>
                  </CheckSwiperField>
                </CheckSwiperContent>
              </CheckSwiperWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <CheckSwiperWrapper>
                <CheckSwiperTitle>
                  {i18n.language === 'en'
                    ? 'Recruiting Period Notice'
                    : '모집기간 안내'}
                </CheckSwiperTitle>
                <CheckSwiperContent>
                  <ComingOpen>
                    <ImageContainer>
                      <IconDaoComingOpen />
                    </ImageContainer>
                    <TextWrapper>
                      <strong>
                        {i18n.language === 'en'
                          ? 'Recruiting will start in December!'
                          : '12월 중 모집이 시작될 예정입니다!'}
                      </strong>
                      <span>
                        {i18n.language === 'en'
                          ? 'The detailed schedule will be announced soon.'
                          : '상세 일정은 이른 시일 내로 공지하겠습니다.'}
                      </span>
                    </TextWrapper>
                  </ComingOpen>
                </CheckSwiperContent>
              </CheckSwiperWrapper>
            </SwiperSlide>
          </Swiper>
        </CheckSwiperBox>
      </CheckSectionInner>
    </CheckSection>
  );
};

const ImageContainer = styled.div([
  tw`h-[100px]`,
  tw`md:h-[114px]`,
  tw`xl:h-[94px]`,
  css`
    svg {
      ${tw`w-auto`}
      ${tw`h-full`}
    }
  `,
]);

const ComingOpen = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`justify-center`,
  css`
    svg {
      ${tw`w-full`}
      ${tw`mx-auto`}
    }
  `,
]);

const TextWrapper = styled.div([
  tw`mt-[18px]`,
  tw`text-center`,
  tw`font-header`,
  css`
    strong {
      ${tw`block`}
      ${tw`text-sm md:text-base xl:text-sm`}
      ${tw`leading-[22px] md:leading-[1.5] xl:leading-[22px]`}
      ${tw`font-bold`}
    }

    span {
      ${tw`block`}
      ${tw`mt-1`}
      ${tw`text-xs`}
      ${tw`leading-[20px]`}
      ${tw`text-gray-30`}
      ${tw`xl:leading-[1.5]`}
    }
  `,
]);

const Value = styled.div([tw`flex`, tw`gap-1`, tw`items-baseline`, tw`mt-2`]);

const Num = styled.span([
  tw`text-xl md:text-[22px] xl:text-xl`,
  tw`!leading-none`,
  tw`font-default`,
  tw`text-black`,
  tw`font-bold`,
  tw`font-default`,
]);

const Unit = styled.span([
  tw`text-sm`,
  tw`leading-none`,
  tw`text-black`,
  tw`font-default`,
]);

const TooltipContent = styled.div([
  tw`text-xs`,
  tw`leading-[20px]`,
  tw`relative`,
  tw`bg-gray-10`,
  tw`py-[7px]`,
  tw`px-[8px]`,
  tw`rounded-[2px]`,
  tw`text-white`,
  `word-break: keep-all`,
  tw`max-w-[200px]`,
]);

const Desc = styled.div([
  tw`flex`,
  tw`items-start`,
  tw`gap-1`,
  tw`font-header`,
  css`
    span {
      ${tw`text-xs`}
      ${tw`text-gray-30`}
      ${tw`!leading-[1.2]`}
      ${tw`md:text-sm`}
    }
  `,
]);

const CheckSwiperFieldItem = styled.li([
  tw`flex`,
  tw`flex-wrap`,
  tw`mt-5 first:mt-0 md:mt-6 md:first:mt-0`,
  css`
    ${Desc}, ${Value} {
      ${tw`w-full`}
    }
  `,
]);

const CheckSwiperField = styled.ul([tw`flex flex-col`, tw`pt-5 md:pt-6`, tw`md:mt-[22px]`]);

const CheckSwiperDesc = styled.p([
  tw`font-header`,
  tw`text-sm md:text-xs`,
  tw`leading-[22px] md:leading-[20px] xl:leading-[1.5]`,
  css`
    small {
      ${tw`block`}
      ${tw`mt-1`}
      ${tw`text-sm md:text-xs`}
      ${tw`text-gray-60`}
    }
  `,
]);

const CheckSwiperContent = styled.div([
  tw`flex`,
  tw`flex-wrap`,
  tw`w-full`,
  tw`font-noto`,
  tw`pt-4 pb-6 md:py-6`,
]);

const CheckSwiperTitle = styled.h2([
  tw`text-base md:text-xl`,
  tw`leading-none md:leading-none`,
  tw`font-bold`,
  tw`md:py-1`,
  tw`md:pl-[2px]`,
]);

const CheckSwiperWrapper = styled.div([
  tw`flex`,
  tw`px-3 pb-6 md:px-4 md:py-0 lg:px-5`,
  tw`relative`,
  tw`w-full`,
  tw`h-full`,
  tw`flex-wrap`,
  tw`content-start`,
  css`
    @media (min-width: 768px) {
      &::after {
        ${tw`content-['']`}
        ${tw`block`}
        ${tw`absolute`}
        ${tw`w-px`}
        ${tw`h-full`}
        ${tw`right-0`}
        ${tw`top-0`}
        ${tw`bg-gray-80`}
      }
    }
  `,
]);

const CheckSwiperBox = styled.div([
  tw`mt-8 md:mt-10`,
  tw`md:py-6 md:px-2`,
  tw`md:bg-white`,
  css`
    .swiper {
      ${tw`h-full min-h-[208px]`}
      
      &-slide {
        ${tw`py-6 px-1 md:p-0`}
        ${tw`h-auto`}
        ${tw`bg-white`}
        box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
        
        &:last-child {
        ${CheckSwiperWrapper} {
          &::after {
            content: none;
          }
        }
        
        ${CheckSwiperContent} {
          ${tw`h-[calc(100% - 24px)]`}
          ${tw`items-center`}
          ${tw`justify-center`}
          ${tw`pt-4`}
        }
      }
    }
    
    .swiper-pagination {
      ${tw`flex`}
      ${tw`z-10`}
      ${tw`relative`}
      ${tw`items-center`}
      ${tw`justify-center`}
      ${tw`mt-[-24px]`}
      ${tw`mb-6`}
      bottom: initial !important;
      ${tw`md:hidden`}

      .swiper-pagination-bullet {
        ${tw`w-2`}
        ${tw`h-2`}
        ${tw`rounded-full`}
        ${tw`bg-gray-80`}
      }

      .swiper-pagination-bullet-active {
        ${tw`bg-gray-40`}
      }
    }
  ,
  `,
]);

const CheckSectionTitle = styled.div([
  tw`text-center`,
  tw`font-header`,
  css`
    h2 {
      white-space: pre-line;
      ${tw`text-xl md:text-[32px]`}
      ${tw`font-bold`}
      ${tw`leading-[1.4] md:leading-[1.5]`}
    }

    strong {
      letter-spacing: -0.01em;
      ${tw`text-sm md:text-base`}
      ${tw`pt-2 md:pt-3`}
      ${tw`leading-[22px] md:leading-[1.5]`}
      ${tw`text-gray-40`}
      ${tw`font-normal`}
      ${tw`block`}
    }

    span {
      letter-spacing: -0.01em;
      ${tw`block`}
      ${tw`text-xs`}
      ${tw`leading-[20px]`}
      ${tw`mt-3`}
      ${tw`text-gray-60`}
    }
  `,
]);

const CheckSection = styled.div([
  tw`h-fit`,
  tw`bg-gray-90`,
  tw`md:min-h-[680px]`,
]);

const CheckSectionInner = styled.div([
  tw`pt-10`,
  tw`px-5`,
  tw`pb-[42px]`,
  tw`w-full`,
  tw`md:px-10`,
  tw`md:pt-[80px]`,
  tw`md:pb-[84px]`,
  tw`lg:pb-[164px]`,
  tw`xl:max-w-[1200px]`,
  tw`xl:mx-auto`,
  tw`xl:px-0`,
  tw`xl:pb-[122px]`,
]);

// const StyledButton = styled.button([
//   tw`flex`,
//   tw`h-7`,
//   tw`items-center`,
//   tw`justify-center`,
//   tw`px-3`,
//   tw`text-black`,
//   tw`text-xs`,
//   tw`leading-[100%]`,
//   tw`lg:px-4`,
// ]);

export default DaoHomeCheckMore;
