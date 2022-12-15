import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DaoLottie } from './index';

export default {
  title: 'DAO/Lottie',
  component: DaoLottie,
} as ComponentMeta<typeof DaoLottie>;

const Template: ComponentStory<typeof DaoLottie> = (args) => <DaoLottie {...args} />;

export const Default = Template.bind({});

Default.args = {};
