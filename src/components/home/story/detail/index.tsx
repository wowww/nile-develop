import React from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';
import dynamic from 'next/dynamic';
// import { MarkdownViewer } from '@components/common/markdown/viewer';
import { ShareButton } from '@components/common/button/share';
import { Tag } from '@components/common/tag';
import {PostLink} from "@components/home/story/detail/link";
import {StoryViewNftCard} from "@components/home/story/nft";

const MarkdownViewer = dynamic(() => import('@components/common/markdown/viewer'), { ssr: false });

interface StoryArticleItemProps {
  tag: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const StoryItemDetail = ({ tag, title, content, publishedDate }: StoryArticleItemProps) => {
  const url = 'https://xdraco.com';

  return (
    <Container>
      <WrapHeader>
        <Tag
          border="solid 1px black"
          color="black"
          fontWeight="bold"
          marginBottom="12px"
        >
          {tag}
        </Tag>
        <Title>{title}</Title>
        <div className="flex justify-between items-center">
          <Date>{publishedDate}</Date>
          <ShareButton />
        </div>
      </WrapHeader>
      <WrapContent>
        <MarkdownViewer value={content} />
      </WrapContent>
      <StoryViewNftCard />
      {/* <PostLink url={url} /> */}
    </Container>
  );
};

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-[38px]`,
]);

const WrapHeader = styled.div([
  tw`flex`,
  tw`flex-col`,
]);

const WrapContent = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-[40px]`,
]);

const Title = styled.h3([
  tw`text-black`,
  tw`text-[24px]`,
  tw`font-bold`,
  tw`mb-[18px]`,
]);

const Date = styled.span([
  tw`text-gray-60`,
  tw`text-[12px]`,
]);
