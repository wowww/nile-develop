import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketMainBanner } from './index';

export default {
  title: 'Market/Banner',
  component: MarketMainBanner,
} as ComponentMeta<typeof MarketMainBanner>;

const Template: ComponentStory<typeof MarketMainBanner> = (args) => <MarketMainBanner {...args} />;

export const Default = Template.bind({});

Default.args = {
  swiperTime: 50,
};