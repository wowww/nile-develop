import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RadioTabButton } from './index';

export default {
  title: 'Common/Button/RadioTab',
  component: RadioTabButton,
} as ComponentMeta<typeof RadioTabButton>;

const Template: ComponentStory<typeof RadioTabButton> = (args) => <RadioTabButton {...args} />;

export const Default = Template.bind({});

let tab = 'price';

Default.args = {
  buttonList: [
    {
      text: 'Price',
      value: 'price',
    },
    {
      text: 'Volume',
      value: 'volume',
    },
    {
      text: 'Market Cap',
      value: 'market',
    },
  ],
  currentTab: tab,
  setCurrentTab: (e) => {tab = e},
};
