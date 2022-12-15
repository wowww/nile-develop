import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DaoProgressbar } from './index';

export default {
  title: 'DAO/Progressbar',
  component: DaoProgressbar,
} as ComponentMeta<typeof DaoProgressbar>;

const Template: ComponentStory<typeof DaoProgressbar> = (args) => <DaoProgressbar {...args} />;

export const Default = Template.bind({});

Default.args = {
  currentValue: 50,
  goalValue: 100,
  msg: 'Our Goal',
  desc: true,
};
