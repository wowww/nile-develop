import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TokensStackLineChart } from './index';
import { stackChartDefaultData } from "./data/chartDummyData";

export default {
  title: 'Tokens/Chart/Line/Stack',
  component: TokensStackLineChart,
} as ComponentMeta<typeof TokensStackLineChart>;

const Template: ComponentStory<typeof TokensStackLineChart> = (args) => <TokensStackLineChart {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: stackChartDefaultData,
  category: ['TIPO'],
}