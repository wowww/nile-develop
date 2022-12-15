import Image from 'next/image';

import IconScroll from '@/assets/icons/common/arrow/ico_arrow_scroll.svg';

import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import Link from 'next/link';
import { NileCDNLoader } from '@utils/image/loader';
import classNames from 'classnames';
import moment from 'moment-timezone';
import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';

export const TangledTop = () => {
  const { t } = useTranslation(['life', 'common']);
  const targetDate = moment.tz(process.env.NEXT_PUBLIC_ENV_NFT_SALE_START_DATE, 'Asia/Seoul');
  const remainSeconds = useMemo(() => targetDate.diff(moment(), 'seconds'), [targetDate]);

  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <ImageContainer>
            <Image src="/img/tangled/img_tangled_logo.png" alt="Tangled" layout="fill" loader={NileCDNLoader} />
          </ImageContainer>
          <Title>
            BE YOURSELF
            <br />
            BAG TIME
            <br />
            GET RICH
          </Title>
        </TitleWrapper>
        <ScrollIcon>
          <IconScroll width={12} height={12} />
          SCROLL
        </ScrollIcon>
        <ButtonWrapper>
          <Link href="/" target="_blank">
            <StyledButton className={classNames('dark')}>{t('downloadApp', { ns: 'common' })}</StyledButton>
          </Link>
          {
            moment().isAfter(targetDate) && (
              <Link href="/" target="_blank">
                <StyledButton>Buy NFT</StyledButton>
              </Link>
            )
          }
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

const StyledButton = styled.span(({ className }) => [
  tw`flex`,
  tw`items-center`,
  tw`justify-center`,
  tw`rounded`,
  tw`bg-white`,
  tw`px-4 md:px-8 lg:px-16`,
  tw`py-2`,
  tw`text-base`,
  tw`text-black`,
  tw`leading-[22px]`,
  tw`cursor-pointer`,
  tw`md:text-xl`,
  tw`xl:text-base`,
  tw`hover:bg-gray-80`,
  className?.includes('dark') && [
    tw`border`,
    tw`border-white`,
    tw`text-white`,
    tw`bg-transparent`,
    tw`hover:bg-[#FFFFFF20]`,
  ],
]);

const ButtonWrapper = styled.div([
  tw`flex`,
  tw`gap-2`,
  tw`mt-[124px]`,
  tw`md:gap-3`,
  tw`md:mt-[154px]`,
  tw`xl:mt-[176px]`,
]);

const ScrollIcon = styled.div([
  tw`flex`,
  tw`items-center`,
  tw`mt-7`,
  tw`text-white`,
  tw`text-xs`,
  tw`font-bold`,
  tw`leading-none`,
  tw`md:mt-8`,
  css`
    svg {
      ${tw`mr-1`}
      path {
        fill: #fff;
      }
    }
  `,
]);

const ImageContainer = styled.div([
  tw`relative`,
  tw`w-[114px]`,
  tw`h-[32px]`,
  tw`md:w-[146px]`,
  tw`md:h-[42px]`,
  tw`xl:w-[184px]`,
  tw`xl:h-[54px]`,
]);

const Title = styled.h1([
  tw`mt-6`,
  tw`text-white`,
  tw`font-bold`,
  tw`text-center`,
  tw`text-3xl`,
  tw`leading-[40px]`,
  tw`md:text-[54px]`,
  tw`md:leading-[60px]`,
  tw`xl:text-[70px]`,
  tw`xl:leading-[80px]`,
]);

const TitleWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`items-center`,
]);

const Container = styled.div([
  tw`relative`,
  tw`overflow-hidden`,
  tw`bg-[#000]`,
  `
    &::after {
    position: absolute;
    left: 50%;
    height: 100%;
    top: 77px;
    width: 608px;
    margin-left: calc((304px - 7px) * -1);
    background: url("https://file.mir4global.com/nile/resources/img/tangled/bg_tangled_top.png") no-repeat center top;
    background-size: 100%;
    content: "";

    @media (min-width: 768px) {
      top: 50px;
      width: 916px;
      margin-left: calc((458px - 32px) * -1);
    }

    @media (min-width: 1280px) {
      top: 0;
      width: 1120px;
      margin-left: calc((560px - 150px) * -1);
    }
  }
  `,
]);

const Wrapper = styled.div([
  tw`relative`,
  tw`z-[1]`,
  tw`flex`,
  tw`flex-col`,
  tw`items-center`,
  tw`justify-center`,
  tw`pt-10`,
  tw`pb-8`,
  tw`md:py-[60px]`,
  tw`xl:pt-[86px]`,
  tw`pb-[64px]`,
]);
