import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DaoNeithComponents } from './index';

export default {
  title: 'DAO/Neith/Components',
  component: DaoNeithComponents,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof DaoNeithComponents>;

const Template: ComponentStory<typeof DaoNeithComponents> = (args) => <DaoNeithComponents {...args} />;

export const Default = Template.bind({});
