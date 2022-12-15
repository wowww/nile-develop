import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LanguageButton } from './index';

export default {
  title: 'Common/LanguageButton',
  component: LanguageButton,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof LanguageButton>;

const Template: ComponentStory<typeof LanguageButton> = (args) => <LanguageButton {...args} />;

export const Default = Template.bind({});
