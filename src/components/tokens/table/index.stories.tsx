import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TokensTable } from './index';

export default {
  title: 'Tokens/Table',
  component: TokensTable,
} as ComponentMeta<typeof TokensTable>;

const Template: ComponentStory<typeof TokensTable> = (args) => <TokensTable {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: [
    {
      key: 1,
      name: 'Wrapped BNB',
      shortenName: 'klaytn',
      price: 237.53,
      price24h: 213.24,
      volume7d: 125.37,
      marketCap: 160.89,
    },
    {
      key: 2,
      name: 'Wrapped BNB',
      shortenName: 'klaytn',
      price: 237.53,
      price24h: 213.24,
      volume7d: 125.37,
      marketCap: 160.89,
    },
  ],
}