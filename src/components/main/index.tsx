import React from 'react';
import Link from 'next/link';

import styled from '@emotion/styled';
import { css } from '@emotion/core';
import tw from 'twin.macro';

import { HomeData } from '@pages';
import IconArrow from '@/assets/icons/common/arrow/ico_arrow_16.svg';
import { NileVisual } from '@components/home/video';
import { MediumNewsItem } from '@components/home/news';
import { NilePickCard } from '@components/home/choice/item';
import { NilePickAdditionList } from '@components/home/choice/item/list';
import { Button } from '@/components';
import { useTranslation } from 'next-i18next';
import { useLayoutResize } from '@utils/layout';
import { StoryListItem } from '@components/home/story/item/list';
import { AllowCookiePopup } from '@components/home/popup';

export const Main = ({ articles, banners, curations, newsfeeds }: HomeData) => {
  const { t } = useTranslation(['nile', 'common', 'terms']);
  const { isDesktop } = useLayoutResize();
  return (
    <Container>
      <NileVisual />
      {/* <NileHomeBanner data={banners} /> */}
      <Wrapper>
        <Content>
          <Header>
            <Title>{t('home.story.title', { ns: 'nile' })}</Title>
            <Link href="/nile/story">
              <StyledLink>
                <LinkText>{t('gotoLink', { ns: 'common' })}</LinkText>
                <IconArrow />
              </StyledLink>
            </Link>
          </Header>
          <ArticleWrapper>
            {articles.map((article) => (
              <Item key={article.id}>
                <StoryListItem {...article} />
                {/* <StoryGridItem {...article} /> */}
              </Item>
            ))}
          </ArticleWrapper>
        </Content>

        <div className="mt-[60px] md:mt-[80px]">
          <Header>
            <Title>Our Choice</Title>
          </Header>
          <ChoiceCard>
            {curations.map((item) => (
              item.items ?
                <MainCard key={item.title}>
                  <NilePickCard type="card" {...item} />
                  {
                    isDesktop && (
                      <NftList>
                        {item.items.map((nft: any) => (
                          <NftListItem key={nft.nftId}>
                            <NilePickAdditionList {...nft} />
                          </NftListItem>
                        ))}
                      </NftList>
                    )
                  }
                </MainCard>
                :
                <Card key={item.title}>
                  <NilePickCard type="list" {...item} />
                </Card>
            ))}
          </ChoiceCard>
          {curations.length > 3 &&
            <ButtonWrapper>
              <Button
                className="hover:bg-gray-90"
                border="1px solid #1A1A1A"
                borderRadius="4px"
                padding="0 20px"
                height="38px"
              >
                {t('showMore', { ns: 'common' })}
                <IconArrow />
              </Button>
            </ButtonWrapper>
          }
        </div>
        <Content>
          <Header>
            <Title>{t('home.lastestNews.title', { ns: 'nile' })}</Title>
            <Link href="https://medium.com/wemix-communication" target="_blank">
              <StyledLink>
                <LinkText>{t('gotoLink', { ns: 'common' })}</LinkText>
                <IconArrow />
              </StyledLink>
            </Link>
          </Header>
          <NewsWrapper>
            {newsfeeds.map((newsfeed) => (
              <NewsItem key={newsfeed.id}>
                <MediumNewsItem {...newsfeed} />
              </NewsItem>
            ))}
          </NewsWrapper>
        </Content>
        <AllowCookiePopup />
      </Wrapper>
    </Container>
  );
};

const MainCard = styled.div([
  tw`w-full`,
]);

const ButtonWrapper = styled.div([
  tw`flex`,
  tw`w-full`,
  tw`justify-center`,
  tw`mt-10`,
]);

const Card = styled.div([
  tw`w-full`,
  `
    @media (min-width: 768px) {
      width: calc(50% - 12px);
    }

    @media (min-width: 1280px) {
      width: calc(50% - 24px);
    }
  `,
]);

const NftListItem = styled.li([
  tw`w-full`,
  tw`border-b`,
  tw`border-gray-80`,
  tw`xl:w-1/2`,
  tw`xl:border-0`,
]);

const NftList = styled.ul([
  tw`flex`,
  tw`flex-col`,
  tw`w-full`,
  tw`border-t`,
  tw`border-gray-80`,
  tw`mt-5`,
  tw`md:mt-0`,
  tw`xl:gap-12`,
  tw`xl:flex-row`,
  tw`xl:border-b`,
  tw`xl:border-t-0`,
  tw`xl:border-gray-80`,
]);

const ChoiceCard = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`justify-between`,
  tw`mt-6`,
  tw`gap-x-6`,
  tw`gap-y-10`,
  tw`md:flex-row`,
  tw`md:flex-wrap`,
  tw`xl:gap-x-12`,
]);

const NewsWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-6`,
  tw`lg:grid`,
  tw`md:grid-cols-3`,
  tw`lg:gap-[43px]`,
  tw`mt-6`,
]);

const NewsItem = styled.div([
  tw`w-full`,
  `
    @media (min-width: 768px) {

    }
  `,
]);

const Content = styled.div([
  tw`mt-[60px]`,
]);

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
]);

const Wrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`max-w-[1200px]`,
  tw`mx-auto`,
  tw`px-5`,
  tw`pb-[80px]`,
  tw`md:px-10`,
  tw`xl:px-0`,
]);

const Header = styled.div([
  tw`flex`,
  tw`justify-between`,
  tw`pb-5`,
  tw`border-b-2`,
  tw`border-black`,
]);

const LinkText = styled.span([
  tw`text-xs`,
  tw`text-gray-30`,
]);

const StyledLink = styled.div([
  tw`inline-flex`,
  tw`cursor-pointer`,
  tw`gap-1`,
  tw`items-center`,
  css`
    svg {
      ${tw`w-[12px]`}
      ${tw`h-[12px]`}
      transform: rotate(-90deg);
    }
  `,
  css`
    &:hover {
      ${LinkText} {
        text-decoration: underline;
        text-underline-offset: 0.25em;
      }
    }
  `,
]);

const Title = styled.h3([
  tw`font-bold`,
  tw`text-2xl`,
  tw`font-header`,
]);

const ArticleWrapper = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`gap-10`,
  tw`md:gap-6`,
  tw`xl:gap-12`,
  tw`pt-5`,
  tw`md:flex-row`,
]);

const Item = styled.div([
  tw`w-full`,
]);
