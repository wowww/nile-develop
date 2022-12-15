import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CreatorProfile } from './index';

export default {
  title: 'Market/Creator/Profile',
  component: CreatorProfile,
} as ComponentMeta<typeof CreatorProfile>;

const Template: ComponentStory<typeof CreatorProfile> = (args) => <CreatorProfile {...args} />;

export const Default = Template.bind({});

Default.args = {
  creatorName: 'Zeeha & Locho',
  thumbnail: '/img/E10_Edgware-Road.webp',
  linkList: [
    {
      category: 'home',
      url: 'picdotstudio.com',
    },
    {
      category: 'twitter',
      url: 'https://twitter.com/PICDOT',
    },
    {
      category: 'instagram',
      url: 'https://www.instagram.com/picdot_studio/',
    },
  ],
};
