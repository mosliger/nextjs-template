import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Post2 = (props) => {
  const { id } = props;
  const [state, setState] = React.useState([]);
  console.log('props >>', props);
  return (
    <div className="container">
      <h1>Post {id}</h1>
      <button
        onClick={() => {
          setState([...state, state.length]);
        }}
      >
        add
      </button>
      <ul>
        {state.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5]);
    }, 1500);
  });
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps = async (props) => {
  const { locale, params } = props
  const translations = await serverSideTranslations(locale, ['common'])
  const json = await getData();
  return {
    props: {
      ...params,
      ...translations,
      json
    },
  };
};

export default Post2;
