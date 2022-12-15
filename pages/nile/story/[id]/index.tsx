import React from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';
import { StoryItemDetail } from '@components/home/story/detail';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { StoryDetailPagination } from '@components/home/story/detail/pagination';
import Image from 'next/image';
import { NileCDNLoader } from '@utils/image/loader';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NileApiService } from '@/services/nile/api';

const StoryItem = ({ data }: { data: StoryData }) => {
  const router = useRouter();
  const id = Number(router.query.id);

  return (
    <Container>
      <Head>
        <meta property="og:title" content={data.articles[0].title} />
        <meta property="og:description" content={data.articles[0].content} />
        <meta property="og:image" content={data.articles[0].imgPath} />
      </Head>
      <Banner>
        <Image
          className="absolute inset-0"
          src="/img/story_detail_banner.jpg"
          loader={NileCDNLoader}
          layout="fill"
          objectFit="cover"
        />
      </Banner>
      <Wrapper>
        <StoryItemDetail {...data.articles[0]} />
        {/* <PaginationWrapper> */}
        {/*  <StoryDetailPagination {...next} order="before" /> */}
        {/*   <StoryDetailPagination {...next} order="after" /> */}
        {/* </PaginationWrapper> */}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div([tw`w-full`]);

const Banner = styled.div([
  tw`flex`,
  tw`overflow-hidden`,
  tw`h-[200px]`,
  tw`relative`,
  tw`w-full`,
  tw`mb-[60px]`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`max-w-[1200px]`,
  tw`mx-auto`,
  tw`px-5`,
  tw`md:px-10`,
  tw`xl:px-0`,
  tw`gap-10`,
]);

const PaginationWrapper = styled.div([
  tw`border-t`,
  tw`border-gray-60`,
  tw`mb-[60px]`,
]);

export type StoryData = {
  // TODO: replace data type
  articles: any[];
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? 'en', [
    'common',
    'story',
  ]);
  const api = NileApiService();
  const articles = await api.home.article.getList();

  return { props: { ...translations, data: { articles } } };
};

export default StoryItem;
