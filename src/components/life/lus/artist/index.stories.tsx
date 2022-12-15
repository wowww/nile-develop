import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LusArtistInfo } from "./index";

export default {
  title: 'Life/Lus/Artist',
  component: LusArtistInfo,
} as ComponentMeta<typeof LusArtistInfo>;

const Template: ComponentStory<typeof LusArtistInfo> = () => <LusArtistInfo />

export const Default = Template.bind({});