import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketNftOfferSell } from './index';

export default {
  title: 'Market/NFT/Offer/Sell',
  component: MarketNftOfferSell,
} as ComponentMeta<typeof MarketNftOfferSell>;

const Template: ComponentStory<typeof MarketNftOfferSell> = (args) => <MarketNftOfferSell {...args} />;

export const Default = Template.bind({});

Default.args = {};
