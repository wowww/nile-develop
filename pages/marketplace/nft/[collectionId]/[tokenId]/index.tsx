import React, { FC, useCallback } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import { CreatorProfile } from '@components/market/creator/profile';
import { MarketArticleBanner } from '@components/market/article/banner';
import { PropertyCard } from '@components/market/property';
import { NftFavoriteCards } from '@components/market/nft/card';
import { MarketHistoryLineChart } from '@components/market/history/chart';

import { MarketHistoryList } from '@components/market/history/list';
import { CustomTab } from '@components/common/tab';
import { MarketNftCover } from '@components/market/nft/cover';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { NileApiService } from '@/services/nile/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type MarketNftDetailData = {
  product?: any;
}

const MarketNftDetailPage: FC<{ data: MarketNftDetailData }> = ({ data }) => {

  const About = useCallback(() => {
    const creator = {
      creatorName: 'Zeeha & Locho',
      thumbnail: '/img/E10_Edgware-Road.webp',
      linkList: [
        {
          category: 'home',
          url: 'picdotstudio.com',
        },
        {
          category: 'twitter',
          url: 'https://twitter.com/PICDOT',
        },
        {
          category: 'instagram',
          url: 'https://www.instagram.com/picdot_studio/',
        },
      ],
    };

    const ArticleBanner = {
      status: 'ON SALE',
      title: 'London Underground Station 264 Genesis',
      background: 'https://file.mir4global.com/nile/resources/img/bg_market_collection_lus.png',
      buttonInfo: [
        {
          text: 'View NFT',
          link: '/',
        },
        {
          text: 'View Collection Info',
          link: '/',
        },
      ],
    };

    const propertyList = [
      {
        id: 1,
        propertyType: 'Station Line',
        name: 'District Line',
        rarity: '18 NFT have this trait',
      },
      {
        id: 2,
        propertyType: 'Station Line',
        name: 'District Line',
        rarity: '18 NFT have this trait',
      },
      {
        id: 3,
        propertyType: 'Station Line',
        name: 'District Line',
        rarity: '18 NFT have this trait',
      },
      {
        id: 4,
        propertyType: 'Station Line',
        name: 'District Line',
        rarity: '18 NFT have this trait',
      },
      {
        id: 5,
        propertyType: 'Station Line',
        name: 'District Line',
        rarity: '18 NFT have this trait',
      },
    ];

    return (
      <TabItemContainer>
        <Wrapper>
          <CreatorProfile {...creator} />
          <Content>
            <Item>
              <Title>Collection</Title>
              <MarketArticleBanner {...ArticleBanner} />
            </Item>
            <Item>
              <Title>Description</Title>
              <span>
                LUS 264 Genesis NFT를 보유하시면 해당 NFT의 Generation이 거래될 때마다 거래 금액의 1%가 수익분배 됩니다.
                <br />(LUS Generation은 추후 Featured 예정)
              </span>
            </Item>
            <Item>
              <Title>Properties</Title>
              <Property>
                {propertyList.map((item) => (
                  <PropertyCard key={item.id} {...item} />
                ))}
              </Property>
            </Item>
          </Content>
        </Wrapper>
      </TabItemContainer>
    );
  }, []);

  const History = useCallback(() => {
    const historyList = [
      {
        id: 1,
        profileImage: '/img/banner/img_A02_Aldgate.png',
        link: '/',
        text: 'user_name6 trasferred to user_name7',
        date: '2022-08-11 15:32',
      },
      {
        id: 2,
        profileImage: '/img/banner/img_A02_Aldgate.png',
        link: '/',
        text: 'user_name5 bought with 1,600 WEMIX$',
        date: '2022-08-11 15:32',
      },
      {
        id: 3,
        profileImage: '/img/banner/img_A02_Aldgate.png',
        link: '/',
        text: 'Sales started by user_name4',
        date: '2022-08-11 15:32',
      },
      {
        id: 4,
        profileImage: '/img/banner/img_A02_Aldgate.png',
        link: '/',
        text: 'Listed by user_name4',
        date: '2022-08-11 15:32',
      },
      {
        id: 5,
        profileImage: '/img/banner/img_A02_Aldgate.png',
        link: '/',
        text: 'user_name4 bought with an offer of 2,000 WEMIX$',
        date: '2022-08-11 15:32',
      },
      {
        id: 6,
        profileImage: '/img/banner/img_A02_Aldgate.png',
        link: '/',
        text: 'user_name4’s offer of 2,000 WEMIX$ has expired',
        date: '2022-08-11 15:32',
      },
      {
        id: 7,
        profileImage: '/img/banner/img_A02_Aldgate.png',
        link: '/',
        text: 'user_name4 cancel an offer of 2,000 WEMIX$',
        date: '2022-08-11 15:32',
      },
      {
        id: 8,
        profileImage: '/img/banner/img_A02_Aldgate.png',
        link: '/',
        text: 'user_name4 made an offer of 2,000 WEMIX$',
        date: '2022-08-11 15:32',
      },
      {
        id: 9,
        profileImage: '/img/banner/img_A02_Aldgate.png',
        link: '/',
        text: 'user_name3 bought  with 1,600 WEMIX$',
        date: '2022-08-11 15:32',
      },
      {
        id: 10,
        profileImage: '/img/banner/img_A02_Aldgate.png',
        link: '/',
        text: 'user_name3 won auction with a bid of 1,600 WEMIX$',
        date: '2022-08-11 15:32',
      },
      {
        id: 11,
        profileImage: '/img/banner/img_A02_Aldgate.png',
        link: '/',
        text: 'user_name3 cancel an offer of 1,500 WEMIX$',
        date: '2022-08-11 15:32',
      },
      {
        id: 12,
        profileImage: '/img/banner/img_A02_Aldgate.png',
        link: '/',
        text: 'user_name2 outbid user_name1 with a bid of 1,500 WEMIX$',
        date: '2022-08-11 15:32',
      },
      {
        id: 13,
        profileImage: '/img/banner/img_A02_Aldgate.png',
        link: '/',
        text: 'user_name1 placed a bid of 1,200 WEMIX$',
        date: '2022-08-11 15:32',
      },
      {
        id: 14,
        profileImage: '/img/banner/img_A02_Aldgate.png',
        link: '/',
        text: 'Sales started by Nile',
        date: '2022-08-11 15:32',
      },
      {
        id: 15,
        profileImage: '/img/banner/img_A02_Aldgate.png',
        link: '/',
        text: 'Minted in the London Underground Station 264 : Genesis series',
        date: '2022-08-11 15:32',
      },
    ];

    return (
      <TabItemContainer>
        <HistoryWrapper>
          <ChartWrapper>
            <MarketHistoryLineChart />
          </ChartWrapper>
          <HistoryListWrapper>
            <HistoryTitle>Transaction History</HistoryTitle>
            <MarketHistoryList data={historyList} />
          </HistoryListWrapper>
        </HistoryWrapper>
      </TabItemContainer>
    );
  }, []);

  const nftDetailTab = [
    {
      label: 'About',
      key: 'about',
      children: About(),
    },
    {
      label: 'History',
      key: 'history',
      children: History(),
    },
  ];

  const nftRecommendList = [
    {
      id: 1,
      title: '024 Hounslow West 024 Hounslow West 024 Hounslow West',
      link: '/',
      img: '/img/banner/img_A02_Aldgate.png',
      count: 1000,
      isLike: true,
    },
    {
      id: 2,
      title: '024 Hounslow West 024 Hounslow West 024 Hounslow West',
      link: '/',
      img: '/img/banner/img_A02_Aldgate.png',
      count: 1000,
      isLike: true,
    },
    {
      id: 3,
      title: '024 Hounslow West 024 Hounslow West 024 Hounslow West',
      link: '/',
      img: '/img/banner/img_A02_Aldgate.png',
      count: 1000,
      isLike: true,
    },
    {
      id: 4,
      title: '024 Hounslow West 024 Hounslow West 024 Hounslow West',
      link: '/',
      img: '/img/banner/img_A02_Aldgate.png',
      count: 1000,
      isLike: true,
    },
  ];

  return (
    <Container>
      <MarketNftCover product={data.product} status={data.product.status} />
      <CustomTab defaultActiveKey="about" items={nftDetailTab} />
      <RecommendWrapper>
        <RecommendTitle>What other users are watching right now</RecommendTitle>
        <RecommendList>
          {nftRecommendList.map((item) => (
            <RecommendListItem key={item.id}>
              <NftFavoriteCards {...item} showCount />
            </RecommendListItem>
          ))}
        </RecommendList>
      </RecommendWrapper>
    </Container>
  );
};


const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-[40px]`,
  tw`mb-[80px]`,
  tw`md:gap-[80px]`,
]);

const TabItemContainer = styled.div([
  tw`flex`,
  tw`max-w-[1200px]`,
  tw`justify-center`,
  tw`mt-[60px]`,
  tw`mx-[20px]`,
  tw`md:mx-[40px]`,
  css`
    @media (min-width: 1280px) {
      ${tw`mx-auto`}
    }
  `,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-[40px]`,
  tw`w-full`,
  tw`lg:flex-row`,
  tw`lg:gap-[48px]`,
]);

const Content = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`w-full`,
  tw`gap-[40px]`,
]);

const Title = styled.h3([
  tw`mb-[12px]`,
  tw`text-base`,
  tw`text-black`,
]);

const Property = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-[12px]`,
  tw`md:grid`,
  tw`md:gap-[16px]`,
  tw`md:grid-cols-3`,
]);

const Item = styled.div([
  tw`flex`,
  tw`flex-col`,
]);

const RecommendWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-[16px]`,
  tw`max-w-[1200px]`,
  tw`mx-[20px]`,
  tw`md:gap-[28px]`,
  tw`md:mx-[40px]`,
  css`
    @media (min-width: 1280px) {
      ${tw`mx-auto`}
    }
  `,
]);

const RecommendTitle = styled.h3([
  tw`text-base`,
  tw`md:text-xl`,
  tw`font-bold`,
]);

const RecommendList = styled.ul([
  tw`flex`,
  tw`justify-between`,
  tw`flex-wrap`,
  tw`gap-y-[24px]`,
  tw`sm:gap-y-[20px]`,
  tw`md:gap-y-0`,
]);

const RecommendListItem = styled.li([
  `width: calc(50% - 8px)`,
  `
    @media (min-width: 361px) {
      width: calc(50% - 12px);
    }

    @media (min-width: 769px) {
      width: calc(25% - 20px);
    }

    @media (min-width: 1025px) {
      width: calc(25% - 24px);
    }
  `,
]);

const HistoryWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`w-full`,
  tw`gap-[47px]`,
  tw`md:flex-row`,
]);

const HistoryTitle = styled.h3([
  tw`font-bold`,
  tw`text-base`,
]);

const HistoryListWrapper = styled.div([
  tw`w-full`,
  tw`flex`,
  tw`flex-col`,
  tw`gap-[12px]`,
  tw`md:w-[40%]`,
]);

const ChartWrapper = styled.div([
  tw`w-full`,
  tw`md:w-[60%]`,
]);

export const getServerSideProps: GetServerSideProps = async ({
  query,
  locale,
}: GetServerSidePropsContext) => {
  const translations = await serverSideTranslations(locale ?? 'en', ['common', 'marketplace']);
  const api = NileApiService();
  const product = await api.marketplace.nft.getItem(Number(query.collectionId), Number(query.tokenId));

  return { props: { ...translations, data: { product } } };
};

export default MarketNftDetailPage;
