import React from 'react';
// import PropTypes from 'prop-types';

const Post2 = (props) => {
  const { id } = props;
  const [state, setState] = React.useState([]);
  return (
    <div>
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

Post2.getInitialProps = async (req) => {
  const { query } = req;
  const json = await getData();
  return { data: json, id: query.id };
};

export default Post2;
