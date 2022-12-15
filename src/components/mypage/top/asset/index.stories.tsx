import React  from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MypageAsset } from './index';

export default {
  title: 'Mypage/Top/Asset',
  component: MypageAsset,
} as ComponentMeta<typeof MypageAsset>;

const Template: ComponentStory<typeof MypageAsset> = () => <MypageAsset />;

export const Default = Template.bind({});