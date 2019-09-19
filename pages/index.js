import React from 'react';
import { NextSeo } from 'next-seo';

const HomePage = () => (
  <div className="container">
    <NextSeo
      title="Home page"
      description="A short description goes here."
    />
    <h1>Home Page</h1>
  </div>
);

export default HomePage;
