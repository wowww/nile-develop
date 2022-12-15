import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TokensWemixPriceBanner } from './index';

export default {
  title: 'Tokens/Banner',
  component: TokensWemixPriceBanner,
} as ComponentMeta<typeof TokensWemixPriceBanner>;

const Template: ComponentStory<typeof TokensWemixPriceBanner> = (args) => <TokensWemixPriceBanner {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: [],
}