import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MypageNftCreated } from './index';

export default {
  title: 'Mypage/Nft/Created',
  component: MypageNftCreated,
} as ComponentMeta<typeof MypageNftCreated>;

const Template: ComponentStory<typeof MypageNftCreated> = (args) => (
  <MypageNftCreated {...args} />
);

export const Default = Template.bind({});
