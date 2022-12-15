import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LineChart } from './index';

export default {
  title: 'Common/Chart/Line',
  component: LineChart,
} as ComponentMeta<typeof LineChart>;

const Template: ComponentStory<typeof LineChart> = (args) => <LineChart {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
};
