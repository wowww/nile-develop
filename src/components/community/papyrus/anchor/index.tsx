import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import IconArrow from '@/assets/icons/common/arrow/ico_arrow_right_26.svg';

export const PapyrusAnchor = () => {
  const anchorData = [
    {
      title: 'DAO 참여로 Token 얻기',
      desc: '모집중인 DAO에 참여하거나, 기존 DAO에서 추가로 Station이 열리면 참여하여 DAO Token을 얻을 수 있습니다.',
      link: '/dao/home/',
      linkName: 'Go DAO',
    },
    {
      title: 'WEMIX.Fi에서 구매하기',
      desc: 'WEMIX의 공식 DeFi 서비스에서 DAO Token을 구매할 수 있습니다. Swap 기능을 사용해 DAO Token을 교환할 수 있습니다.',
      link: 'https://wemix.fi/',
      linkName: 'Go WEMIX.Fi',
    },
    {
      title: 'NFT 구매하기',
      desc: 'NILE의 Marketplace에는 다양한 NFT들이 판매됩니다. 이 곳에서 NFT를 구매하면 해당 커뮤니티에 참여할 수 있습니다.',
      link: '/marketplace/',
      linkName: 'Go Marketplace',
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Title>Token, NFT는 다양한 경로로 보유할 수 있습니다.</Title>
        <Desc>WEMIX 생태계의 여러 플랫폼에서 Token과 NFT를 구매하거나 교환할 수 있습니다.</Desc>
        <List>
          {anchorData.map((anchor, index) => {
            return (
              <Item key={anchor.linkName}>
                <ItemTitle>{anchor.title}</ItemTitle>
                <ItemDesc className="anchor-detail-desc">{anchor.desc}</ItemDesc>
                <Link href={anchor.link} target="_blank">
                  <StyledLink>
                    {anchor.linkName}
                    <IconWrapper><IconArrow /></IconWrapper>
                  </StyledLink>
                </Link>
              </Item>
            );
          })}
        </List>
      </Wrapper>
    </Container>
  )
}

const IconWrapper = styled.div([
  tw`w-[18px]`,
  tw`h-[10px]`,
  tw`ml-[11px]`,
  tw`md:w-6`,
  tw`md:h-[14px]`,
  tw`xl:w-[18px]`,
  tw`xl:h-[10px]`,
  `
    svg {
      width: 100%;
      height: 100%;
    }
  `,
])

const StyledLink = styled.strong([
  tw`flex`,
  tw`items-center`,
  tw`text-sm`,
  tw`mt-5`,
  tw`text-white`,
  tw`cursor-pointer`,
  tw`md:text-base`,
  tw`xl:text-sm`,
]);

const ItemTitle = styled.span([
  tw`text-white`,
  tw`text-xl`,
  tw`md:text-[22px]`,
  tw`xl:text-xl`,
]);

const ItemDesc = styled.p([
  tw`text-gray-60`,
  tw`text-sm`,
  tw`mt-3`,
  tw`md:text-base`,
  tw`xl:text-[16px]`,
]);

const Item = styled.li([
  tw`flex`,
  tw`flex-col`,
  tw`border`,
  tw`border-gray-40`,
  tw`rounded`,
  tw`p-8`,
]);

const List = styled.ul([
  tw`mt-7`,
  tw`flex`,
  tw`flex-col`,
  tw`gap-6`,
  tw`xl:flex-row`,
  tw`xl:gap-12`,
])

const Desc = styled.span([
  tw`mt-4`,
  tw`text-gray-60`,
  tw`text-sm`,
  tw`text-center`,
  tw`block`,
  tw`md:text-base`,
  tw`xl:text-sm`,
  tw`xl:mt-3`,
]);

const Title = styled.h3([
  tw`text-white`,
  tw`text-xl`,
  tw`font-header`,
  tw`font-bold`,
  tw`text-center`,
  tw`md:text-[32px]`,
  tw`xl:text-[30px]`,
]);

const Wrapper = styled.div([
  tw`max-w-[1200px]`,
  tw`px-5`,
  tw`md:px-10`,
  tw`xl:px-0`,
  tw`xl:mx-auto`,
]);

const Container = styled.div([
  tw`py-[60px]`,
  tw`xl:py-[80px]`,
  tw`bg-gray-10`,
]);