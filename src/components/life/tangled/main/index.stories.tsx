import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TangledTop } from "./index";

export default {
  title: 'Life/Tangled/Main',
  component: TangledTop,
} as ComponentMeta<typeof TangledTop>;

const Template: ComponentStory<typeof TangledTop> = () => <TangledTop />

export const Default = Template.bind({});