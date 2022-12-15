import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PapyrusBanner } from './index';

export default {
  title: 'Community/Papyrus/Banner',
  component: PapyrusBanner,
} as ComponentMeta<typeof PapyrusBanner>;

const Template: ComponentStory<typeof PapyrusBanner> = () => <PapyrusBanner />;

export const Default = Template.bind({});