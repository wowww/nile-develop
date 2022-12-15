import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketAuctionBiddingInput } from './index';

export default {
  title: 'Market/Auction/Bidding/Input',
  component: MarketAuctionBiddingInput,
} as ComponentMeta<typeof MarketAuctionBiddingInput>;

const Template: ComponentStory<typeof MarketAuctionBiddingInput> = (args) => <MarketAuctionBiddingInput {...args} />;

export const Default = Template.bind({
  unit: 'WEMIX $',
});
