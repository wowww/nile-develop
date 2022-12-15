import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MypageNftFavorites } from './index';

export default {
  title: 'Mypage/Nft/Favorites',
  component: MypageNftFavorites,
} as ComponentMeta<typeof MypageNftFavorites>;

const Template: ComponentStory<typeof MypageNftFavorites> = () => <MypageNftFavorites />;

export const Default = Template.bind({});
