import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render () {
    return (
      <html>
        <Head>
          <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />
        </Head>
        <body>
          <div id="wrapper-loading">
            <div>
              <span>L</span>
              <span>O</span>
              <span>A</span>
              <span>D</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
            </div>
          </div>
          <div id="wrapper">
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
