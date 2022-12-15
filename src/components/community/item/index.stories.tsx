import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommunityListItem } from "./index";

export default {
  title: 'Community/Item',
  component: CommunityListItem,
} as ComponentMeta<typeof CommunityListItem>;

const Template: ComponentStory<typeof CommunityListItem> = (args) => <CommunityListItem {...args} />

export const Default = Template.bind({});

Default.args = {
  id: 1,
  type: 'dao',
  thumbnail: '/img/E10_Edgware-Road.webp',
  tags: ['DAO', 'Protocol DAO'],
  name: 'Wonders Members',
  desc: 'Wonders DAO 멤버를 위한 Community입니다.',
  members: [
    {
      id: 1,
      thumbnail: '/img/banner/img_A02_Aldgate.png',
      name: 'hello',
    },
    {
      id: 2,
      thumbnail: '/img/banner/img_A02_Aldgate.png',
      name: 'world',
    },
    {
      id: 3,
      thumbnail: '/img/banner/img_A02_Aldgate.png',
      name: 'pxd',
    },
    {
      id: 4,
      thumbnail: '/img/banner/img_A02_Aldgate.png',
      name: 'wemix',
    },
  ],
  latestChat: 59,
  marketCap: 1923000,
  unit: '$',
}