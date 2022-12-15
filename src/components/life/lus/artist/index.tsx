import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';

import Image from 'next/image';
import { NileCDNLoader } from '@utils/image/loader';

import IconHomepage from '@/assets/icons/common/social/ico_homepage.svg';
import IconTwitter from '@/assets/icons/common/social/ico_twitter.svg';
import IconInstagram from '@/assets/icons/common/social/ico_instagram.svg';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export const LusArtistInfo = () => {
  const { t } = useTranslation(['common', 'life']);

  return (
    <Container>
      <Wrapper>
        <Title>Artist</Title>
        <Content>
          <NameWrapper>
            <div>
              <ImageContainer>
                <Image src="/img/lus/ico_lus_artist_border_male.png" layout="fill" loader={NileCDNLoader} />
              </ImageContainer>
              <ArtistName>Zeeha</ArtistName>
            </div>
            <div>
              <ImageContainer>
                <Image src="/img/lus/ico_lus_artist_border_female.png" layout="fill" loader={NileCDNLoader} />
              </ImageContainer>
              <ArtistName>Locho</ArtistName>
            </div>
          </NameWrapper>
          <DetailInfo>
            <p>
              {t('lus.artist.desc1', { ns: 'life' })}
            </p>
            <p className="mt-6">
              {t('lus.artist.desc2', { ns: 'life' })}
            </p>
            <ButtonList>
              <ButtonListItem>
                <Link href="https://picdotstudio.com" target="_blank" rel="noopener noreferrer" title="새창열림">
                  <IconHomepage width={32} height={33} />
                </Link>
              </ButtonListItem>
              <ButtonListItem>
                <Link href="https://twitter.com/PICDOT" target="_blank" rel="noopener noreferrer" title="새창열림">
                  <IconTwitter width={32} height={33} />
                </Link>
              </ButtonListItem>
              <ButtonListItem>
                <Link href="https://www.instagram.com/picdot_studio/" target="_blank" rel="noopener noreferrer" title="새창열림">
                  <IconInstagram width={32} height={33} />
                </Link>
              </ButtonListItem>
            </ButtonList>
          </DetailInfo>
        </Content>
      </Wrapper>
    </Container>
  );
};

const ButtonListItem = styled.li([
  `
    svg {
      path {
        fill: #fff;
      }
    }
  `,
]);

const ButtonList = styled.ul([
  tw`flex`,
  tw`mt-8`,
  tw`justify-center`,
  tw`gap-4`,
  tw`md:justify-start`,
]);

const DetailInfo = styled.div([
  tw`mt-10`,
  tw`max-w-[576px]`,
  tw`md:max-w-[699px]`,
  tw`md:mt-0`,
  css`
    > p {
      ${tw`text-sm`}
      ${tw`leading-[22px]`}
      ${tw`text-white`}
      word-break: keep-all;
      ${tw`md:text-base`}
      ${tw`md:leading-[1.5]`}
      ${tw`xl:text-sm`}
      ${tw`xl:leading-[22px]`}
    }
  `,
]);

const ArtistName = styled.span([
  tw`text-base`,
  tw`leading-[1.5]`,
  tw`mt-[11px]`,
  tw`bg-gray-30`,
  tw`text-white`,
  tw`py-[3px]`,
  tw`px-4`,
  tw`md:text-lg`,
  tw`md:leading-[26px]`,
  tw`xl:text-base`,
  tw`xl:leading-[1.5]`,
]);

const ImageContainer = styled.div([
  tw`relative`,
  tw`w-[98px]`,
  tw`h-[98px]`,
]);

const NameWrapper = styled.div([
  tw`flex`,
  tw`gap-[22px]`,
  css`
    > div {
      ${tw`flex`}
      ${tw`flex-col`}
      ${tw`items-center`}
    }
  `,
  tw`md:gap-5`,
  tw`xl:gap-10`,
]);

const Title = styled.h3([
  tw`text-2xl`,
  tw`leading-[28px]`,
  tw`font-header`,
  tw`font-bold`,
  tw`text-white`,
  tw`md:text-[40px]`,
  tw`md:leading-[1.2]`,
]);

const Content = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`items-center`,
  tw`mt-10`,
  tw`md:flex-row`,
  tw`md:gap-10`,
  tw`md:mt-0`,
  tw`md:items-start`,
]);

const Container = styled.div([
  tw`bg-black`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`w-full`,
  tw`items-center`,
  tw`py-[60px]`,
  tw`px-5`,
  tw`md:py-[80px]`,
  tw`md:px-10`,
  tw`md:flex-row`,
  tw`md:flex-wrap`,
  tw`md:justify-between`,
  tw`md:items-start`,
  tw`xl:max-w-[1200px]`,
  tw`xl:mx-auto`,
  tw`xl:px-0`,
  tw`xl:py-[100px]`,
]);
