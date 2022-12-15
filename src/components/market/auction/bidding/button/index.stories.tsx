import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketAuctionBiddingButton } from './index';

export default {
  title: 'Market/Auction/Bidding/Button',
  component: MarketAuctionBiddingButton,
} as ComponentMeta<typeof MarketAuctionBiddingButton>;

const Template: ComponentStory<typeof MarketAuctionBiddingButton> = (args) => <MarketAuctionBiddingButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  price: 1,
};
