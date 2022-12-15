import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MarketCollectionCreateDeploy } from './index';

export default {
  title: 'Market/Collection/Create/Deploy',
  component: MarketCollectionCreateDeploy,
} as ComponentMeta<typeof MarketCollectionCreateDeploy>;

const Template: ComponentStory<typeof MarketCollectionCreateDeploy> = (args) => <MarketCollectionCreateDeploy {...args} />;

export const Default = Template.bind({});

Default.args = {};
