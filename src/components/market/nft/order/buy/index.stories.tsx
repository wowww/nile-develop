import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketNftOrderBuy } from './index';

export default {
  title: 'Market/NFT/Order/Buy',
  component: MarketNftOrderBuy,
} as ComponentMeta<typeof MarketNftOrderBuy>;

const Template: ComponentStory<typeof MarketNftOrderBuy> = (args) => <MarketNftOrderBuy {...args} />;

export const Default = Template.bind({});

Default.args = {};
