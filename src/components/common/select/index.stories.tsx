import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CustomSelect } from './index';

export default {
  title: 'Common/Select',
  component: CustomSelect,
} as ComponentMeta<typeof CustomSelect>;

const Template: ComponentStory<typeof CustomSelect> = (args) => (
  <CustomSelect {...args} />
);

export const Small = Template.bind({});

Small.args = {
  size: 'small',
  options: [
    {
      value: '1day',
      text: '1 Day',
    },
    {
      value: '1week',
      text: '1 Week',
    },
    {
      value: '1month',
      text: '1 Month',
    },
    {
      value: 'all',
      text: 'All',
    },
  ],
  defaultValue: '1week',
  onChange: (value) => {
    //
  },
};

export const Medium = Template.bind({});

Medium.args = {
  size: 'middle',
  options: [
    {
      value: '1day',
      text: '1 Day',
    },
    {
      value: '1week',
      text: '1 Week',
    },
    {
      value: '1month',
      text: '1 Month',
    },
    {
      value: 'all',
      text: 'All',
    },
  ],
  defaultValue: '1week',
  onChange: (value) => {
    //
  },
};

export const Large = Template.bind({});

Large.args = {
  size: 'large',
  options: [
    {
      value: '1day',
      text: '1 Day',
    },
    {
      value: '1week',
      text: '1 Week',
    },
    {
      value: '1month',
      text: '1 Month',
    },
    {
      value: 'all',
      text: 'All',
    },
  ],
  defaultValue: '1week',
  onChange: (value) => {
    //
  },
};
