import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LusMainInfo } from "./index";

export default {
  title: 'Life/Lus/Main',
  component: LusMainInfo,
} as ComponentMeta<typeof LusMainInfo>;

const Template: ComponentStory<typeof LusMainInfo> = (args) => <LusMainInfo {...args} />

export const Default = Template.bind({});