import IconPapyrus from "@/assets/icons/common/logo/ico_logo_papyrus.svg";
import Link from "next/link";
import {Button} from "@components";
import IconAppStore from "@/assets/icons/common/ico_os_appStore.svg";
import Image from "next/image";
import {NileCDNLoader} from "@utils/image/loader";
import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { css } from '@emotion/core';
import { useLayoutResize } from "@utils/layout";
import { Tooltip } from "@components/common/tooltip";
import { useRouter } from "next/router";

export const PapyrusBanner = () => {
  const { locale } = useRouter();
  const { isLargeDesktop } = useLayoutResize();

  return (
    <MainBanner>
      <BannerInner>
        <InfoWrapper>
          <BannerDesc>
            The best communication place for web3
          </BannerDesc>
          <LogoContainer>
            <IconPapyrus />
          </LogoContainer>
          <Text>Launch App</Text>
          <ButtonWrapper>
            <Link href="/">
              <StyledButton>
                <Button
                  className="hover:bg-gray-80 disabled"
                  width="100%"
                  height="100%"
                  background="#FFF"
                  color="#1a1a1a"
                  borderRadius="2px"
                >
                  { !isLargeDesktop && <OsIconWrapper><IconAppStore /></OsIconWrapper> }
                  For macOS
                  <Tooltip tooltipText="Unfolding Soon" direction="bottom" />
                </Button>
              </StyledButton>
            </Link>
            { isLargeDesktop && <OsIcon><IconAppStoreLight /></OsIcon> }
          </ButtonWrapper>
        </InfoWrapper>
        <ImageContainer>
          <Image src={locale === 'ko' ? '/img/community/img_papyrus_screen_ko.png' : '/img/community/img_papyrus_screen_en.png'} alt="community messenger papyrus" layout="fill" loader={NileCDNLoader} />
        </ImageContainer>
      </BannerInner>
    </MainBanner>
  )
}

const OsIconWrapper = styled.div([
  tw`w-auto`,
  tw`h-4`,
  tw`md:h-5`,
]);

const IconAppStoreLight = styled(IconAppStore)([
  tw`w-full`,
  tw`h-full`,
  `
    path {
      fill: #FFF;
    }
  `,
]);

const StyledButton = styled.div([
  tw`relative`,
  tw`text-sm`,
  tw`w-[126px]`,
  tw`h-[36px]`,
  tw`md:text-base`,
  tw`md:w-[138px]`,
  tw`md:h-[40px]`,
  tw`xl:text-sm`,
  tw`xl:w-[120px]`,
  tw`xl:h-[38px]`,
]);

const OsIcon = styled.div([
  tw`w-[38px]`,
  tw`h-[38px]`,
  tw`border`,
  tw`border-white`,
  tw`rounded`,
  tw`p-[11px]`,
]);

const ButtonWrapper = styled.div([
  tw`flex`,
  tw`justify-center`,
  tw`gap-1`,
  tw`mt-2`,
  tw`xl:justify-start`,
  css`
    button {
      &.disabled {
        ${tw`relative`}
        ${tw`text-[rgba(255, 255, 255, 0.25)]`}
        ${tw`bg-[#595959]`}
        ${tw`border-[#595959]`}
        cursor: not-allowed;
        pointer-events: none;
        
        path {
          fill: rgba(255, 255, 255, 0.25);
        }
      }
    }
  `,
]);

const Text = styled.span([
  tw`block`,
  tw`text-white`,
  tw`text-xs`,
  tw`font-bold`,
  tw`text-center`,
  tw`mt-8`,
  tw`md:mt-10`,
  tw`xl:mt-[46px]`,
  `
    @media (min-width: 1280px) {
      text-align: start;
    }
  `,
]);

const LogoContainer = styled.div([
  `
    svg {
      margin: 0 auto;
    }
    
    @media (min-width: 1280px) {
      svg {
        margin-right: auto;
        margin-left: 0;
      }
    }
  `,
]);

const InfoWrapper = styled.div([]);

const BannerDesc = styled.div([
  tw`text-white`,
  tw`text-base`,
  tw`mb-2`,
  tw`md:text-lg`,
  tw`xl:text-base`,
]);

const ImageContainer = styled.div([
  tw`relative`,
  tw`xl:top-[15px]`,
  tw`w-[278px] md:w-full`,
  tw`min-w-[278px]`,
  `aspect-ratio: 596/272`,
  tw`max-w-[596px]`,
  tw`mt-[76px]`,
  tw`md:mt-[54px]`,
  tw`xl:mt-0`,
  css`
    img {
      bottom: -1px !important;
    } 
  `,
]);

const BannerInner = styled.div([
  tw`relative`,
  tw`max-w-[1200px]`,
  tw`min-h-[300px]`,
  tw`pt-10 xl:pt-0`,
  tw`flex`,
  tw`flex-col`,
  tw`w-full`,
  tw`items-center`,
  tw`md:px-10`,
  tw`xl:flex-row`,
  tw`xl:mx-auto`,
  tw`xl:justify-between`,
  tw`xl:px-0`,
  css`
  &:before {
    ${tw`z-0`}
    ${tw`absolute`}
    ${tw`xl:right-[-118px]`}
    ${tw`bottom-0 md:bottom-[-82px] lg:bottom-[-78px] xl:bottom-0`}
    ${tw`w-[417px] md:w-[834px]`}
    aspect-ratio: 10/5.8;
    background-image: url('https://file.mir4global.com/nile/resources/img/community/img_papyrus_pattern.png');
    background-size: contain;
    content: "";
    }
  `,
]);

const MainBanner = styled.div([
  tw`md:overflow-hidden`,
  tw`bg-black`,
]);