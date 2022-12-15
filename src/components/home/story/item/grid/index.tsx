import React from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Tag } from '@components/common/tag';
import Link from 'next/link';
import Image from 'next/image';
import { css } from '@emotion/core';
import { NileCDNLoader } from '@utils/image/loader';

interface StoryArticleItemProps {
  id: number;
  imgPath: string;
  tag: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const StoryGridItem = ({ id, imgPath, tag, title, content, publishedDate }: StoryArticleItemProps) => {
  return (
    <Link key={id} href={`/story/${id}`}>
      <Container>
        <ImageContainer>
          <StyledImage src={imgPath} layout="fill" objectFit="cover" loader={NileCDNLoader} />
        </ImageContainer>
        <Wrapper>
          <Tag
            border="solid 1px black"
            color="black"
            fontWeight="bold"
          >
            {tag}
          </Tag>
          <div className="flex flex-col gap-2">
            <Title>{title}</Title>
            <Content>{content}</Content>
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
  `padding-top: 56.25%`,
  tw`h-0`,
  tw`relative`,
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
  tw`md:mt-2`,
]);
