import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryDetailPagination } from './index';

export default {
  title: 'Home/Story/Detail/Pagination',
  component: StoryDetailPagination,
} as ComponentMeta<typeof StoryDetailPagination>;

const Template: ComponentStory<typeof StoryDetailPagination> = (args) => <StoryDetailPagination {...args} />;

export const Default = Template.bind({});

Default.args = {
  articleId: 1,
  order: "before",
  thumbnail: '/img/banner/img_A02_Aldgate.png',
  title: 'DAO의 진화',
  content: '2022년 위메이드는 블록체인 사업 전반과 토크노믹스 기반 경제에 대한 사업적 비전, 위믹스 코인을 소개했다. 위메이드는 중동에 지점을 오픈하고 글로벌 블록체인 사업을 확장하고 있다.중동은 디지털 자산, 블록체인 기술 등에 대한 큰 성...',
}