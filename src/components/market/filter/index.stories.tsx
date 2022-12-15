import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketFilter } from './index';

export default {
  title: 'Market/Filter',
  component: MarketFilter,
} as ComponentMeta<typeof MarketFilter>;

const Template: ComponentStory<typeof MarketFilter> = (args) => <MarketFilter {...args} />;

export const Default = Template.bind({});

Default.args = {};
