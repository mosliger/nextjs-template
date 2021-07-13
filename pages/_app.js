
import Navigation from '../components/Navigation';
import Loading from '../components/Loading';

import '../styles/index.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navigation />
      <Loading />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

