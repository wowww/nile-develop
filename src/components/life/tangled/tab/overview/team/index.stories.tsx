import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import {LifeTheTeam} from "./index";

export default {
  title: 'Life/Tangled/Tab/Overview/Team',
  component: LifeTheTeam,
} as ComponentMeta<typeof LifeTheTeam>;

const Template: ComponentStory<typeof LifeTheTeam> = () => <LifeTheTeam />

export const Default = Template.bind({});