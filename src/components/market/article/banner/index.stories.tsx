import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketArticleBanner } from './index';

export default {
  title: 'Market/Article/Banner',
  component: MarketArticleBanner,
} as ComponentMeta<typeof MarketArticleBanner>;

const Template: ComponentStory<typeof MarketArticleBanner> = (args) => <MarketArticleBanner {...args} />;

export const LUS264 = Template.bind({});

LUS264.args = {
  status: 'ON SALE',
  title: 'London Underground Station 264 Genesis',
  background: 'https://file.mir4global.com/nile/resources/img/bg_market_collection_lus.png',
  buttonInfo: [
    {
      text: 'View NFT',
      link: '/',
    },
    {
      text: 'View Collection Info',
      link: '/',
    },
  ],
};

export const Tangled = Template.bind({});

Tangled.args = {
  status: 'ON SALE',
  title: 'Tangled Timepieces',
  background: 'https://file.mir4global.com/nile/resources/img/bg_market_collection_tangled.png',
  buttonInfo: [
    {
      text: 'View NFT',
      link: '/',
    },
    {
      text: 'View Collection Info',
      link: '/',
    },
  ],
};
