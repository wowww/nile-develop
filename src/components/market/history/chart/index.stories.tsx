import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketHistoryLineChart } from './index';

export default {
  title: 'Market/History/Chart',
  component: MarketHistoryLineChart,
} as ComponentMeta<typeof MarketHistoryLineChart>;

const Template: ComponentStory<typeof MarketHistoryLineChart> = () => <MarketHistoryLineChart />;

export const Default = Template.bind({});