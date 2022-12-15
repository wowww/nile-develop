import React from 'react';

import styled from "@emotion/styled";
import tw from "twin.macro";
import Link from "next/link";

import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';
import Image from "next/image";
import { NileCDNLoader } from "@utils/image/loader";
import {useLayoutResize} from "@utils/layout";

interface StoryDetailPaginationProps {
  articleId: number;
  order: 'before' | 'after';
  thumbnail: string;
  title: string;
  content: string;
}

export const StoryDetailPagination = ({ articleId, order, thumbnail, title, content }: StoryDetailPaginationProps) => {
  const { isTablet } = useLayoutResize();

  return (
    <Link href={`/story/${articleId}`}>
      <Container>
        {
          {
            before: <StyledButton><BeforeArrow />{isTablet && '이전글'}</StyledButton>,
            after:  <StyledButton><IconArrow />{isTablet && '다음글'}</StyledButton>,
          } [order]
        }
        <Wrapper>
          <ImageContainer>
            <Image className="absolute inset-0" src={thumbnail} loader={NileCDNLoader} layout="fill" objectFit="cover" />
          </ImageContainer>
          <InfoWrapper>
            <Title>{title}</Title>
            { isTablet && <Content>{content}</Content> }
          </InfoWrapper>
        </Wrapper>
      </Container>
    </Link>
  );
};

const Container = styled.div([
  tw`flex`,
  tw`py-2`,
  tw`px-3`,
  tw`md:py-4`,
  tw`md:px-3`,
  tw`border-b`,
  tw`border-gray-80`,
  tw`gap-5`,
  tw`md:gap-10`,
  tw`cursor-pointer`,
  `
    &:hover {
      background: #f2f2f2;
    }
  `,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`gap-4`,
  tw`md:gap-5`,
  tw`items-center`,
]);

const StyledButton = styled.span([
  tw`flex`,
  tw`items-center`,
  tw`gap-[17px]`,
  tw`whitespace-nowrap`,
  tw`text-base`,
  tw`xl:text-sm`,
  `
    svg {
      width: 24px;
      height: 24px;
    }
  `,
]);

const ImageContainer = styled.div([
  tw`w-[60px]`,
  tw`h-[60px]`,
  tw`md:w-[80px]`,
  tw`md:h-[80px]`,
  tw`relative`,
  tw`overflow-hidden`,
  `
    flex: 0 0 60px;
    
    @media (min-width: 768px) {
      flex: 0 0 80px;
    }
   `,
]);

const BeforeArrow = styled(IconArrow)([
  `transform: rotate(180deg)`,
]);

const InfoWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
]);

const Title = styled.h3([
  tw`font-bold`,
  tw`text-sm`,
  tw`md:text-base`,
  tw`xl:text-sm`,
]);

const Content = styled.p([
  tw`text-xs`,
  tw`text-gray-30`,
  tw`overflow-hidden`,
  `display: -webkit-box`,
  `-webkit-line-clamp: 2`,
  `-webkit-box-orient: vertical`,
]);