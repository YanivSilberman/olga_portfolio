// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../../../routes';
import { A, RightNav } from './styles';
import targets from './targets';
import ScrollLink from './ScrollLink';

type Props = {
  pathname: string,
  authenticated: boolean,
  logout: Function
};

const RightLinkList = ({
  pathname,
  authenticated,
  logout
}: Props) => (
  <RightNav>
    {targets.map(t => <ScrollLink {...t} />)}
    {authenticated && (
      <Link prefetch route="dashboard" passHref>
        <A active={pathname === '/dashboard'}>MY BUSINESSES</A>
      </Link>
    )}
    {authenticated && (
      <Link prefetch route="signin" passHref>
        <A active={pathname === '/sign_up'} onClick={() => logout()}>
          SIGN OUT
        </A>
      </Link>
    )}
  </RightNav>
);

RightLinkList.propTypes = {
  pathname: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default RightLinkList;
