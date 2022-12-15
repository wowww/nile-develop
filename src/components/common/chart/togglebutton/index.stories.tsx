import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ChartPeriodToggleButton } from './index';

export default {
  title: 'Common/Chart/PeriodToggle',
  component: ChartPeriodToggleButton,
} as ComponentMeta<typeof ChartPeriodToggleButton>;

const Template: ComponentStory<typeof ChartPeriodToggleButton> = (args) => <ChartPeriodToggleButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  periodType: [
    {
      value: "day",
      text: "1D",
    },
    {
      value: "week",
      text: "1W",
    },
    {
      value: "month",
      text: "1M",
    },
    {
      value: "year",
      text: "1Y",
    },
    {
      value: "all",
      text: "ALL",
    },
  ],
  setPeriod: (t: string) => console.log(t),
};
