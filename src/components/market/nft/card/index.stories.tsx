import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NftFavoriteCards } from './index';

export default {
  title: 'Market/NFT/Card',
  component: NftFavoriteCards,
} as ComponentMeta<typeof NftFavoriteCards>;

const Template: ComponentStory<typeof NftFavoriteCards> = (args) => <NftFavoriteCards {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: '024 Hounslow West 024 Hounslow West 024 Hounslow West',
  link: '/',
  img: '/img/banner/img_A02_Aldgate.png',
  count: 1000,
  isLike: true,
};
