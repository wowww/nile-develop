import React, { StrictMode, useMemo } from 'react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Web3ReactProvider } from '@web3-react/core';
import { ExternalProvider, Web3Provider } from '@ethersproject/providers';
import { Global, ThemeProvider } from '@emotion/react';
import { appWithTranslation } from 'next-i18next';

import { global } from '@styles/global';
import theme from '@/themes';

import 'tailwindcss/tailwind.css';
import '@/assets/styles/common.scss';

import { Footer, Header } from '@components';
import { CommonModal } from '@components/common/modal';
import { useRouter } from 'next/router';
import Head from "next/head";

const getLibrary = (provider: ExternalProvider) => {
  return new Web3Provider(provider, 'any');
};

const Application = ({ Component, pageProps }: AppProps) => {
  const { asPath } = useRouter();

  const ambientMode = useMemo(() => ['/wemix-wallet'].filter((it) => asPath.includes(it)).length > 0, [asPath]);

  return (
    <StrictMode>
      <RecoilRoot>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Head>
            <title>NILE</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap" />
          </Head>
          <ThemeProvider theme={theme}>
            <Global styles={global} />
            {!ambientMode && <Header />}
            <Component {...pageProps} />
            {!ambientMode && <Footer />}
            <CommonModal />
          </ThemeProvider>
        </Web3ReactProvider>
      </RecoilRoot>
    </StrictMode>
  );
};

export default appWithTranslation(Application);
