import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginButton } from './index';

export default {
  title: 'Common/Auth/Login',
  component: LoginButton,
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = (args) => <LoginButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  expireTime: 180,
};
