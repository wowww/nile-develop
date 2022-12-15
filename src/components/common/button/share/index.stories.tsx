import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ShareButton } from './index';

export default {
  title: 'Common/Button/Share',
  component: ShareButton,
} as ComponentMeta<typeof ShareButton>;

const Template: ComponentStory<typeof ShareButton> = () => <ShareButton />;

export const Default = Template.bind({});

Default.args = {};
