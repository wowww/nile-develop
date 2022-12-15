import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AccountButton } from './index';

export default {
  title: 'Common/Auth/Account',
  component: AccountButton,
} as ComponentMeta<typeof AccountButton>;

const Template: ComponentStory<typeof AccountButton> = (args) => <AccountButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  expireTime: 180,
};
