import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TokensBarChart } from './index';
import { TinyChartDefaultData } from "./data/chartDummyData";

export default {
  title: 'Tokens/Chart/BarChart',
  component: TokensBarChart,
} as ComponentMeta<typeof TokensBarChart>;

const Template: ComponentStory<typeof TokensBarChart> = (args) => <TokensBarChart {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: TinyChartDefaultData,
  isPeriod: true,
}