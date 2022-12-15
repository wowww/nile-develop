import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketCollectionRegisterStrategy } from './index';

export default {
  title: 'Market/Collection/Register/Strategy',
  component: MarketCollectionRegisterStrategy,
} as ComponentMeta<typeof MarketCollectionRegisterStrategy>;

const Template: ComponentStory<typeof MarketCollectionRegisterStrategy> = (args) => <MarketCollectionRegisterStrategy {...args} />;

export const Default = Template.bind({});

Default.args = {};
