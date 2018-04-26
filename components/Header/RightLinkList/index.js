// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../../routes';
import { A, RightNav } from './styles';
import targets from './targets';

type Props = {
  pathname: string,
  authenticated: boolean,
  logout: Function
};

const RightLinkList = ({ pathname, authenticated, logout }: Props) => (
  <RightNav>
    {targets.map(t => (
      <Link prefetch route={t.to} passHref>
        <A active={pathname === t.to}>
          <i className={t.icon} />
        </A>
      </Link>
    ))}
    {!authenticated && (
      <Link prefetch route="signin" passHref>
        <A active={pathname === 'signin'}>
          <i className="fas fa-sign-in-alt" />
        </A>
      </Link>
    )}
    {authenticated && (
      <Link prefetch route="signin" passHref>
        <A onClick={() => logout()}>
          <i className="fas fa-sign-out-alt" />
        </A>
      </Link>
    )}
    {!authenticated && (
      <Link prefetch href="/create" passHref>
        <A>
          <i className="fas fa-plus" />
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
