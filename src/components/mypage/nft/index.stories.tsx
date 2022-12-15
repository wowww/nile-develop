import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MypageNFTTab } from './index';

export default {
  title: 'Mypage/Tab/Nft',
  component: MypageNFTTab,
} as ComponentMeta<typeof MypageNFTTab>;

const Template: ComponentStory<typeof MypageNFTTab> = (args) => <MypageNFTTab {...args} />;

export const Default = Template.bind({});
