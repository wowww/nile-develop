import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketNftMinting } from './index';

export default {
  title: 'Market/NFT/Minting',
  component: MarketNftMinting,
} as ComponentMeta<typeof MarketNftMinting>;

const Template: ComponentStory<typeof MarketNftMinting> = (args) => <MarketNftMinting {...args} />;

export const Default = Template.bind({});

Default.args = {};
