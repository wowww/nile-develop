import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TokensTinyLineChart } from './index';
import { TinyChartDefaultData } from "./data/chartDummyData";

export default {
  title: 'Tokens/Chart/Line/Tiny',
  component: TokensTinyLineChart,
} as ComponentMeta<typeof TokensTinyLineChart>;

const Template: ComponentStory<typeof TokensTinyLineChart> = (args) => <TokensTinyLineChart {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: TinyChartDefaultData,
}