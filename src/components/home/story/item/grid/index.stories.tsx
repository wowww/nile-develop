import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import {StoryGridItem} from './index';

export default {
  title: 'Home/Story/Item/Grid',
  component: StoryGridItem,
} as ComponentMeta<typeof StoryGridItem>;

const Template: ComponentStory<typeof StoryGridItem> = (args) => <StoryGridItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 0,
  imgPath: '/img/banner/img_A02_Aldgate.png',
  tag: 'Walk to Earn',
  title: 'Web 3.0 시대의 새로운 문화 Walk to Earn을 소개합니다.',
  content: '2021년 Crypto 시장을 뜨겁게 달군 키워드는 \'Play to Earn(P2E)\' 이었습니다. 말 그대로 \'놀면서 돈을 번다\'라는 의미로 주로 게임과 접목하여 게임을 할 수록 보상 코인이 지급되는 서비스들을 일컫었습니다. ‘ Walk to Earn’은 말 그대로 \'걸을수록 돈을 번다\'라는 의미로, 참여자들은 걸으면서 이에 해당하는 수익을 보상으로 받고, 서비스 제공자는 유저들을 대상으로 광고 또는 데이터를 수집하여 판매...',
  publishedDate: '2022-10-20',
};
