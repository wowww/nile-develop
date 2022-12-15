import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketCollectionRegister } from './index';

export default {
  title: 'Market/Collection/Register',
  component: MarketCollectionRegister,
} as ComponentMeta<typeof MarketCollectionRegister>;

const Template: ComponentStory<typeof MarketCollectionRegister> = (args) => <MarketCollectionRegister {...args} />;

export const Default = Template.bind({});

Default.args = {};
