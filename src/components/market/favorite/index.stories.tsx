import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FavoriteToggle } from './index';

export default {
  title: 'Common/Favorite/Toggle',
  component: FavoriteToggle,
} as ComponentMeta<typeof FavoriteToggle>;

const Template: ComponentStory<typeof FavoriteToggle> = (args) => <FavoriteToggle {...args} />;

export const Default = Template.bind({});

Default.args = {
  active: false,
  showCount: true,
  count: 0,
};
