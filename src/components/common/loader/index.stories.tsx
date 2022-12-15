import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InfiniteLoader } from './index';

export default {
  title: 'Common/Loader',
  component: InfiniteLoader,
} as ComponentMeta<typeof InfiniteLoader>;

const Template: ComponentStory<typeof InfiniteLoader> = () => <InfiniteLoader />;

export const Default = Template.bind({});