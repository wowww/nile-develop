import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketShareButton } from './index';

export default {
  title: 'Market/Share/Button',
  component: MarketShareButton,
} as ComponentMeta<typeof MarketShareButton>;

const Template: ComponentStory<typeof MarketShareButton> = (args) => <MarketShareButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: 'icon',
};
