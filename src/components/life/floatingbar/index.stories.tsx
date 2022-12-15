import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LifeFloatingBar } from "./index";

export default {
  title: 'Life/FloatingBar',
  component: LifeFloatingBar,
} as ComponentMeta<typeof LifeFloatingBar>;

const Template: ComponentStory<typeof LifeFloatingBar> = (args) => <LifeFloatingBar {...args} />

export const UpcomingAuction = Template.bind({});

UpcomingAuction.args = {
  status: 'upcoming',
  sellType: 'auction',
  downloadLink: '/',
  nftLink: '/',
  tokensLink: '/',
}

export const UpcomingFixed = Template.bind({});

UpcomingFixed.args = {
  status: 'upcoming',
  sellType: 'fixed',
  downloadLink: '/',
  nftLink: '/',
  tokensLink: '/',
}

export const BuyNowAuction = Template.bind({});

BuyNowAuction.args = {
  status: 'buy-now',
  sellType: 'auction',
  downloadLink: '/',
  nftLink: '/',
}

export const BuyNowFixedSame = Template.bind({});

BuyNowFixedSame.args = {
  status: 'buy-now',
  sellType: 'fixed',
  downloadLink: '/',
  nftLink: '/',
  samePrice: true,
}

export const BuyNowFixedNotSame = Template.bind({});

BuyNowFixedNotSame.args = {
  status: 'buy-now',
  sellType: 'fixed',
  downloadLink: '/',
  nftLink: '/',
  samePrice: false,
}

export const BuyNowRaffleSame = Template.bind({});

BuyNowRaffleSame.args = {
  status: 'buy-now',
  sellType: 'raffle',
  downloadLink: '/',
  nftLink: '/',
  samePrice: true,
}

export const BuyNowRaffleNotSame = Template.bind({});

BuyNowRaffleNotSame.args = {
  status: 'buy-now',
  sellType: 'raffle',
  downloadLink: '/',
  nftLink: '/',
  samePrice: false,
}