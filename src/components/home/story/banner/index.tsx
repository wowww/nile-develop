import React from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useTranslation } from 'next-i18next';

export type StoryComingSoonBanner = {
  // nothing
};

export const StoryComingSoonBanner = (props: StoryComingSoonBanner) => {
  const { t } = useTranslation(['nile']);

  return (
    <Container>
      <Title>What’s Next?</Title>
      <Description>{t('home.story.next', { ns: 'nile' })}</Description>
    </Container>
  );
};

StoryComingSoonBanner.defaultProps = {
  desc: '',
  thumbnail: '',
};

const Container = styled.div([
  tw`flex`,
  tw`flex-col`,
  `padding: 41px 0 43px`,
  tw`items-center`,
  tw`border`,
  tw`border-black`,
  tw`rounded`,
  tw`gap-1`,
]);

const Title = styled.h3([
  tw`font-bold`,
  tw`font-header`,
  tw`text-[40px]`,
]);

const Description = styled.span([
  tw`text-base`,
]);
