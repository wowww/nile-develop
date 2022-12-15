import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LifeCountdownText } from './index';

export default {
  title: 'Life/Countdown/Text',
  component: LifeCountdownText,
} as ComponentMeta<typeof LifeCountdownText>;

const Template: ComponentStory<typeof LifeCountdownText> = (args) => <LifeCountdownText {...args} />;

export const Default = Template.bind({});

Default.args = {
  expireTime: 180,
};
