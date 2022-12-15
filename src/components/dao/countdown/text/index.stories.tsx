import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DaoCountdownText } from './index';

export default {
  title: 'DAO/Countdown/Text',
  component: DaoCountdownText,
} as ComponentMeta<typeof DaoCountdownText>;

const Template: ComponentStory<typeof DaoCountdownText> = (args) => <DaoCountdownText {...args} />;

export const Default = Template.bind({});

Default.args = {
  expireTime: 180,
};
