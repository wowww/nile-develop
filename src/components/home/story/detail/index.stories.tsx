import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryItemDetail } from './index';

export default {
  title: 'Home/Story/Detail',
  component: StoryItemDetail,
} as ComponentMeta<typeof StoryItemDetail>;

const Template: ComponentStory<typeof StoryItemDetail> = (args) => <StoryItemDetail {...args} />;

export const Default = Template.bind({});

Default.args = {
  tag: 'Walk to Earn',
  title: 'Web 3.0 시대의 새로운 문화 Walk to Earn을 소개합니다.',
  content: '# Title\n',
  publishedDate: '2022-10-20',
};
