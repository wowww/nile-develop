import styled from '@emotion/styled';
import tw from 'twin.macro';
import { MypageTop } from '@components/mypage/top';
import { CustomTab } from '@components/common/tab';
import * as React from 'react';
import { FC, useMemo } from 'react';
import { MypageDAOTab } from '@components/mypage/dao';
import { MypageNFTTab } from '@components/mypage/nft';
import { GetServerSideProps } from 'next';
import { NileApiService } from '@/services/nile/api';
import Nft from '@/models/nile/market/nft';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type MyPageData = {
  nftList: Nft[];
};

const MyPage: FC<{ data: MyPageData }> = ({ data }) => {
  const tabs = useMemo(
    () => [
      {
        label: 'DAO',
        key: 'dao',
        children: <MypageDAOTab />,
      },
      {
        label: 'NFT',
        key: 'nft',
        children: <MypageNFTTab nfts={data.nftList} />,
      },
    ],
    [data],
  );

  return (
    <Container>
      <MypageTop />
      <TabWrapper>
        <CustomTab defaultActiveKey="dao" items={tabs} />
      </TabWrapper>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? 'en', ['common', 'mypage']);
  const api = NileApiService();
  const nftList = await api.marketplace.nft.getList();

  return { props: { ...translations, data: { nftList } } };
};

const TabWrapper = styled.div([tw`mt-2`, tw`md:mt-6`, tw`md:mt-10`]);

const Container = styled.div([tw``]);

export default MyPage;
