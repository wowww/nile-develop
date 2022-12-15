import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tag } from './index';

export default {
  title: 'Common/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'walk to Earn',
  border: 'solid 1px black',
};
