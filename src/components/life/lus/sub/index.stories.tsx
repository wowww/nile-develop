import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LusOverview } from "./index";

export default {
  title: 'Life/Lus/Overview',
  component: LusOverview,
} as ComponentMeta<typeof LusOverview>;

const Template: ComponentStory<typeof LusOverview> = () => <LusOverview />

export const Default = Template.bind({});