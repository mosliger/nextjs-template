import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';

const Navigation = ({ router }) => {
  console.log('props >>', router);
  const isActiveClass = (value) => {
    if (value === router.route) return 'active';
    return '';
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a className={isActiveClass('/')}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={isActiveClass('/about')}>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  router: PropTypes.shape({
    route: PropTypes.string
  }).isRequired
};

export default withRouter(Navigation);
