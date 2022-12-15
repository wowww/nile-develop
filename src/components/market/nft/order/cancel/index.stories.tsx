import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketNftOrderCancel } from './index';

export default {
  title: 'Market/NFT/Order/Cancel',
  component: MarketNftOrderCancel,
} as ComponentMeta<typeof MarketNftOrderCancel>;

const Template: ComponentStory<typeof MarketNftOrderCancel> = (args) => <MarketNftOrderCancel {...args} />;

export const Default = Template.bind({});

Default.args = {};
