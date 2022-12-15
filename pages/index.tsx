import React from 'react';
import { GetServerSideProps } from 'next';

import { Container, Main } from '@components';
import { NileApiService } from '@/services/nile/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HomePage = ({ data }: { data: HomeData }) => {
  return (
    <Container>
      <Main {...data} />
    </Container>
  );
};

export type HomeData = {
  // TODO: replace data type
  articles: any[];
  banners: any[];
  curations: any[];
  newsfeeds: any[];
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? 'en', ['common', 'terms', 'nile']);
  const api = NileApiService();
  const articles = await api.home.article.getList();
  const banners = await api.home.banner.getList();
  const curations = await api.home.curation.getList();
  const newsfeeds = await api.home.newsfeed.getList();

  return { props: { ...translations, data: { articles, banners, curations, newsfeeds } } };
};

export default HomePage;
