import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketOfferModal } from './index';

export default {
  title: 'Market/Offer/Modal',
  component: MarketOfferModal,
} as ComponentMeta<typeof MarketOfferModal>;

const Template: ComponentStory<typeof MarketOfferModal> = (args) => <MarketOfferModal {...args} />;

export const Default = Template.bind({});

Default.args = {
  // add here
};
