import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TokensDetailInfo } from './index';

export default {
  title: 'Tokens/Detail/Info',
  component: TokensDetailInfo,
} as ComponentMeta<typeof TokensDetailInfo>;

const Template: ComponentStory<typeof TokensDetailInfo> = () => <TokensDetailInfo />;

export const Default = Template.bind({});