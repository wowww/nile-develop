import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyPageOwnedListItem } from './index';

export default {
  title: 'Mypage/Nft/Owned/Item',
  component: MyPageOwnedListItem,
} as ComponentMeta<typeof MyPageOwnedListItem>;

const Template: ComponentStory<typeof MyPageOwnedListItem> = (args) => <MyPageOwnedListItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: '01 Hounslow West',
  thumbnail: '/img/banner/img_A02_Aldgate.png',
  isMine: false,
}
