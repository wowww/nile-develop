import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import { NileCDNLoader } from '@utils/image/loader';
import { Button } from '@components';
import CommunityHeroPattern from '@components/community/banner/bannerpattern';
import { useTranslation } from 'next-i18next';
import { Tooltip } from '@components/common/tooltip';
import { useRouter } from "next/router";

export const CommunityBanner = () => {
  const { locale } = useRouter();
  const { t } = useTranslation(['community']);

  return (
    <Container>
      <Wrapper>
        <Content>
          <ImageContainer>
            <Image src="/img/community/img_community_union.png" alt="유니언 이미지" width="100%" height="100%" loader={NileCDNLoader} />
          </ImageContainer>
          <InfoWrapper>
            <SubTitle>The best communication place for web3</SubTitle>
            <Title>PAPYRUS</Title>
            <Desc>{t('banner.text', { ns: 'community' })}</Desc>
          </InfoWrapper>
          <ButtonWrapper>
            <Button
              className="hover:bg-gray-80 disabled"
              fontSize="16px"
              color="#1A1A1A"
              borderRadius="4px"
              width="160px"
              height="44px"
              background="#FFF"
            >
              {t('banner.download', { ns: 'community' })}
              <Tooltip tooltipText="Unfolding Soon" direction="top" />
            </Button>
            <Link href="/community/papyrus">
              <Button
                className="hover:bg-[#FFFFFF20]"
                border="1px solid #FFF"
                borderRadius="4px"
                color="#FFF"
                width="160px"
                height="44px"
              >
                {t('banner.introduction', { ns: 'community' })}
              </Button>
            </Link>
          </ButtonWrapper>
          <Link href="/">
            <StyledLink>
              Open in Browser
            </StyledLink>
          </Link>
        </Content>
        <BannerImageContainer>
          <Image src={locale === 'ko' ? '/img/community/img_community_messenger_ko.png' : '/img/community/img_community_messenger_en.png'} alt="community messenger" layout="fill" loader={NileCDNLoader} />
        </BannerImageContainer>
        <HeroLottieArea>
          <Gradient01 />
          <Gradient02 />
          <CommunityHeroPattern />
          <RoundGradient />
        </HeroLottieArea>
      </Wrapper>
    </Container>
  );
};

const BannerImageContainer = styled.div([
  tw`z-[1]`,
  tw`w-full`,
  tw`relative`,
  tw`max-w-[728px]`,
  `aspect-ratio: 104/77`,
  tw`md:mx-auto`,
]);

const ButtonWrapper = styled.div([
  tw`flex`,
  tw`gap-4`,
  tw`mt-[68px] md:mt-[92px] xl:mt-8`,
  tw`xl:mt-[119px]`,
  tw`w-full md:w-auto`,
  css`
    button {
      ${tw`text-[16px]`}
      ${tw`w-[50%] md:w-[160px]`}
      
      &.disabled {
        ${tw`relative`}
        ${tw`text-[rgba(255, 255, 255, 0.25)]`}
        ${tw`bg-[#595959]`}
        ${tw`border-[#595959]`}
        cursor: not-allowed;
        pointer-events: none;
      }
      
      .tooltip-top {
        ${tw`max-w-[103px]`}
      }
    }
  `,
]);

const Desc = styled.p([
  tw`hidden`,
  tw`md:block`,
  tw`text-lg`,
]);

const SubTitle = styled.span([
  tw`text-[16px] md:text-xl`,
  tw`lg:whitespace-nowrap`,
]);

const Title = styled.h1([
  tw`text-[32px]`,
  tw`font-bold`,
  tw`font-header`,
  tw`leading-[34px]`,
  tw`md:leading-[66px]`,
  tw`xl:leading-[62px]`,
  tw`md:text-[64px]`,
  tw`xl:text-[60px]`,
]);

const Content = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`z-[1]`,
  tw`items-center md:items-start`,
  tw`mx-0 md:mx-10`,
]);

const ImageContainer = styled.div([
  tw`w-[32px] md:w-[60px]`,
  tw`h-[32px] md:h-[60px]`,
]);

const InfoWrapper = styled.div([
  tw`relative`,
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
  tw`md:gap-4`,
  tw`text-white`,
  tw`mt-4`,
  tw`md:mt-10`,
  tw`text-center md:text-left`,
]);

const StyledLink = styled.span([
  tw`hidden`,
  tw`mt-5`,
  tw`text-white`,
  tw`text-base`,
  tw`underline`,
  tw`text-[16px]`,
]);

const Wrapper = styled.div([
  tw`relative`,
  tw`flex`,
  tw`flex-col-reverse`,
  tw`justify-between`,
  tw`max-w-[1200px]`,
  tw`w-full`,
  tw`xl:h-[680px]`,
  tw`px-5 md:px-10 lg:px-0`,
  tw`pb-[60px] xl:pb-0`,
  tw`xl:items-center`,
  tw`xl:mx-auto`,
  tw`xl:flex-row`,
]);

const Container = styled.div([
  tw`overflow-hidden`,
  tw`flex`,
  tw`w-full`,
  tw`bg-black`,
]);

const HeroLottieArea = styled.div([
  tw`z-[0]`,
  tw`absolute`,
  tw`right-0`,
  tw`md:left-[-5%] md:left-[0]`,
  tw`top-[33%] md:top-[0]`,
  tw`mx-2.5 md:mx-0`,
  tw`w-[97%] md:w-[100%]`,

  css`
    transform: translateY(-50%);
    
    @media (min-width: 768px) {
      width: 120%;
      position: absolute;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);
      max-width: 900px;
      max-height: 820px;
      overflow: hidden;
    }
    
    @media (min-width: 1280px) {
      transform: translateY(-50%);
      top: 44%;
      left: 32%;
      width: 76%;
    }
  `,
]);

const Gradient01 = styled.div([
  tw`z-[1]`,
  tw`absolute`,
  tw`top-[50%]`,
  tw`left-[50%]`,
  tw`w-full`,
  tw`h-full`,
  css`
    transform: translate(-50%, -50%);
    
    &::before,
    &::after {
      ${tw`block`}
      ${tw`absolute`}
      ${tw`top-0`}
      ${tw`w-[20px] md:w-[80px]`}
      ${tw`h-full`}
      background: linear-gradient(269.78deg, rgb(26 26 26 / 0%) 0.22%, rgb(26 26 26 / 80%) 75.98%, #1a1a1a 100%);
      content: "";
    }

    &::before {
      ${tw`left-0 md:left-[0] lg:left-0`}
    }
    
    &::after {
      ${tw`right-0 md:right-[0] lg:right-0`}
      transform: rotate(-180deg);
    }
  `,
]);
const Gradient02 = styled.div([
  tw`absolute`,
  tw`z-[1]`,
  tw`top-[50%]`,
  tw`left-[50%] xl:left-[]`,
  tw`w-full`,
  tw`h-full`,
  css`
    transform: translate(-50%, -50%);

    &::before, &::after {
      ${tw`block`}
      ${tw`absolute`}
      ${tw`left-[80px]`}
      width: calc(100% - 160px);
      content: "";
    }
    
    &::before {
      ${tw`top-[84px] md:top-[90px] lg:top-[12%] xl:top-[100px]`}
      ${tw`h-[20px] md:h-[80px]`}
      background: linear-gradient(to top, rgb(26 26 26 / 0%) 0.22%, rgb(26 26 26 / 80%) 75.98%, #1a1a1a 100%);
    }

    &::after {
      ${tw`top-[80%] md:top-[calc(100% - 80px)] xl:top-[calc(100% - 100px)]`}

      ${tw`h-[160px] md:h-[80px]`}
      background: linear-gradient(to bottom, rgb(26 26 26 / 0%) 0.22%, rgb(26 26 26 / 80%) 75.98%, #1a1a1a 100%);
    }
  `,
]);
const RoundGradient = styled.div([
  tw`absolute`,
  tw`top-0`,
  tw`right-0 md:right-[11%] lg:right-0`,
  tw`w-full`,
  tw`h-full`,
  tw`max-w-[860px] lg:max-w-none`,
  css`
    background: radial-gradient(50% 50% at 50% 50%, rgb(199 38 255 / 20%) 0%, rgb(194 22 255 / 0%) 100%);

    @media (min-width: 1024px) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `,
]);
