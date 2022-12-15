import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TokensDetailFilledLineChart } from './index';
import { stackChartDefaultData } from "./data/chartDummyData";

export default {
  title: 'Tokens/Chart/Line/Fill',
  component: TokensDetailFilledLineChart,
} as ComponentMeta<typeof TokensDetailFilledLineChart>;

const Template: ComponentStory<typeof TokensDetailFilledLineChart> = (args) => <TokensDetailFilledLineChart {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: stackChartDefaultData,
}