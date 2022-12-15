import React, {useState} from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CustomPagination } from './index';

export default {
  title: 'Common/Pagination',
  component: CustomPagination,
} as ComponentMeta<typeof CustomPagination>;

const Template: ComponentStory<typeof CustomPagination> = (args) => <CustomPagination {...args} />;

export const Default = Template.bind({});

Default.args = {
  activate: 1,
  defaultCurrent: 1,
  defaultPageSize: 10,
  total: 500,
  onChange: () => {
    //
  },
}