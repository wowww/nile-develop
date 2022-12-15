import React  from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DaoHomeType } from './index';

export default {
  title: 'Dao/Home/Banner',
  component: DaoHomeType,
} as ComponentMeta<typeof DaoHomeType>;

const Template: ComponentStory<typeof DaoHomeType> = () => <DaoHomeType />;

export const Default = Template.bind({});
