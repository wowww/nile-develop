import styled from '@emotion/styled';
import { LifeBanner } from '@components/life/banner';
import tw from 'twin.macro';
import React from 'react';
import { LifeNftCard } from '@components/life/item';
import { LifeNextBanner } from '@components/life/banner/next';
import { ApplyBanner } from '@components/common/apply';
import { GetServerSideProps } from 'next';
import { NileApiService } from '@/services/nile/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type LifeData = {
  articles: any[];
  categories: any[];
}

const Life = ({ data }: { data: LifeData }) => {
  return (
    <Container>
      <LifeBanner />
      <Wrapper>
        <Header>
          <Title>Life NFT Projects</Title>
        </Header>
        <Content>
          {data.articles.map((article) => (
            <LifeNftCard key={article.id} {...article} />
          ))}
        </Content>
        <BannerWrapper>
          <LifeNextBanner />
        </BannerWrapper>
      </Wrapper>
      <ApplyBanner location="life" categoryList={data.categories} />
    </Container>
  );
};

const BannerWrapper = styled.div([
  tw`mt-[40px]`,
  tw`md:mt-[60px]`,
]);

const Content = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-10`,
  tw`md:gap-6`,
  tw`xl:gap-8`,
]);

const Header = styled.div([
  tw`flex`,
  tw`justify-between`,
  tw`pb-5`,
  tw`border-b-2`,
  tw`border-black`,
  tw`mb-5 md:mb-6`,
]);

const Title = styled.h3([
  tw`font-bold`,
  tw`text-2xl`,
  tw`font-header`,
]);

const Wrapper = styled.div([
  tw`max-w-[1200px]`,
  tw`mx-auto`,
  tw`px-5`,
  tw`pt-[60px]`,
  tw`pb-5 md:pb-[80px]`,
  tw`md:px-10`,
  tw`xl:px-0`,
]);

const Container = styled.div([]);

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? 'en', ['common', 'life', 'terms']);
  const api = NileApiService();
  const articles = await api.life.article.getList();
  const categories = await api.life.category.getList();

  return { props: { ...translations, data: { articles, categories } } };
};

export default Life;
