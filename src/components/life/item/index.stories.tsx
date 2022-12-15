import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LifeNftCard } from './index';

export default {
  title: 'Life/Item',
  component: LifeNftCard,
} as ComponentMeta<typeof LifeNftCard>;

const Template: ComponentStory<typeof LifeNftCard> = (args) => <LifeNftCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  tagText: 'Pixel Art',
  tagColor: '#1A1A1A',
  title: 'London Underground Station 264 Genesis',
  desc: '런던의 264개의 역을 NFT로 만나보세요.\n \'London Tube\'라고 더 많이 알려져 있는 London Underground는 픽셀 하나하나를 정성스레 그린 NFT로 재탄생되어 여러분들을 추억의 장소로 안내합니다.',
  buttonLink: '/',
  data: [
    {
      name: 'Total Trading Volume',
      amount: '$2,490,371',
    },
    {
      name: 'Total Transaction Count',
      amount: '$2,490,371',
    },
    {
      name: 'Floor Price',
      amount: '$12,000',
    },
  ],
  thumbnail: 'https://file.mir4global.com/nile/resources/img/bg_life_lus.png',
};