import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketCollectionRegisterWhitelist } from './index';

export default {
  title: 'Market/Collection/Register/Whitelist',
  component: MarketCollectionRegisterWhitelist,
} as ComponentMeta<typeof MarketCollectionRegisterWhitelist>;

const Template: ComponentStory<typeof MarketCollectionRegisterWhitelist> = (args) => <MarketCollectionRegisterWhitelist {...args} />;

export const Default = Template.bind({});

Default.args = {};
