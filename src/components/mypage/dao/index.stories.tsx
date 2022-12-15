import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MypageDAOTab } from './index';

export default {
  title: 'Mypage/Dao',
  component: MypageDAOTab,
} as ComponentMeta<typeof MypageDAOTab>;

const Template: ComponentStory<typeof MypageDAOTab> = () => <MypageDAOTab />;

export const Default = Template.bind({});
