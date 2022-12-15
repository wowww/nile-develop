import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketCollectionCreateWhitelist } from './index';

export default {
  title: 'Market/Collection/Create/Whitelist',
  component: MarketCollectionCreateWhitelist,
} as ComponentMeta<typeof MarketCollectionCreateWhitelist>;

const Template: ComponentStory<typeof MarketCollectionCreateWhitelist> = (args) => <MarketCollectionCreateWhitelist {...args} />;

export const Default = Template.bind({});

Default.args = {};
