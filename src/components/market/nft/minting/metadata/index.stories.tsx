import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketNftMintingMetadata } from './index';

export default {
  title: 'Market/NFT/Minting/Metadata',
  component: MarketNftMintingMetadata,
} as ComponentMeta<typeof MarketNftMintingMetadata>;

const Template: ComponentStory<typeof MarketNftMintingMetadata> = (args) => <MarketNftMintingMetadata {...args} />;

export const Default = Template.bind({});

Default.args = {};
