import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TokensDetailPriceBoard } from './index';

export default {
  title: 'Tokens/Detail/Board',
  component: TokensDetailPriceBoard,
} as ComponentMeta<typeof TokensDetailPriceBoard>;

const Template: ComponentStory<typeof TokensDetailPriceBoard> = () => <TokensDetailPriceBoard />;

export const Default = Template.bind({});