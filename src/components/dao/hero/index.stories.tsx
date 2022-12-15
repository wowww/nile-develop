import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DaoHomeHero } from './index';

export default {
  title: 'DAO/HomeHero',
  component: DaoHomeHero,
} as ComponentMeta<typeof DaoHomeHero>;

const Template: ComponentStory<typeof DaoHomeHero> = () => <DaoHomeHero />;

export const Default = Template.bind({});

Default.args = {};
