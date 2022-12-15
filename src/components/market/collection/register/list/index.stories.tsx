import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketCollectionRegisterList } from './index';

export default {
  title: 'Market/Collection/Register/List',
  component: MarketCollectionRegisterList,
} as ComponentMeta<typeof MarketCollectionRegisterList>;

const Template: ComponentStory<typeof MarketCollectionRegisterList> = (args) => <MarketCollectionRegisterList {...args} />;

export const Default = Template.bind({});

Default.args = {};
