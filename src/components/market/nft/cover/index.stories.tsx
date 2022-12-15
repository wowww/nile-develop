import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketNftCover } from './index';
import { MarketNftItemStatusType } from '@components/market/nft/item/status';

export default {
  title: 'Market/NFT/Cover',
  component: MarketNftCover,
} as ComponentMeta<typeof MarketNftCover>;

const Template: ComponentStory<typeof MarketNftCover> = (args) => <MarketNftCover {...args} />;

export const Default = Template.bind({});

Default.args = {
  product: {
    id: 0,
    price: 30,
    status: MarketNftItemStatusType.LISTING,
    image: 'https://file.mir4global.com/nile/resources/img/E10_Edgware-Road.webp',
    title: '02 Hounslow WestHounslow WestHounslow WestHounslow West',
    favorite: false,
    participants: 3,
    saleStart: 382,
    collection: {
      id: 0,
      address: '0x00',
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
  },
  status: MarketNftItemStatusType.UPCOMING,
};
