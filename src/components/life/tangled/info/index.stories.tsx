import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TangledInformation } from "./index";

export default {
  title: 'Life/Tangled/Info',
  component: TangledInformation,
} as ComponentMeta<typeof TangledInformation>;

const Template: ComponentStory<typeof TangledInformation> = () => <TangledInformation />

export const Default = Template.bind({});