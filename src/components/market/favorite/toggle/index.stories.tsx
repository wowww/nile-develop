import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketFavoriteToggle } from './index';

export default {
  title: 'Market/Favorite/Toggle',
  component: MarketFavoriteToggle,
} as ComponentMeta<typeof MarketFavoriteToggle>;

const Template: ComponentStory<typeof MarketFavoriteToggle> = (args) => <MarketFavoriteToggle {...args} />;

export const Default = Template.bind({});

Default.args = {
  active: false,
  showCount: true,
  count: 0,
};
