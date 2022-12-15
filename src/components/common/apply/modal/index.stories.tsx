import React  from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AskToJoinModal } from './index';

export default {
  title: 'Market/Apply/Modal',
  component: AskToJoinModal,
} as ComponentMeta<typeof AskToJoinModal>;

const Template: ComponentStory<typeof AskToJoinModal> = (args) => <AskToJoinModal {...args} />;

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
  setIsOpen: () => {
    // TODO
  },
};