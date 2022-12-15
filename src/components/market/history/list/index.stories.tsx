import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketHistoryList } from './index';

export default {
  title: 'Market/History/List',
  component: MarketHistoryList,
} as ComponentMeta<typeof MarketHistoryList>;

const Template: ComponentStory<typeof MarketHistoryList> = (args) => <MarketHistoryList {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: [
    {
      id: 1,
      profileImage: '/img/banner/img_A02_Aldgate.png',
      link: '/',
      text: 'user_name6 trasferred to user_name7',
      date: '2022-08-11 15:32',
    },
    {
      id: 2,
      profileImage: '/img/banner/img_A02_Aldgate.png',
      link: '/',
      text: 'user_name5 bought with 1,600 WEMIX$',
      date: '2022-08-11 15:32',
    },
    {
      id: 3,
      profileImage: '/img/banner/img_A02_Aldgate.png',
      link: '/',
      text: 'Sales started by user_name4',
      date: '2022-08-11 15:32',
    },
    {
      id: 4,
      profileImage: '/img/banner/img_A02_Aldgate.png',
      link: '/',
      text: 'Listed by user_name4',
      date: '2022-08-11 15:32',
    },
    {
      id: 5,
      profileImage: '/img/banner/img_A02_Aldgate.png',
      link: '/',
      text: 'user_name4 bought with an offer of 2,000 WEMIX$',
      date: '2022-08-11 15:32',
    },
    {
      id: 6,
      profileImage: '/img/banner/img_A02_Aldgate.png',
      link: '/',
      text: 'user_name4’s offer of 2,000 WEMIX$ has expired',
      date: '2022-08-11 15:32',
    },
    {
      id: 7,
      profileImage: '/img/banner/img_A02_Aldgate.png',
      link: '/',
      text: 'user_name4 cancel an offer of 2,000 WEMIX$',
      date: '2022-08-11 15:32',
    },
    {
      id: 8,
      profileImage: '/img/banner/img_A02_Aldgate.png',
      link: '/',
      text: 'user_name4 made an offer of 2,000 WEMIX$',
      date: '2022-08-11 15:32',
    },
    {
      id: 9,
      profileImage: '/img/banner/img_A02_Aldgate.png',
      link: '/',
      text: 'user_name3 bought  with 1,600 WEMIX$',
      date: '2022-08-11 15:32',
    },
    {
      id: 10,
      profileImage: '/img/banner/img_A02_Aldgate.png',
      link: '/',
      text: 'user_name3 won auction with a bid of 1,600 WEMIX$',
      date: '2022-08-11 15:32',
    },
    {
      id: 11,
      profileImage: '/img/banner/img_A02_Aldgate.png',
      link: '/',
      text: 'user_name3 cancel an offer of 1,500 WEMIX$',
      date: '2022-08-11 15:32',
    },
    {
      id: 12,
      profileImage: '/img/banner/img_A02_Aldgate.png',
      link: '/',
      text: 'user_name2 outbid user_name1 with a bid of 1,500 WEMIX$',
      date: '2022-08-11 15:32',
    },
    {
      id: 13,
      profileImage: '/img/banner/img_A02_Aldgate.png',
      link: '/',
      text: 'user_name1 placed a bid of 1,200 WEMIX$',
      date: '2022-08-11 15:32',
    },
    {
      id: 14,
      profileImage: '/img/banner/img_A02_Aldgate.png',
      link: '/',
      text: 'Sales started by Nile',
      date: '2022-08-11 15:32',
    },
    {
      id: 15,
      profileImage: '/img/banner/img_A02_Aldgate.png',
      link: '/',
      text: 'Minted in the London Underground Station 264 : Genesis series',
      date: '2022-08-11 15:32',
    },
  ],
};