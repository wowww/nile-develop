import React  from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MypageTop } from './index';

export default {
  title: 'Mypage/Top',
  component: MypageTop,
} as ComponentMeta<typeof MypageTop>;

const Template: ComponentStory<typeof MypageTop> = () => <MypageTop />;

export const Default = Template.bind({});