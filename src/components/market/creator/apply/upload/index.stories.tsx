import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FileUpload } from './index';

export default {
  title: 'Market/Creator/Apply/File/Upload',
  component: FileUpload,
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});

Default.args = {
  accept: '.jpg, .png, .pdf',
  description: '최대 1개의 jpg/png/pdf 파일만 업로드 가능합니다. (최대 500mb)',
};
