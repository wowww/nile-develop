import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketBannerLus264 } from './index';

export default {
  title: 'Market/Banner/Lus264',
  component: MarketBannerLus264,
} as ComponentMeta<typeof MarketBannerLus264>;

const Template: ComponentStory<typeof MarketBannerLus264> = (args) => <MarketBannerLus264 {...args} />;

export const Default = Template.bind({});

Default.args = {
  remain: 50,
};
