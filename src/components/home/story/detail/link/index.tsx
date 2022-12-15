import React, {useEffect, useState} from 'react';

import styled from "@emotion/styled";
import tw from "twin.macro";
import Link from "next/link";
import Image from "next/image";
import { css } from '@emotion/core';
import axios from "axios";

export type StoryArticleItemProps = {
  url: string;
}

interface ogType {
  title: string;
  thumbnail: string;
  desc: string;
}

export const PostLink = ({ url }: StoryArticleItemProps) => {
  const [og, setOg] = useState<ogType>({
    title: '',
    thumbnail: '',
    desc: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/api/opengraph?url=${url}`)
      .then((res) => {
        console.log(res.data);
        setOg({
          title: res.data.results.ogTitle,
          thumbnail: res.data.results.ogImage.url,
          desc: res.data.results.ogDescription,
        })
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <Link href={url}>
      <Container>
        <Wrapper>
          <div className="flex flex-col gap-[12px]">
            <Title>{og.title}</Title>
            <Content>{og.desc}</Content>
          </div>
          <LinkUrl>{url}</LinkUrl>
        </Wrapper>
        <ImageContainer>
          <Image src={og.thumbnail} className="absolute inset-0" alt="" layout="fill" objectFit="cover" />
        </ImageContainer>
      </Container>
    </Link>
  );
}

const Title = styled.h3([
  tw`text-black`,
  tw`text-base`,
  tw`font-bold`,
]);

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`justify-center`,
  tw`w-full`,
  tw`border`,
  tw`border-gray-80`,
  tw`rounded`,
  tw`overflow-hidden`,
  tw`md:flex-row-reverse`,
  tw`cursor-pointer`,
  css`
    &:hover {
      ${Title} {
        ${tw`underline`}
      }
    }
  `,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-5`,
  tw`p-6`,
  tw`w-full`,
]);

const Content = styled.p([
  tw`text-gray-30`,
  tw`text-sm`,
  tw`overflow-hidden`,
  `display: -webkit-box`,
  `-webkit-line-clamp: 2`,
  `-webkit-box-orient: vertical`,
]);

const LinkUrl = styled.span([
  tw`text-gray-60`,
  tw`text-xs`,
]);

const ImageContainer = styled.div([
  tw`relative`,
  tw`overflow-hidden`,
  `flex: 0 0 160px`,
  `aspect-ratio: 1/1`,
]);