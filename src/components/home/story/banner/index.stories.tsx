import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryComingSoonBanner } from './index';

export default {
  title: 'Home/Story/Banner',
  component: StoryComingSoonBanner,
} as ComponentMeta<typeof StoryComingSoonBanner>;

const Template: ComponentStory<typeof StoryComingSoonBanner> = (args) => <StoryComingSoonBanner {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'What\'s Next?',
  desc: '스토리에 올라올 다음 아티클을 기대하세요',
  thumbnail: 'https://file.mir4global.com/nile/resources/img/bg_market_collection_lus.png',
}