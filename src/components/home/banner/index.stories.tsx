import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NileHomeBanner } from './index';

export default {
  title: 'Home/Banner',
  component: NileHomeBanner,
} as ComponentMeta<typeof NileHomeBanner>;

const Template: ComponentStory<typeof NileHomeBanner> = (args) => <NileHomeBanner {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: [
    {
      name: 'Total Market Cap',
      figure: 8865700,
      unit: '$',
    },
    {
      name: 'Total NFT Trading Volume',
      figure: 8865700,
      unit: '$',
    },
    {
      name: 'Total Transaction Count',
      figure: 7965309,
      unit: '',
    },
    {
      name: 'Total Members',
      figure: 8865700,
      unit: '',
    },
  ],
};