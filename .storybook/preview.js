import React, { Suspense } from 'react';
import { MemoryRouter } from 'react-router';
import { RecoilRoot } from 'recoil';
import { Web3ReactProvider } from '@web3-react/core';
import { addDecorator } from '@storybook/react';
import { Web3Provider } from '@ethersproject/providers';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import NextImage from 'next/image';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import '@/assets/styles/common.scss';
import { CommonModal } from '../src/components/common/modal';

const getLibrary = (provider) => {
  return new Web3Provider(provider, 'any');
};

// eslint-disable-next-line global-require
global.Buffer = global.Buffer || require('buffer').Buffer;
// localForage.setDriver(localForage.LOCALSTORAGE).then(() => {
//   // do nothing
// });

addDecorator((Story) => {
  return (<RecoilRoot>
    <I18nextProvider i18n={i18n}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MemoryRouter initialEntries={['/']}>
          <Suspense fallback="loading">
            <Story />
            <CommonModal />
          </Suspense>
        </MemoryRouter>
      </Web3ReactProvider>
    </I18nextProvider>
  </RecoilRoot>);
});

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: ({
    alt,
    src,
    loader,
    ...props
  }) => {
    const destination = src?.startsWith('http') ? src : loader({
      src,
      width: undefined,
      quality: 100,
    });
    return <img {...props} src={destination} alt={alt} />;
  },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
