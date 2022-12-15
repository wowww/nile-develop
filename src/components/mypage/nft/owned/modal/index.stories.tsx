import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyPageNftAlbumModal } from './index';

export default {
  title: 'Mypage/Nft/Owned/Modal',
  component: MyPageNftAlbumModal,
} as ComponentMeta<typeof MyPageNftAlbumModal>;

const Template: ComponentStory<typeof MyPageNftAlbumModal> = (args) => <MyPageNftAlbumModal {...args} />;

export const Default = Template.bind({});
