import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketBannerTangled } from './index';

export default {
  title: 'Market/Banner/Tangled',
  component: MarketBannerTangled,
} as ComponentMeta<typeof MarketBannerTangled>;

const Template: ComponentStory<typeof MarketBannerTangled> = (args) => <MarketBannerTangled {...args} />;

export const Default = Template.bind({});

Default.args = {
  remain: 50,
};
