import React  from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Empty } from './index';

export default {
  title: 'Common/Empty',
  component: Empty,
} as ComponentMeta<typeof Empty>;

const Template: ComponentStory<typeof Empty> = (args) => <Empty {...args} />;

export const EmptyFilter = Template.bind({});

EmptyFilter.args = {
  iconType: 'filter',
  subText: '조건을 만족하는 결과가 없습니다.',
};

export const EmptySearch = Template.bind({});

EmptySearch.args = {
  iconType: 'search',
  text: 'No search results',
  subText: 'There are no search results for \'asdf\'',
}