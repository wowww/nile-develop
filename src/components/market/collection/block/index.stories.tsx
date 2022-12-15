import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketCollectionBlock } from './index';

export default {
  title: 'Market/Collection/Block',
  component: MarketCollectionBlock,
} as ComponentMeta<typeof MarketCollectionBlock>;

const Template: ComponentStory<typeof MarketCollectionBlock> = (args) => <MarketCollectionBlock {...args} />;

export const Default = Template.bind({});

Default.args = {};
