import React, { FC } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { StoryListItem } from '@components/home/story/item/list';
import { StoryComingSoonBanner } from '@components/home/story/banner';
import { GetServerSideProps } from 'next';
import { NileApiService } from '@/services/nile/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export type StoryData = {
  articles: any[];
};

const StoryPage: FC<{ data: StoryData }> = ({ data }) => {
  const { t } = useTranslation(['nile']);

  return (
    <Container>
      <WrapHeader>
        <Title>{t('home.story.title', { ns: 'nile' })}</Title>
        <Description>{t('home.story.notice', { ns: 'nile' })}</Description>
      </WrapHeader>
      <WrapContent>
        <ArticleInfo>{data.articles.length} {t('home.story.unit', { ns: 'nile' })}</ArticleInfo>
        {data.articles.map((item) => (
          <StoryListItem key={item.id} {...item} />
        ))}
      </WrapContent>
      <StoryComingSoonBanner />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? 'en', ['common', 'nile']);
  const api = NileApiService();
  const articles = await api.story.article.getList();

  return { props: { ...translations, data: { articles } } };
};

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`max-w-[1200px]`,
  tw`w-full`,
  tw`mx-auto`,
  tw`pt-[40px]`,
  tw`pb-[80px]`,
  tw`px-5`,
  tw`md:px-10`,
  tw`xl:px-0`,
]);

const WrapHeader = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-3`,
  tw`pb-6`,
  tw`border-b-2`,
  tw`border-black`,
]);

const Title = styled.h2([
  tw`text-black`,
  tw`text-3xl`,
  tw`font-bold`,
  tw`font-header`,
]);

const Description = styled.p([
  tw`text-sm`,
  tw`text-gray-30`,
]);

const WrapContent = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-4`,
  tw`mt-7`,
  tw`mb-[26px]`,
]);

const ArticleInfo = styled.span([
  tw`text-base`,
  tw`text-black`,
]);

export default StoryPage;
