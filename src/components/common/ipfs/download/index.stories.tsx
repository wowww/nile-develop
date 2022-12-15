import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IpfsFileDownload } from './index';

export default {
  title: 'Common/IPFS/File/Download',
  component: IpfsFileDownload,
} as ComponentMeta<typeof IpfsFileDownload>;

const Template: ComponentStory<typeof IpfsFileDownload> = (args) => <IpfsFileDownload {...args} />;

export const Default = Template.bind({});

Default.args = {
  provider: 'ipfs',
  contentId: 'QmR319k41MUHKDnhAeef8yFqY1CbgwkoNAvnzCrSdSVAWc',
};
