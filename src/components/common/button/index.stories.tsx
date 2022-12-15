import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './index';

export default {
  title: 'Common/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
};

export const BgBlack = Template.bind({});

BgBlack.args = {
  className: 'hover:bg-gray-10',
  bg: 'black',
  color: 'white',
  children: 'Black',
  borderRadius: '4px',
  size: '16px',
  width: '160px',
  height: '32px',
  onClick: () => {
    console.log("button click!!!")
  },
};

export const BgWhite = Template.bind({});

BgWhite.args = {
  className: 'hover:bg-gray-80',
  bg: 'white',
  color: 'black',
  children: 'White',
  borderRadius: '4px',
  size: '16px',
  width: '160px',
  height: '32px',
};

export const OutlineBlack = Template.bind({});

OutlineBlack.args = {
  className: 'hover:bg-gray-90',
  bg: 'transparent',
  color: 'black',
  children: 'Outline Black',
  border: 'solid 1px black',
  borderRadius: '4px',
  size: '16px',
  width: '160px',
  height: '32px',
};

export const OutlineWhite = Template.bind({});

OutlineWhite.args = {
  className: 'hover:bg-[#FFFFFF20]',
  bg: 'transparent',
  color: 'white',
  children: 'Outline White',
  border: 'solid 1px white',
  borderRadius: '4px',
  size: '16px',
  width: '160px',
  height: '32px',
};

