import React  from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ModalLayout } from './index';
import { Button } from '@components';

export default {
  title: 'Common/Modal/Layout',
  component: ModalLayout,
} as ComponentMeta<typeof ModalLayout>;

const Template: ComponentStory<typeof ModalLayout> = (args) => <ModalLayout {...args} />;

export const Small = Template.bind({});

Small.args = {
  title: '결제 실패',
  children: '잔액이 부족합니다.',
  isOpen: true,
  size: 'sm',
  setIsOpen: () => {
    // TODO
  },
  footer: true,
  footerContent: [
    <Button
      className="hover:bg-gray-10"
      color="#FFF"
      background="#1A1A1A"
      fontSize="14px"
      width="100%"
      height="38px"
      borderRadius="4px"
    >확인</Button>,
  ],
};

export const Medium = Template.bind({});

Medium.args = {
  title: 'AskToJoin',
  children: 'Please connect your wallet to join this community.',
  isOpen: true,
  size: 'md',
  setIsOpen: () => {
    // TODO
  },
  footer: true,
  footerContent: [
    <Button
      className="hover:bg-gray-10"
      color="#FFF"
      background="#1A1A1A"
      fontSize="14px"
      width="160px"
      height="38px"
      borderRadius="4px"
    >OK</Button>,
  ],
};

export const Large = Template.bind({});

Large.args = {
  title: 'AskToJoin',
  children: 'Please connect your wallet to join this community.',
  isOpen: true,
  size: 'lg',
  setIsOpen: () => {
    // TODO
  },
  footer: true,
  footerContent: [
    <Button
      className="hover:bg-gray-10"
      color="#FFF"
      background="#1A1A1A"
      fontSize="14px"
      width="160px"
      height="52px"
      borderRadius="4px"
    >OK</Button>,
  ],
};