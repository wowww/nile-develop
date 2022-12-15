import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import {NilePickCard} from './index';

export default {
  title: 'Home/Choice/Item',
  component: NilePickCard,
} as ComponentMeta<typeof NilePickCard>;

const Template: ComponentStory<typeof NilePickCard> = (args) => <NilePickCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: 'card',
  category: 'NFT',
  title: 'LUS Colleciton 264 : Nile에서 엄선한 첫 번째 Collectible Art Auction',
  content: '‘London Tube’라고 더 많이 알려져 있는 London Underground는 수많은 ‘Londoners’와 여행객이 이용하는 교통수단이자, 그들을 추억의 장소로 연결해 주는 통로입니다.',
  thumbnail: '/img/banner/img_A02_Aldgate.png',
  buttonList: [
    {
      link: '/',
      value: 'Look Project',
    },
    {
      link: '/',
      value: 'Go Marketplace',
    },
  ],
}