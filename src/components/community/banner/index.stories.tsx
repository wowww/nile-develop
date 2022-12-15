import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommunityBanner } from "./index";

export default {
  title: 'Community/Banner',
  component: CommunityBanner,
} as ComponentMeta<typeof CommunityBanner>;

const Template: ComponentStory<typeof CommunityBanner> = () => <CommunityBanner />

export const Default = Template.bind({});