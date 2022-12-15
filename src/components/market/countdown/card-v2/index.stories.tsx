import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardBannerCountdown } from './index';

export default {
  title: 'Market/Countdown/CardV2',
  component: CardBannerCountdown,
} as ComponentMeta<typeof CardBannerCountdown>;

const Template: ComponentStory<typeof CardBannerCountdown> = (args) => <CardBannerCountdown {...args} />;

export const Default = Template.bind({});

Default.args = {
  expireTime: 180,
};
