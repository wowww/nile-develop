import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TangledJennis } from "./index";

export default {
  title: 'Life/Tangled/Tab/Nft/Watch/Jennis',
  component: TangledJennis,
} as ComponentMeta<typeof TangledJennis>;

const Template: ComponentStory<typeof TangledJennis> = () => <TangledJennis />

export const Default = Template.bind({});