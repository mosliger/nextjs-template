import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../layouts/main';

const About = () => {
  return (
    <div className="container">
      <Helmet>
        <title>About</title>
      </Helmet>
      <h1>About Page</h1>
    </div>
  );
};

export default Layout()(About);
