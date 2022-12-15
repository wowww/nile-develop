import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DaoCalendar } from './index';

export default {
  title: 'DAO/Calendar',
  component: DaoCalendar,
} as ComponentMeta<typeof DaoCalendar>;

const Template: ComponentStory<typeof DaoCalendar> = (args) => <DaoCalendar {...args} />;

export const Default = Template.bind({});

Default.args = {};
