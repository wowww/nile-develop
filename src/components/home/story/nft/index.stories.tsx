import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryViewNftCard } from './index';

export default {
  title: 'Home/Story/Detail/Nft',
  component: StoryViewNftCard,
} as ComponentMeta<typeof StoryViewNftCard>;

const Template: ComponentStory<typeof StoryViewNftCard> = () => <StoryViewNftCard />;

export const Default = Template.bind({});