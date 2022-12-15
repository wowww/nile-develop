import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HomeStackLineChart } from './index';
import {stackChartDarkDefaultData} from "@components/home/chart/data/chartDummyData";

export default {
  title: 'Home/Chart',
  component: HomeStackLineChart,
} as ComponentMeta<typeof HomeStackLineChart>;

const Template: ComponentStory<typeof HomeStackLineChart> = (args) => <HomeStackLineChart {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: stackChartDarkDefaultData,
  category: ['Total', 'WONDER', 'PATRON', 'Top3', 'etc'],
}