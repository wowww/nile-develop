import React, {useState} from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CustomTab } from './index';

export default {
  title: 'Common/Tab',
  component: CustomTab,
} as ComponentMeta<typeof CustomTab>;

const Template: ComponentStory<typeof CustomTab> = (args) => <CustomTab {...args} />;

export const Light = Template.bind({});

Light.args = {
  defaultActiveKey: 'nfts',
  items: [
    {
      label: 'nfts',
      key: 'nfts',
      children: <div />,
    },
    {
      label: 'overview',
      key: 'overview',
      children: <div />,
    },
  ],
}

export const Dark = Template.bind({});

Dark.args = {
  defaultActiveKey: 'nfts',
  items: [
    {
      label: 'nfts',
      key: 'nfts',
      children: <div />,
    },
    {
      label: 'overview',
      key: 'overview',
      children: <div />,
    },
  ],
  dark: true,
}

export const Small = Template.bind({});

Small.args = {
  defaultActiveKey: 'nfts',
  items: [
    {
      label: 'nfts',
      key: 'nfts',
      children: <div />,
    },
    {
      label: 'overview',
      key: 'overview',
      children: <div />,
    },
  ],
  md: true,
}

