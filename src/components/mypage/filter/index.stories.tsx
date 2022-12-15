import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyPageFilter } from './index';

export default {
  title: 'Mypage/Nft/Filter',
  component: MyPageFilter,
} as ComponentMeta<typeof MyPageFilter>;

const Template: ComponentStory<typeof MyPageFilter> = () => <MyPageFilter />;

export const Default = Template.bind({});
