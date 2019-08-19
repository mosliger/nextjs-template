import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';

import Navigation from '../components/Navigation';

import '../styles/index.scss';

Router.events.on('routeChangeStart', url => {
  console.log(`loading: ${url}`);
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  console.log('loading succress');
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  console.log('loading succress');
  NProgress.done();
});

export default () => Component => {
  class MainLayout extends React.Component {
    /* delay page change */
    // static async getInitialProps() {
    // await new Promise(resolve => {
    //   setTimeout(resolve, 3000);
    // });
    //   return {};
    // }

    render() {
      return (
        <>
          <Navigation />
          <Component {...this.props} />
        </>
      );
    }
  }
  return MainLayout;
};
