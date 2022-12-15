import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LifeNextBanner } from './index';

export default {
  title: 'Life/Banner/Next',
  component: LifeNextBanner,
} as ComponentMeta<typeof LifeNextBanner>;

const Template: ComponentStory<typeof LifeNextBanner> = () => <LifeNextBanner />;

export const Default = Template.bind({});