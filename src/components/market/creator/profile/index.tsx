import {NileCDNLoader} from "@utils/image/loader";
import Image from 'next/image';
import Link from 'next/link';
import styled from "@emotion/styled";
import tw from "twin.macro";

import IconHomepage from '@/assets/icons/common/social/ico_homepage.svg';
import IconMedium from '@/assets/icons/common/social/ico_medium.svg';
import IconTwitter from '@/assets/icons/common/social/ico_twitter.svg';
import IconYoutube from '@/assets/icons/common/social/ico_youtube.svg';
import IconFaceBook from '@/assets/icons/common/social/ico_facebook.svg';
import IconTelegram from '@/assets/icons/common/social/ico_telegram.svg';
import IconDiscord from '@/assets/icons/common/social/ico_discord.svg';
import IconGitBook from '@/assets/icons/common/social/ico_gitbook.svg';
import IconInstagram from '@/assets/icons/common/social/ico_instagram.svg';

type CreatorProfileProps = {
  creatorName: string,
  thumbnail: string,
  linkList: {
    category: string,
    url: string,
  }[],
};

export const CreatorProfile = ({ creatorName, thumbnail, linkList }: CreatorProfileProps) => {

  return (
    <Container>
      <InfoWrapper>
        <ImageContainer>
          <Image src={thumbnail} width="100%" height="100%" loader={NileCDNLoader}/>
        </ImageContainer>
        <Description>Creator</Description>
        <Name>{creatorName}</Name>
      </InfoWrapper>
      <IconContainer>
        {linkList.map((link) => (
          {
            home: <Link href={link.url} key={link.url}><IconWrapper><IconHomepage/></IconWrapper></Link>,
            twitter: <Link href={link.url} key={link.url}><IconWrapper><IconTwitter/></IconWrapper></Link>,
            instagram: <Link href={link.url} key={link.url}><IconWrapper><IconInstagram/></IconWrapper></Link>,
            medium: <Link href={link.url} key={link.url}><IconWrapper><IconMedium/></IconWrapper></Link>,
            youtube: <Link href={link.url} key={link.url}><IconWrapper><IconYoutube/></IconWrapper></Link>,
            facebook: <Link href={link.url} key={link.url}><IconWrapper><IconFaceBook/></IconWrapper></Link>,
            telegram: <Link href={link.url} key={link.url}><IconWrapper><IconTelegram/></IconWrapper></Link>,
            discord: <Link href={link.url} key={link.url}><IconWrapper><IconDiscord/></IconWrapper></Link>,
            gitbook: <Link href={link.url} key={link.url}><IconWrapper><IconGitBook/></IconWrapper></Link>,
          } [link.category]
        ))}
      </IconContainer>
    </Container>
  );
}

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`items-center`,
  tw`h-fit`,
  tw`md:flex-row`,
  tw`md:justify-between`,
  tw`md:p-6`,
  tw`lg:flex-col`,
  tw`lg:justify-center`,
  tw`lg:pt-[52px]`,
  tw`lg:py-[44px]`,
  tw`lg:pb-[35px]`,
  `
    border: 1px solid #d9d9d9;
    padding: 52px 44px 35px;
  `,
]);

const InfoWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`items-center`,
  `
    @media (min-width: 768px) and (max-width: 1023px) {
      flex-direction: row;
      column-gap: 16px;
    }
  `,
])

const ImageContainer = styled.div([
  tw`rounded-full`,
  tw`w-[64px]`,
  tw`h-[64px]`,
  tw`overflow-hidden`,
]);

const Description = styled.span([
  tw`text-xs`,
  tw`text-gray-30`,
  tw`mt-4`,
  `
    @media (min-width: 768px) and (max-width: 1023px) {
      display: none;
    }
  `,
]);

const Name = styled.h2([
  tw`text-base`,
  tw`text-black`,
  tw`mt-1`,
  `
    @media (min-width: 768px) and (max-width: 1023px) {
      margin-top: 0;
    }
  `,
]);

const IconContainer = styled.div([
  tw`flex`,
  tw`gap-8`,
  tw`h-[32px]`,
  tw`mt-9`,
  `
    @media (min-width: 768px) and (max-width: 1023px) {
      margin-top: 0;
    }
  `,
]);

const IconWrapper = styled.span([
  tw`cursor-pointer`,
  tw`h-full`,
  tw`w-[32px]`,
  `
    svg {
      width: 100%;
      height: 100%;
      path {
        fill: #A6A6A6 !important;
      }
    }
    
    &:hover {
      svg {
        path {
          fill: #1A1A1A !important;
          transition: fill 0.2s ease-in-out;
        }
      }
    }
  `,
]);