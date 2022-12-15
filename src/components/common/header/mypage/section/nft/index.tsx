import React, { useState } from 'react';
import Link from 'next/link';
import { TextButton } from '@components/common/button/textbutton';

import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import 'swiper/css';
import 'swiper/css/navigation';

import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';

const nftList = [
  {
    key: 1,
    title:'Owned NFT',
    count: 43,
    url: '/',
  },
  {
    key: 2,
    title:'Favorites',
    count: 22,
    url: '/',
  },
]

export type NftSectionProps = {
  clickEvent?: () => void;
};

export const NftSection = ({ clickEvent }: NftSectionProps) => {
  const [hasNft, setHasNft] = useState(true);

  return (
    <Container>
      <Title>My NFT</Title>
      { hasNft ? (
        <>
          <Box>
            <SmallTitle>My NFT Price</SmallTitle>
            <MyOwnInfo>
              <span>$4,500</span>
              <span>{nftList[0].count} NFT</span>
            </MyOwnInfo>
          </Box>
          <NftLinkWrapper>
            { nftList.map((item) => (
              <LinkList key={item.key}>
                <Link href={item.url} passHref>
                  <Item onClick={clickEvent}>
                    <NftTitle>
                      {item.title} <IconArrow />
                    </NftTitle>
                    <strong>{item.count}</strong>
                  </Item>
                </Link>
              </LinkList>
            ))}
          </NftLinkWrapper>
        </>
      ) : (
        <Description>
          <Text>소유하고 있는 NFT가 없습니다.</Text>
          <Text>Marketplace에서 다양한 NFT를 만나보세요! </Text>
          <TextButton buttonText="Go Marketplace" iconValue="arrow" type="link" href="/marketplace" size="sm" />
        </Description>
      )}
    </Container>
  );
};

NftSection.defaultProps = {
  clickEvent: undefined,
};

const Container = styled.section([
  tw`mt-5`,
]);

const Box = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-2`,
  tw`mt-2`,
  tw`p-3`,
  tw`bg-gray-90`,
  tw`rounded`,
]);

const Title = styled.h3([
  tw`text-sm`,
  tw`font-bold`,
]);

const SmallTitle = styled.h4([
  tw`text-xs`,
  tw`text-gray-30`,
  tw`font-normal`,
  tw`leading-none`,
]);

const MyOwnInfo = styled.div([
  tw`flex`,
  tw`gap-6`,
  css`
    span {
      ${tw`relative`}
      ${tw`font-bold`}
      ${tw`text-[16px]`}
      ${tw`leading-none`}
      
      &::before {
        ${tw`block`}
        ${tw`absolute`}
        ${tw`top-0`}
        ${tw`left-[-13px]`}
        ${tw`w-px`}
        ${tw`h-full`}
        ${tw`bg-gray-80`}
        content: "";
      }
      
      &:first-child::before {
        ${tw`hidden`}
      }
    }
  `,
]);

const NftLinkWrapper = styled.ul([
  tw`flex`,
  tw`flex-wrap`,
  tw`gap-x-2.5`,
  tw`mt-2`,
]);

const LinkList = styled.li([
  tw`flex-1`,
  tw`cursor-pointer`,
]);

const Item = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-y-2`,
  tw`p-3`,
  tw`border`,
  tw`border-gray-80`,
  tw`rounded`,

  css`    
    transition: background-color 0.2s;
    
    &:hover {
      ${tw`bg-gray-90`}
      transition: background-color 0.2s;
    }

    strong {
      ${`block`}
      ${tw`font-bold`}
      ${tw`text-base`}
      ${tw`leading-none`}
    }
  `,
]);

const NftTitle = styled.span([
  tw`flex`,
  tw`items-center`,
  tw`gap-x-1`,
  tw`text-sm`,
  tw`text-black`,

  css`
    svg {
      transform: rotate(-90deg);
    }
  `,
])

const Description = styled.p([
  tw`py-5`,
  tw`px-3`,
  tw`text-center`,
  tw`rounded`,
  tw`bg-gray-90`,

  css`
    a {
      ${tw`flex`}
      ${tw`justify-center`}
      ${tw`items-center`}
      ${tw`gap-0.5`}
      ${tw`mt-3`}
      ${tw`h-auto`}
      ${tw`text-xs`}
      ${tw`text-black`}
      ${tw`border-none`}
      
      svg {
        ${tw`w-3`}
        ${tw`h-3`}
        transform: rotate(270deg);
      }
      
      &:hover {
        ${tw`mt-3`}
        ${tw`border-none`}
      }
    }
  `,
]);

const Text = styled.span([
  tw`block`,
  tw`text-xs`,
  tw`text-gray-60`,
  tw`leading-normal`,
])