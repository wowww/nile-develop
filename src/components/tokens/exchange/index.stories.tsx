import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TokensExchangeListBanner } from './index';

export default {
  title: 'Tokens/Exchange',
  component: TokensExchangeListBanner,
} as ComponentMeta<typeof TokensExchangeListBanner>;

const Template: ComponentStory<typeof TokensExchangeListBanner> = () => <TokensExchangeListBanner />;

export const Default = Template.bind({});