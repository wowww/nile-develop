import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PostLink } from './index';

export default {
  title: 'Home/Story/Detail/Link',
  component: PostLink,
} as ComponentMeta<typeof PostLink>;

const Template: ComponentStory<typeof PostLink> = (args) => <PostLink {...args} />;

export const Default = Template.bind({});

Default.args = {
  url: 'https://xdraco.com',
};
