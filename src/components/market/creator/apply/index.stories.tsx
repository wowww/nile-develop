import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketCreatorApply } from './index';

export default {
  title: 'Market/Creator/Apply',
  component: MarketCreatorApply,
} as ComponentMeta<typeof MarketCreatorApply>;

const Template: ComponentStory<typeof MarketCreatorApply> = (args) => <MarketCreatorApply {...args} />;

export const Default = Template.bind({});

Default.args = {
  expireTime: 180,
};
