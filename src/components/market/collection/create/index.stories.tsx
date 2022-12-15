import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketCollectionCreate } from './index';

export default {
  title: 'Market/Collection/Create',
  component: MarketCollectionCreate,
} as ComponentMeta<typeof MarketCollectionCreate>;

const Template: ComponentStory<typeof MarketCollectionCreate> = (args) => <MarketCollectionCreate {...args} />;

export const Default = Template.bind({});

Default.args = {};
