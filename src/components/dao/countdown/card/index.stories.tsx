import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DaoCountdownCard } from './index';

export default {
  title: 'Dao/Countdown/Card',
  component: DaoCountdownCard,
} as ComponentMeta<typeof DaoCountdownCard>;

const Template: ComponentStory<typeof DaoCountdownCard> = (args) => <DaoCountdownCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  expireTime: 180,
};
