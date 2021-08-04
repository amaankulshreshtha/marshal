import { store } from '@marshal/core';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
