import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MypageNftActivity } from './index';

export default {
  title: 'Mypage/Nft/Activity',
  component: MypageNftActivity,
} as ComponentMeta<typeof MypageNftActivity>;

const Template: ComponentStory<typeof MypageNftActivity> = () => <MypageNftActivity />;

export const Default = Template.bind({});
