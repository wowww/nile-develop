import React  from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MypageProfile } from './index';

export default {
  title: 'Mypage/Top/Profile',
  component: MypageProfile,
} as ComponentMeta<typeof MypageProfile>;

const Template: ComponentStory<typeof MypageProfile> = () => <MypageProfile />;

export const Default = Template.bind({});