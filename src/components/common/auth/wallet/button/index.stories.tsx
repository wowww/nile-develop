import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { WalletButton } from './index';

export default {
  title: 'Common/Auth/Wallet',
  component: WalletButton,
} as ComponentMeta<typeof WalletButton>;

const Template: ComponentStory<typeof WalletButton> = (args) => <WalletButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  expireTime: 180,
};
