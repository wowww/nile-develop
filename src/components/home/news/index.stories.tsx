import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import {MediumNewsItem} from './index';

export default {
  title: 'Home/News/Item',
  component: MediumNewsItem,
} as ComponentMeta<typeof MediumNewsItem>;

const Template: ComponentStory<typeof MediumNewsItem> = (args) => <MediumNewsItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  link: 'https://medium.com/@remoteupskill/fetching-data-in-next-js-df880bd3afa5',
  imgPath: '/img/banner/img_A02_Aldgate.png',
  title: 'Wemade’s partner Metascale unveils BI for XR Messenger service Bagel',
  content: 'Metascale, a partner of Wemade, unveiled the XR messenger service Bagel and its brand identity (BI).',
  publishedDate: '2022-10-20',
};
