import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NftTab } from './index';

export default {
  title: 'Mypage/Nft/Tab',
  component: NftTab,
} as ComponentMeta<typeof NftTab>;

const Template: ComponentStory<typeof NftTab> = (args) => <NftTab {...args} />;

export const Default = Template.bind({});

let currentTab = 'tab1';

Default.args = {
  currentTab,
  items: [
    {
      label: 'tab1',
      key: 'tab1',
      children: <div>tab1</div>,
    },
    {
      label: 'tab2',
      key: 'tab2',
      children: <div>tab2</div>,
    },
  ],
  onTabClick: (key) => {
    currentTab = key;
  },
}
