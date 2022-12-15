import React from 'react';

import styled from "@emotion/styled";
import tw from "twin.macro";
import { Tag } from "@components/common/tag";
import Link from 'next/link';
import Image from "next/image";
import { NileCDNLoader } from "@utils/image/loader";

interface StoryArticleItemProps {
  id: number;
  imgPath: string;
  tag: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const StoryListItem = ({ id, imgPath, tag, title, content, publishedDate }: StoryArticleItemProps) => {

  return (
      <Link key={id} href={`/nile/story/${id}`}>
        <Container>
          <ImageContainer>
            <StyledImage src={imgPath} alt="" layout="fill" objectFit="cover" loader={NileCDNLoader} />
          </ImageContainer>
          <Wrapper>
            <Tag
              border="solid 1px black"
              color="black"
              fontWeight="bold"
            >
              {tag}
            </Tag>
            <div className="flex flex-col gap-[8px]">
              <Title>{title}</Title>
              <Content>{content}</Content>
            </div>
            <Date>{publishedDate}</Date>
          </Wrapper>
        </Container>
      </Link>
  );
}

const StyledImage = styled(Image)([
  tw`absolute`,
  tw`inset-0`,
]);

const Container = styled.div([
  tw`flex`,
  tw`flex-col md:flex-row`,
  tw`justify-between`,
  tw`gap-5 md:gap-6 xl:gap-10`,
  tw`cursor-pointer`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-3`,
  tw`w-full`,
]);

const Title = styled.h3([
  tw`text-black`,
  tw`text-xl`,
  tw`font-bold`,
]);

const ImageContainer = styled.div([
  tw`h-auto`,
  tw`w-full`,
  `
    aspect-ratio: 16/9;
  `,
  tw`relative`,
  tw`overflow-hidden`,
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
