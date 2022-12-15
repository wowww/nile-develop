import styled from '@emotion/styled';
import { CommunityBanner } from '@components/community/banner';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import { useState } from 'react';
import { CommunityListItem } from '@components/community/item';
import { GetServerSideProps } from 'next';
import { NileApiService } from '@/services/nile/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export type CommunityData = {
  communityList: any[],
};

const CommunityPage = ({ data }: { data: CommunityData }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    console.log(page);
  };

  return (
    <Container>
      <CommunityBanner />
      <Wrapper>
        <Title>Explore Community in Papyrus</Title>
        <CommunityList>
          {data.communityList.map((item) => (
            <CommunityItem key={item.id}>
              <CommunityListItem {...item} />
            </CommunityItem>
          ))}
        </CommunityList>
      </Wrapper>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? 'en', ['common', 'community']);
  const api = NileApiService();
  const communityList = await api.community.dao.getList();

  return { props: { ...translations, data: { communityList } } };
};

const PaginationWrapper = styled.div([
  tw`w-full`,
  tw`flex`,
  tw`justify-center`,
]);

const Title = styled.h2([
  tw`text-xl`,
  tw`font-bold`,
  tw`font-header`,
  tw`mt-10`,
  tw`md:mt-[60px]`,
  tw`mb-6 md:mb-0`,
  tw`md:text-[24px] xl:text-3xl`,
  tw`pb-[28px]`,
  css`
    border-bottom: 2px solid #1a1a1a;
  `,
]);

const CommunityItem = styled.li([
  tw`xl:mb-5`,
  tw`xl:mb-0`,
  tw`py-[28px] xl:py-7`,
  tw`md:border-b`,
  tw`md:border-gray-80`,
  css`
    &:last-child {
      border: none;
    }
  `,
]);

const Wrapper = styled.div([
  tw`max-w-[1200px]`,
  tw`px-5`,
  tw`pb-[60px]`,
  tw`md:pb-[80px] xl:pb-0`,
  tw`md:px-10`,
  tw`xl:mx-auto`,
]);

const CommunityList = styled.ul([
  tw`flex`,
  tw`flex-col`,
  tw`w-full`,
  tw`gap-1 md:gap-0`,
  tw`md:mb-8`,
  tw`xl:mb-10`,
]);

const Container = styled.div([]);

export default CommunityPage;
