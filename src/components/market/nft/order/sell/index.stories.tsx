import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketNftOrderSell } from './index';

export default {
  title: 'Market/NFT/Order/Sell',
  component: MarketNftOrderSell,
} as ComponentMeta<typeof MarketNftOrderSell>;

const Template: ComponentStory<typeof MarketNftOrderSell> = (args) => <MarketNftOrderSell {...args} />;

export const Default = Template.bind({});

Default.args = {};
