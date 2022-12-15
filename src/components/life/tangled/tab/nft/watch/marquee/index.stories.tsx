import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TangledMarquee } from "./index";

export default {
  title: 'Life/Tangled/Tab/Nft/Watch/Marquee',
  component: TangledMarquee,
} as ComponentMeta<typeof TangledMarquee>;

const Template: ComponentStory<typeof TangledMarquee> = (args) => <TangledMarquee {...args} />

export const Default = Template.bind({});

Default.args = {
  itemLength: 11,
  type: "highend",
}