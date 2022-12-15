import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TangledNfts } from "./index";

export default {
  title: 'Life/Tangled/Tab/Nft',
  component: TangledNfts,
} as ComponentMeta<typeof TangledNfts>;

const Template: ComponentStory<typeof TangledNfts> = () => <TangledNfts />

export const Default = Template.bind({});