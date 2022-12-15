import React, { FC } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Tabs } from 'antd';
import { MarketMainBanner } from '@components/market/banner';
import { ApplyBanner } from '@components/common/apply';
import { GetServerSideProps } from 'next';
import { NileApiService } from '@/services/nile/api';
import { MarketCollectionSection } from '@components/market/collection';
import { MarketNftSection } from '@components/market/nft';
import { useRecoilState } from 'recoil';
import { MarketCurrentTab } from '@recoil/atoms/market';
import Collection from '@/models/nile/market/collection';
import Nft from '@/models/nile/market/nft';
import { css } from '@emotion/core';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type MarketplaceData = {
  categories: any[];
  collections: Collection[];
  nftList: Nft[];
};

const MarketplacePage: FC<{ data: MarketplaceData }> = ({ data }) => {
  const [currentTab, setCurrentTab] = useRecoilState(MarketCurrentTab);

  return (
    <Container>
      <MarketMainBanner />
      <Tabs
        className="tab-type tab-lg tab-full"
        activeKey={currentTab}
        onChange={(key) => setCurrentTab(key)}
        items={[
          {
            label: 'Collection',
            key: 'collection',
            children: <MarketCollectionSection collections={data.collections} />,
          },
          {
            label: 'NFT',
            key: 'nft',
            children: <MarketNftSection items={data.nftList} />,
            disabled: true,
          },
        ]}
      />
      <ApplyBanner location="marketplace" categoryList={data.categories} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? 'en', ['common', 'marketplace']);
  const api = NileApiService();
  const categories = await api.marketplace.category.getList();
  const collections = await api.marketplace.collection.getList();
  const nftList = await api.marketplace.nft.getList();

  return { props: { ...translations, data: { categories, collections, nftList } } };
};

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  css`
    & > .ant-tabs {
      position: relative;
      z-index: 10;

      .ant-tabs-tab-disabled {
        .ant-tabs-tab-btn {
          display: flex;
          align-items: center;
          justify-content: center;

          ${tw`text-gray-60`}
          &:active {
            ${tw`text-gray-60`}
          }

          &::after {
            padding: 4px 8px;
            margin-left: 10px;
            border-radius: 2px;
            white-space: nowrap;
            ${tw`bg-gray-20`}
            ${tw`text-white`}
            ${tw`text-xs`}
            content: "Unfolding Soon";
          }
        }
      }
    }
  `,
]);

export default MarketplacePage;

