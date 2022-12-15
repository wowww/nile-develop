import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AllowCookiePopup } from './index';

export default {
  title: 'Home/Popup',
  component: AllowCookiePopup,
} as ComponentMeta<typeof AllowCookiePopup>;

const Template: ComponentStory<typeof AllowCookiePopup> = () => <AllowCookiePopup />;

export const Default = Template.bind({});