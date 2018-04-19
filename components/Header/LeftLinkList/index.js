// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../../routes';
import { A, LeftNav } from './styles';
import targets from './targets';

const LeftLinkList = ({ pathname }) => (
  <LeftNav>
    {targets.map(t => (
      <Link prefetch route={t.to} passHref>
        <A active={pathname === t.to}>{t.name}</A>
      </Link>
    ))}
  </LeftNav>
);

LeftLinkList.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default LeftLinkList;
