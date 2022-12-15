import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DaoHomeCheckMore } from './index';

export default {
  title: 'DAO/Info',
  component: DaoHomeCheckMore,
} as ComponentMeta<typeof DaoHomeCheckMore>;

const Template: ComponentStory<typeof DaoHomeCheckMore> = () => <DaoHomeCheckMore />;

export const Default = Template.bind({});

Default.args = {};
