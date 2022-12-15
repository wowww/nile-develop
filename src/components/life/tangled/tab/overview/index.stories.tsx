import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TangledOverview } from "./index";

export default {
  title: 'Life/Tangled/Tab/Overview',
  component: TangledOverview,
} as ComponentMeta<typeof TangledOverview>;

const Template: ComponentStory<typeof TangledOverview> = () => <TangledOverview />

export const Default = Template.bind({});