import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NileVisual } from './index';

export default {
  title: 'Home/Video',
  component: NileVisual,
} as ComponentMeta<typeof NileVisual>;

const Template: ComponentStory<typeof NileVisual> = () => <NileVisual />;

export const Default = Template.bind({});