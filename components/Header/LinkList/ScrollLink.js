// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Link, { A } from './styles';

const ScrollLink = ({ name, to, offset }) => (
  <A>
    <Link to={to} spy smooth offset={offset} duration={500}>
      {name}
    </Link>
  </A>
);

ScrollLink.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired
};

export default ScrollLink;
