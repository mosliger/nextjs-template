
import { appWithTranslation } from 'next-i18next'

import Navigation from '../components/Navigation';
import Loading from '../components/Loading';

import '../styles/index.scss';

const MyApp = (props) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Navigation />
      <Loading />
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp)
