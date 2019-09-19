import React from 'react';
import { NextSeo } from 'next-seo';

const About = () => {
  return (
    <div className="container">
      <NextSeo
        title="About"
        description="A short description goes here."
      />
      <h1>About Page</h1>
    </div>
  );
};

export default About;
