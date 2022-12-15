import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TokensDetailChartArea } from './index';

export default {
  title: 'Tokens/Detail/ChartArea',
  component: TokensDetailChartArea,
} as ComponentMeta<typeof TokensDetailChartArea>;

const Template: ComponentStory<typeof TokensDetailChartArea> = (args) => <TokensDetailChartArea {...args} />;

export const Default = Template.bind({});

Default.args = {
  currentTab: 'price',
}