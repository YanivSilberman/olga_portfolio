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
