import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconLogo } from './index';

export default {
  title: 'Common/Logo/Icon',
  component: IconLogo,
} as ComponentMeta<typeof IconLogo>;

const Template: ComponentStory<typeof IconLogo> = (args) => <IconLogo {...args} />;

export const Wemix = Template.bind({});

Wemix.args = {
  type: 'wemix',
  size: 40,
}

export const WemixDollar = Template.bind({});

WemixDollar.args = {
  type: 'wemix$',
  size: 40,
}