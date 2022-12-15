import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketArticle } from './index';
import { MarketNftItemStatusType } from '@components/market/nft/item/status';
import data from '@/mocks/marketplace/collections/list.json';

export default {
  title: 'Market/Article',
  component: MarketArticle,
} as ComponentMeta<typeof MarketArticle>;

const Template: ComponentStory<typeof MarketArticle> = (args) => <MarketArticle {...args} />;

export const LUS264 = Template.bind({});
const [lus264, tangled] = data;

LUS264.args = {
  title: lus264.title,
  status: lus264.status,
  data: lus264.items?.map((item) => ({ ...item, status: item.status as MarketNftItemStatusType })) ?? [],
};

export const Tangled = Template.bind({});

Tangled.args = {
  title: tangled.title,
  status: tangled.status,
  data: tangled.items?.map((item) => ({ ...item, status: item.status as MarketNftItemStatusType })) ?? [],
};
