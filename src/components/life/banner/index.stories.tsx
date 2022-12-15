import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LifeBanner } from './index';

export default {
  title: 'Life/Banner/Main',
  component: LifeBanner,
} as ComponentMeta<typeof LifeBanner>;

const Template: ComponentStory<typeof LifeBanner> = () => <LifeBanner />;

export const Default = Template.bind({});