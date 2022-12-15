import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketCountdownRefresh } from './index';

export default {
  title: 'Market/Countdown/Refresh',
  component: MarketCountdownRefresh,
} as ComponentMeta<typeof MarketCountdownRefresh>;

const Template: ComponentStory<typeof MarketCountdownRefresh> = (args) => <MarketCountdownRefresh {...args} />;

export const Default = Template.bind({});

Default.args = {
  expireTime: 5,
};
