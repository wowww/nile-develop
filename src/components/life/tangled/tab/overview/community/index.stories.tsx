import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LifeCommunityCard } from "./index";

export default {
  title: 'Life/Tangled/Tab/Overview/Community',
  component: LifeCommunityCard,
} as ComponentMeta<typeof LifeCommunityCard>;

const Template: ComponentStory<typeof LifeCommunityCard> = (args) => <LifeCommunityCard {...args} />

export const Default = Template.bind({});


Default.args = {
  data: [
    {
      image: '/images/img_life_community01.png',
      title: 'Web3 라이브 커뮤니티',
      cont: '사용자는 랜덤 라이브 채팅을 통해 새로운 사용자를 발견하고 대화할 수 있으며, 대화의 보상으로 TIME포인트를 획득할 수 있습니다.',
    },
    {
      image: '/images/img_life_community02.png',
      title: 'NFT',
      cont: '앱에서 획득한 TIME 포인트는 사용자의 시계에 저장됩니다.사용자는 인 앱에서 무료로 Basic Watch를 획득해사용하거나, NFT 마켓에서 NFT Watch를 구매해 사용할 수도 있습니다.',
    },
    {
      image: '/images/img_life_community03.png',
      title: 'TIPO',
      cont: '시계에 저장된 TIME 포인트는 앱 내 다양한 소비처에서 사용하거나, 크립토 토큰인 TIPO로 전환해 현금화 할 수 있습니다.',
    },
  ],
};