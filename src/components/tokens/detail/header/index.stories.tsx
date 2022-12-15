import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TokensDetailHeader } from './index';

export default {
  title: 'Tokens/Detail/Header',
  component: TokensDetailHeader,
} as ComponentMeta<typeof TokensDetailHeader>;

const Template: ComponentStory<typeof TokensDetailHeader> = () => <TokensDetailHeader />;

export const Default = Template.bind({});