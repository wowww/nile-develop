import React from 'react';

import {ComponentMeta, ComponentStory} from '@storybook/react';

import {NilePickAdditionList} from './index';
import {MarketNftItemStatusType} from "@components/market/nft/item/status";

export default {
  title: 'Home/Choice/Item/List',
  component: NilePickAdditionList,
} as ComponentMeta<typeof NilePickAdditionList>;

const Template: ComponentStory<typeof NilePickAdditionList> = (args) => <NilePickAdditionList {...args} />;

export const Default = Template.bind({});

Default.args = {
  nftId: 1,
  thumbnail: '/img/banner/img_A02_Aldgate.png',
  name: '246: Blackfriars Blackfriars station',
  status: MarketNftItemStatusType.UPCOMING,
  price: 1200,
  unit: 'WEMIX$',
}