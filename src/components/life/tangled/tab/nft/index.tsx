import Image from 'next/image';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import { css } from '@emotion/core';
import { TangledJennis } from '@components/life/tangled/tab/nft/watch/jennis';
import { TangledMarquee } from '@components/life/tangled/tab/nft/watch/marquee';
import { NileCDNLoader } from '@utils/image/loader';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';

interface NftsTitleType {
  title: string;
  titleColor: string;
  desc: string;
  subDesc: string;
}

const NftsTitle = ({ title, titleColor, desc, subDesc }: NftsTitleType) => {
  return (
    <TitleWrapper>
      <NftTitle className={cn(titleColor)}>{title}</NftTitle>
      <NftDesc>
        <strong>{desc}</strong>
        <span>{subDesc}</span>
      </NftDesc>
    </TitleWrapper>
  );
};

export const TangledNfts = () => {
  const { t } = useTranslation(['life']);

  return (
    <Container>
      <Main>
        <ImageContainer>
          <Image src="/img/tangled/nfts/img_tangled_timepieces.png" alt="Tangled Timepiece" layout="fill" loader={NileCDNLoader} />
        </ImageContainer>
        <Desc>
          {t('tangled.nft.desc', { ns: 'life' })}
        </Desc>
      </Main>
      <TangledWatch>
        <NftsTitle
          title={t('tangled.nft.luxury.title', { ns: 'life' })}
          titleColor="luxury"
          desc={t('tangled.nft.luxury.text1', { ns: 'life' })}
          subDesc={t('tangled.nft.luxury.text2', { ns: 'life' })}
        />
        <TangledMarquee itemLength={11} type="luxury" />
      </TangledWatch>
      <TangledWatch>
        <NftsTitle
          title={t('tangled.nft.highEnd.title', { ns: 'life' })}
          titleColor="highEnd"
          desc={t('tangled.nft.highEnd.text1', { ns: 'life' })}
          subDesc={t('tangled.nft.highEnd.text2', { ns: 'life' })}
        />
        <TangledMarquee itemLength={11} type="highend" />
      </TangledWatch>
      <TangledWatch>
        <NftsTitle
          title={t('tangled.nft.zenith.title', { ns: 'life' })}
          titleColor="zenith"
          desc={t('tangled.nft.zenith.text1', { ns: 'life' })}
          subDesc={t('tangled.nft.zenith.text2', { ns: 'life' })}
        />
        <TangledJennis />
      </TangledWatch>
    </Container>
  );
};

const TitleWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-6`,
  tw`items-center`,
  tw`justify-center`,
]);

const NftTitle = styled.span(({ className }) => [
  tw`text-2xl`,
  tw`font-bold`,
  tw`leading-[28px]`,
  tw`md:text-[40px]`,
  tw`md:leading-[1.2]`,
  className?.includes('luxury') && [
    tw`text-tangled-luxury`,
  ],
  className?.includes('highEnd') && [
    tw`text-tangled-highEnd`,
  ],
  className?.includes('zenith') && [
    tw`text-tangled-zenith`,
  ],
]);

const NftDesc = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
  tw`justify-center`,
  tw`items-center`,
  tw`xl:gap-3`,
  css`
    > strong {
      ${tw`text-xl`}
      ${tw`leading-[1.4]`}
      ${tw`font-bold`}
      ${tw`text-white`}
      ${tw`text-center`}
      ${tw`md:text-[32px]`}
      ${tw`md:leading-[1.25]`}
      ${tw`xl:text-[30px]`}
      ${tw`xl:leading-[1.2]`}
    }

    > span {
      ${tw`text-base`}
      ${tw`leading-[1.5]`}
      ${tw`text-gray-60`}
      ${tw`text-[22px]`}
      ${tw`leading-[30px]`}
      ${tw`text-center`}
      ${tw`xl:text-xl`}
      ${tw`xl:leading-[1.4]`}
    }
  `,
]);

const TangledWatch = styled.div([
  tw`mt-[100px]`,
  tw`md:mt-[120px]`,
]);

const Desc = styled.div([
  tw`text-base`,
  tw`leading-normal`,
  tw`text-white`,
  tw`text-center`,
  tw`max-w-[740px]`,
  tw`md:text-[22px]`,
  tw`md:leading-[30px]`,
  tw`xl:text-xl`,
  tw`xl:leading-[1.4]`,
]);

const ImageContainer = styled.div([
  tw`relative`,
  tw`w-[344px]`,
  tw`h-[103px]`,
  tw`md:w-[511px]`,
  tw`md:h-[153px]`,
  tw`xl:w-[708px]`,
  tw`xl:h-[212px]`,
]);

const Container = styled.div([
  tw`w-full`,
  tw`pt-[62px]`,
  tw`px-5`,
  tw`md:pt-[100px]`,
  tw`md:px-[44px]`,
  tw`xl:pt-[143px]`,
]);

const Main = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-3`,
  tw`items-center`,
]);
