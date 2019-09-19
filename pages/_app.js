import React from 'react';
import App from 'next/app';

import Router from 'next/router';

import Navigation from '../components/Navigation';

import '../styles/index.scss';

const handlePageLoading = (status = true) => {
  const el = document.getElementById('wrapper-loading');
  if (status) {
    el.classList.add('active');
  } else {
    el.classList.remove('active');
  }
};

Router.events.on('routeChangeStart', url => {
  handlePageLoading();
});

Router.events.on('routeChangeComplete', () => {
  handlePageLoading(false);
});

Router.events.on('routeChangeError', () => {
  handlePageLoading(false);
});

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {};
    // delay page change
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render () {
    const { Component, pageProps } = this.props;
    return (
      <>
        <header>
          <Navigation />
        </header>
        <Component {...pageProps} />
      </>
    );
  }
}
