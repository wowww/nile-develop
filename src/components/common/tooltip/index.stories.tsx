import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tooltip } from './index';

export default {
  title: 'Common/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});

Default.args = {
  tooltipText: 'Unfolding Soon',
  direction: 'top',
};
