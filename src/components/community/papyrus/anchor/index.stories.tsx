import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PapyrusAnchor } from './index';

export default {
  title: 'Community/Papyrus/Anchor',
  component: PapyrusAnchor,
} as ComponentMeta<typeof PapyrusAnchor>;

const Template: ComponentStory<typeof PapyrusAnchor> = () => <PapyrusAnchor />;

export const Default = Template.bind({});