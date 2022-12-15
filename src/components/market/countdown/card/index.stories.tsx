import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketCountdownCard } from './index';

export default {
  title: 'Market/Countdown/Card',
  component: MarketCountdownCard,
} as ComponentMeta<typeof MarketCountdownCard>;

const Template: ComponentStory<typeof MarketCountdownCard> = (args) => <MarketCountdownCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  expireTime: 180,
};
