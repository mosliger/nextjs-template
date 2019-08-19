import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/main';

const HomePage = () => (
  <div className="container">
    <Helmet>
      <title>My Title</title>
    </Helmet>
    <h1>Home Page</h1>
  </div>
);

export default Layout()(HomePage);
