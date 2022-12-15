import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TagData } from './index';

export default {
  title: 'Common/TagData',
  component: TagData,
} as ComponentMeta<typeof TagData>

const Template: ComponentStory<typeof TagData>= (arg) => <TagData {...arg} />

export const Default = Template.bind({});

Default.args = {
  children: 'TagData',
}
