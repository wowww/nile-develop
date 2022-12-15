import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TokensDetailNegativeLineChart } from './index';
import { TinyChartDefaultData } from "./data/chartDummyData";

export default {
  title: 'Tokens/Chart/Line/Negative',
  component: TokensDetailNegativeLineChart,
} as ComponentMeta<typeof TokensDetailNegativeLineChart>;

const Template: ComponentStory<typeof TokensDetailNegativeLineChart> = (args) => <TokensDetailNegativeLineChart {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: TinyChartDefaultData,
}