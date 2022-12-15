import { LifeCommunityCard } from '@components/life/tangled/tab/overview/community';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { LifeTheTeam } from '@components/life/tangled/tab/overview/team';
import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';

export const TangledOverview = () => {
  const { t } = useTranslation(['life']);
  const cardNewsData = useMemo(() => ([
    {
      image: '/public/images/img_life_community01.png',
      title: t('tangled.overview.community.title', { ns: 'life' }),
      cont: t('tangled.overview.community.desc', { ns: 'life' }),
    },
    {
      image: '/public/images/img_life_community02.png',
      title: t('tangled.overview.community2.title', { ns: 'life' }),
      cont: t('tangled.overview.community2.desc', { ns: 'life' }),
    },
    {
      image: '/public/images/img_life_community03.png',
      title: t('tangled.overview.community3.title', { ns: 'life' }),
      cont: t('tangled.overview.community3.desc', { ns: 'life' }),
    },
  ]), [t]);

  return (
    <Container>
      <Content>
        <CardTitle>{t('tangled.overview.title')}</CardTitle>
        <LifeCommunityCard data={cardNewsData} />
      </Content>
      <Content>
        <TeamTitle>{t('tangled.overview.theTeam.title')}</TeamTitle>
        <LifeTheTeam />
      </Content>
    </Container>
  );
};

const Content = styled.div([
  tw`flex`,
  tw`flex-col`,
]);

const TeamTitle = styled.strong([
  tw`block`,
  tw`text-white`,
  tw`text-center`,
  tw`font-bold`,
  tw`text-2xl`,
  tw`leading-[28px]`,
  tw`md:text-[40px]`,
  tw`md:leading-[1.2]`,
]);

const CardTitle = styled.strong([
  tw`text-xl`,
  tw`leading-[1.2]`,
  tw`max-w-[600px]`,
  tw`mx-auto`,
  tw`font-bold`,
  tw`block`,
  tw`text-white`,
  tw`text-center`,
  tw`md:text-[32px]`,
  tw`md:leading-[1.25]`,
  tw`xl:text-xl`,
  tw`xl:leading-[1.2]`,
]);

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  tw`w-full`,
  tw`pt-[60px]`,
  tw`px-5`,
  tw`gap-[80px]`,
  tw`md:gap-[100px]`,
  tw`md:pt-[60px]`,
  tw`md:px-6`,
  tw`xl:gap-[120px]`,
  tw`xl:w-[1040px]`,
  tw`xl:pt-[100px]`,
  tw`xl:mx-auto`,
]);
