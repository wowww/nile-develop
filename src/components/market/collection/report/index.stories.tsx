import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketCollectionReport } from './index';

export default {
  title: 'Market/Collection/Report',
  component: MarketCollectionReport,
} as ComponentMeta<typeof MarketCollectionReport>;

const Template: ComponentStory<typeof MarketCollectionReport> = (args) => <MarketCollectionReport {...args} />;

export const Default = Template.bind({});

Default.args = {};
