import React from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import { css } from '@emotion/core';
import { NileCDNLoader } from '@utils/image/loader';
import { useTranslation } from 'next-i18next';

interface StoryArticleItemProps {
  link: string;
  imgPath: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const MediumNewsItem = ({ link, imgPath, title, content, publishedDate }: StoryArticleItemProps) => {
  const { t } = useTranslation(['nile']);

  return (
    <Link href={link} target="_blank">
      <Container>
        <ImageContainer>
          <StyledImage src={imgPath} layout="fill" objectFit="cover" loader={NileCDNLoader} />
        </ImageContainer>
        <Wrapper>
          <div className="flex flex-col gap-2">
            <Title>{t(title, { ns: 'nile' })}</Title>
            <Content>{t(content, { ns: 'nile' })}</Content>
          </div>
          <Date>{publishedDate}</Date>
        </Wrapper>
      </Container>
    </Link>
  );
};

const StyledImage = styled(Image)([
  tw`absolute`,
  tw`inset-0`,
]);

const Title = styled.h3([
  tw`text-black`,
  tw`text-xl`,
  tw`font-bold`,
]);

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-6`,
  tw`cursor-pointer`,
  tw`md:flex-row`,
  tw`lg:flex-col`,
  css`
    &:hover {
      ${StyledImage} {
        transform: scale(1.05);
        transition: all .3s;
      }

      ${Title} {
        text-decoration: underline;
      }
    }

    > span {
      position: initial;
    }
  `,
]);

const ImageContainer = styled.div([
  tw`overflow-hidden`,
  tw`w-full`,
  tw`relative`,
  `aspect-ratio: 16/9`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-4`,
]);

const Content = styled.p([
  tw`text-gray-30`,
  tw`text-sm`,
  tw`overflow-hidden`,
  `display: -webkit-box`,
  `-webkit-line-clamp: 3`,
  `-webkit-box-orient: vertical`,
]);

const Date = styled.span([
  tw`text-gray-60`,
  tw`text-xs`,
]);
