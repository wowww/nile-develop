import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PropertyCard } from './index';

export default {
  title: 'Market/Property',
  component: PropertyCard,
} as ComponentMeta<typeof PropertyCard>;

const Template: ComponentStory<typeof PropertyCard> = (args) => <PropertyCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  propertyType: 'Station Line',
  name: 'District Line',
  rarity: '18 NFT have this trait',
};
