import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketNftList } from './index';
import { MarketNftItemStatusType } from '@components/market/nft/item/status';
import data from '@/mocks/marketplace/nft/list.json';

export default {
  title: 'Market/NFT/List',
  component: MarketNftList,
} as ComponentMeta<typeof MarketNftList>;

const Template: ComponentStory<typeof MarketNftList> = (args) => <MarketNftList {...args} />;

export const Default = Template.bind({});

Default.args = {
  viewType: 'list',
  data: data.map((item) => ({ ...item, status: item.status as MarketNftItemStatusType })),
};
