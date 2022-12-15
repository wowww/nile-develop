import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MypageNftOwned } from './index';

export default {
  title: 'Mypage/Nft/Owned',
  component: MypageNftOwned,
} as ComponentMeta<typeof MypageNftOwned>;

const Template: ComponentStory<typeof MypageNftOwned> = (args) => <MypageNftOwned {...args} />;

export const Default = Template.bind({});
