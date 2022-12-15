import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketNftOfferBuy } from './index';

export default {
  title: 'Market/NFT/Offer/Buy',
  component: MarketNftOfferBuy,
} as ComponentMeta<typeof MarketNftOfferBuy>;

const Template: ComponentStory<typeof MarketNftOfferBuy> = (args) => <MarketNftOfferBuy {...args} />;

export const Default = Template.bind({});

Default.args = {};
