import React, { useRef } from 'react';
import Image from 'next/image';

import styled from '@emotion/styled';
import tw from 'twin.macro';
import Link from 'next/link';
import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';
import { NileCDNLoader } from '@utils/image/loader';
import { InfiniteLoader } from '@components/common/loader';

interface History {
  id: number,
  profileImage: string;
  link: string;
  text: string;
  date: string;
}

export type MarketHistoryListProps = {
  data?: History[],
}
export const MarketHistoryList = ({ data }: MarketHistoryListProps) => {
  const container = useRef<HTMLDivElement>(null);
  const loader = useRef<HTMLDivElement>(null);

  const refresh = () => {
    if (container.current) {
      const scrollViewOffsetY = container.current.scrollTop;
      const scrollViewFrameHeight = container.current.clientHeight;
      const scrollViewContentHeight = container.current.scrollHeight;
      const sum = scrollViewOffsetY + scrollViewFrameHeight;

      if (scrollViewContentHeight && sum >= scrollViewContentHeight) {
        loader.current?.style.setProperty('height', '50px');
        setTimeout(() => {
          container.current?.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
          });
          loader.current?.style.setProperty('height', `0`);
        }, 3000);
      }
    }
  };

  return (
    <Container ref={container} onScroll={refresh}>
      <HistoryList>
        {data?.map((item) => (
          <HistoryListItem key={item.id}>
            <Link href={item.link}>
              <InfoWrapper>
                <Content>
                  <ImageContainer>
                    <Image src={item.profileImage} width="100%" height="100%" layout="responsive" loader={NileCDNLoader} />
                  </ImageContainer>
                  <ValueWrapper>
                    <Value>{item.text}</Value>
                    <Date>{item.date}</Date>
                  </ValueWrapper>
                </Content>
                <IconArrow />
              </InfoWrapper>
            </Link>
          </HistoryListItem>
        ))}
      </HistoryList>
      <LoaderContainer ref={loader}>
        <LoaderWrapper>
          <InfiniteLoader />
        </LoaderWrapper>
      </LoaderContainer>
    </Container>
  );
};

MarketHistoryList.defaultProps = {
  data: undefined,
};

const Container = styled.div([
  tw`h-[400px]`,
  tw`border`,
  tw`border-gray-80`,
  tw`rounded-[2px]`,
  tw`overflow-y-scroll`,
]);

const HistoryList = styled.ul([]);

const HistoryListItem = styled.li([
  tw`flex`,
  tw`items-center`,
  tw`p-[12px]`,
  `border-bottom: 1px solid #d9d9d9`,
  tw`gap-[12px]`,
  tw`hover:bg-gray-90`,
  tw`cursor-pointer`,
  `
    svg {
      transform: rotate(-90deg);
    }
  `,
]);

const Value = styled.span([
  tw`text-sm`,
]);

const Date = styled.span([
  tw`text-xs`,
  tw`text-gray-60`,
]);

const ValueWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-[2px]`,
]);

const Content = styled.div([
  tw`flex`,
  tw`items-center`,
  tw`gap-[12px]`,
]);

const InfoWrapper = styled.div([
  tw`flex`,
  tw`justify-between`,
  tw`w-full`,
  tw`items-center`,
]);

const ImageContainer = styled.div([
  tw`w-[32px]`,
  tw`h-[32px]`,
  tw`overflow-hidden`,
  tw`rounded-full`,
]);

const LoaderWrapper = styled.div([
  tw`h-[32px]`,
]);

const LoaderContainer = styled.div([
  tw`h-0`,
  tw`flex`,
  tw`items-center`,
  tw`justify-center`,
  tw`overflow-hidden`,
  `
    transition: height 0.5s ease-in;
  `,
]);
