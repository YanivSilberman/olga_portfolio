// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import RightLinkList from './LinkList';
import { Link } from '../../routes';
import { Header as StyledHeader, Img } from './styles';
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
      <Img
        alt="up"
        src="https://s3-us-west-2.amazonaws.com/up-assets/up_logo.png"
      />
    </Link>
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
