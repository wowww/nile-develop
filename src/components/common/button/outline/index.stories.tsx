import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { OutlineButton } from './index';

export default {
  title: 'Common/Button/Outline',
  component: OutlineButton,
} as ComponentMeta<typeof OutlineButton>;

const Template: ComponentStory<typeof OutlineButton> = (args) => <OutlineButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
};
