import React  from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ApplyBanner } from './index';

export default {
  title: 'Common/Apply',
  component: ApplyBanner,
} as ComponentMeta<typeof ApplyBanner>;

const Template: ComponentStory<typeof ApplyBanner> = (args) => <ApplyBanner {...args} />;

export const MarketPlace = Template.bind({});

MarketPlace.args = {
  location: 'marketplace',
  categoryList: [
    {
      value: 'COLLECTIBLES',
      img: '/img/banner/bg_apply_collectibles.png',
    },
    {
      value: 'MUSIC',
      img: '/img/banner/bg_apply_music.png',
    },
    {
      value: 'SPORTS',
      img: '/img/banner/bg_apply_sports.png',
    },
    {
      value: 'UTILITY',
      img: '/img/banner/bg_apply_utility.png',
    },
    {
      value: 'PHOTOGRAPHY',
      img: '/img/banner/bg_apply_photography.png',
    },
    {
      value: 'DOMAIN NAME',
      img: '/img/banner/bg_apply_domainname.png',
    },
    {
      value: 'ART',
      img: '/img/banner/bg_apply_art.png',
    },
  ],
};

export const Life = Template.bind({});

Life.args = {
  location: 'life',
  categoryList: [
    {
      value: 'COLLECTIBLES',
      img: '/img/banner/bg_apply_collectibles.png',
    },
    {
      value: 'PIXEL ART',
      img: '/img/banner/bg_apply_pixelart.png',
    },
    {
      value: 'PFP',
      img: '/img/banner/bg_apply_pfp.png',
    },
    {
      value: 'MOVE TO EARN',
      img: '/img/banner/bg_apply_movetoearn.png',
    },
    {
      value: 'PLAY TO EARN',
      img: '/img/banner/bg_apply_playtoearn.png',
    },
    {
      value: 'UTILITY',
      img: '/img/banner/bg_apply_utility.png',
    },
    {
      value: 'TALK TO EARN',
      img: '/img/banner/bg_apply_talktoearn.png',
    },
    {
      value: 'RELAX TO EARN',
      img: '/img/banner/bg_apply_relaxtoearn.png',
    },
    {
      value: 'SPORTS',
      img: '/img/banner/bg_apply_sports.png',
    },
    {
      value: 'MUSIC',
      img: '/img/banner/bg_apply_music.png',
    },
  ],
};
