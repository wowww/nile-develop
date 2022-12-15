import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketNftItem } from './index';
import { MarketNftItemStatusType } from '@components/market/nft/item/status';

export default {
  title: 'Market/NFT/Item',
  component: MarketNftItem,
} as ComponentMeta<typeof MarketNftItem>;

const Template: ComponentStory<typeof MarketNftItem> = (args) => <MarketNftItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  image: '/img/E10_Edgware-Road.webp',
  title: '02 Hounslow WestHounslow WestHounslow WestHounslow West',
  collection: {
    id: 0,
    title: 'London Underground Station 264 Genesis',
    status: 'ON SALE',
    creator: {
      id: 0,
      name: 'Beeple',
      wallet: '0x00',
    },
  },
  owner: {
    id: 0,
    name: 'Wemix',
    wallet: '0x00',
  },
  creator: {
    id: 0,
    name: 'wemade',
    wallet: '0x00',
  },
  status: MarketNftItemStatusType.UPCOMING,
  saleStart: 300,
  participants: 3,
  viewType: 'grid',
};
