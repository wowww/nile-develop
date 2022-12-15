import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import classNames from 'classnames';

import Image from 'next/image';
import { NileCDNLoader } from '@utils/image/loader';
import { useCallback } from 'react';
import { useTranslation } from 'next-i18next';

export const LusOverview = () => {
  const { t } = useTranslation(['common', 'life']);

  const loopElement = useCallback((floor: number, times: number) => {
    const item: React.ReactElement[] = [];
    for (let i = 0; i < times; i += 1) {
      for (let j = 1; j <= 13; j += 1) {
        item.push(
          <ImageContainer key={`${floor} + ${i} + ${j}`}>
            <Image src={`/img/lus/img_life_lus${floor}-${j}.png`} alt="" layout="fill" loader={NileCDNLoader} />
          </ImageContainer>,
        );
      }
    }
    return item;
  }, []);

  return (
    <Container>
      <TextWrapper>
        <TitleWrapper>
          <Title>Overview</Title>
          <Desc>
            {t('lus.overview.desc', { ns: 'life' })}
          </Desc>
        </TitleWrapper>
        <Text>
          <p>
            {t('lus.overview.text1', { ns: 'life' })}
          </p>
          <p>
            {t('lus.overview.text2', { ns: 'life' })}
          </p>
          <p>
            {t('lus.overview.text3', { ns: 'life' })}
          </p>
        </Text>
      </TextWrapper>
      <Visual>
        <Row>
          <VisualInner>{loopElement(1, 2)}</VisualInner>
        </Row>
        <Row className={classNames('reverse')}>
          <VisualInner>{loopElement(2, 2)}</VisualInner>
        </Row>
        <Row>
          <VisualInner>{loopElement(3, 2)}</VisualInner>
        </Row>
      </Visual>
    </Container>
  );
};

const ImageContainer = styled.div([
  tw`relative`,
  tw`inline-block`,
  tw`w-[140px]`,
  tw`h-[140px]`,
  tw`md:w-[200px]`,
  tw`md:h-[200px]`,
]);

const VisualInner = styled.div([
  tw`animate-scrollingR`,
  tw`whitespace-nowrap`,
]);

const Row = styled.div(({ className }) => [
  tw`z-[1]`,
  tw`relative`,
  tw`flex`,
  tw`w-full`,
  tw`h-[140px]`,
  tw`justify-start`,
  tw`md:h-[200px]`,
  className?.includes('reverse') && [
    tw`justify-end`,
    css`
      ${VisualInner} {
        ${tw`animate-scrollingL`}
      }
    `,
  ],
]);

const Visual = styled.div([
  tw`overflow-hidden`,
  tw`mt-10`,
  tw`xl:mt-[66px]`,
]);

const Text = styled.div([
  tw`w-full`,
  tw`mt-6`,
  tw`md:ml-[212px]`,
  tw`xl:ml-12`,
  css`
    p {
      ${tw`text-sm`}
      ${tw`leading-[22px]`}
      ${tw`md:text-base`}
      ${tw`md:leading-[1.5]`}
      ${tw`xl:text-sm`}
      ${tw`xl:leading-[22px]`}
    }
  `,
]);

const TitleWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-[22px]`,
  tw`md:flex-row`,
  tw`md:gap-[51px]`,
  tw`xl:flex-col`,
  tw`xl:gap-[10px]`,
]);

const Desc = styled.p([
  tw`text-base`,
  tw`leading-[1.5]`,
  tw`whitespace-pre-line`,
  `word-break: break-all`,
  tw`md:text-lg`,
  tw`xl:text-base`,
]);

const Title = styled.h2([
  tw`text-2xl`,
  tw`font-header`,
  tw`font-bold`,
  tw`md:text-[40px]`,
  tw`md:leading-[1.2]`,
]);

const TextWrapper = styled.div([
  tw`w-full`,
  tw`px-5`,
  tw`pt-[80px]`,
  tw`md:px-10`,
  tw`xl:mx-auto`,
  tw`xl:max-w-[1200px]`,
  tw`xl:flex`,
  tw`xl:pt-[100px]`,
]);

const Container = styled.div([
  tw`bg-[#b8d1e1]`,
]);
