import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LusVideo } from "./index";

export default {
  title: 'Life/Lus/Video',
  component: LusVideo,
} as ComponentMeta<typeof LusVideo>;

const Template: ComponentStory<typeof LusVideo> = () => <LusVideo />

export const Default = Template.bind({});