// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import RightLinkList from './RightLinkList';
import LeftLinkList from './LeftLinkList';
import { Link } from '../../routes';
import { Header as StyledHeader, Title } from './styles';
import connect from './store';

type Props = {
  pathname: string,
  authenticated?: boolean,
  actions: {
    logout: Function
  }
};

const Header = ({ pathname, authenticated, actions: { logout } }: Props) => (
  <StyledHeader>
    <Link prefetch href="/" passHref>
      <Title>Olga Sanchis</Title>
    </Link>
    <LeftLinkList />
    <RightLinkList
      pathname={pathname}
      authenticated={authenticated}
      logout={logout}
    />
  </StyledHeader>
);

Header.defaultProps = {
  authenticated: false
};

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
  authenticated: PropTypes.bool,
  actions: PropTypes.shape({
    logout: PropTypes.func.isRequired
  }).isRequired
};

export default connect(Header);
