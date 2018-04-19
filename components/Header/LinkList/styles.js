import styled from 'styled-components';
import { Link as ReactScrollLink } from 'react-scroll';
import * as T from '../../Theme';

export const A = T.A.extend`
  font-size: 14px;
  margin-right: 40px;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: ${({ active }) => (active ? '#52B6AC' : '#bdbdbd')};
  text-decoration: none;

  @media ${props => props.theme.media.maxEreader} {
    margin-right: 10px;
  }
`;

export const NavButton = T.A.extend`
  font-size: 14px;
  margin-right: 40px;
  cursor: pointer;
  font-weight: 300;
  text-decoration: none;
  color: white;
  background-color: ${props => props.theme.colors.main};
  padding: 5px 10px;

  &:hover {
    color: white;
  }
`;

export const RightNav = styled.nav`
  text-align: right;
  display: inline-block;
  flex-direction: rows;
  flex: 1;

  @media ${props => props.theme.media.maxEreader} {
    height: 40px;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

const ScrollLink = styled(ReactScrollLink)`
  font-size: 20px;
  font-weight: 700;
  transition: all 0.5;
  &.active {
    color: ${props => props.theme.colors.main};
    border-bottom: 3px solid ${props => props.theme.colors.main};
  }
  @media ${props => props.theme.media.maxTablet} {
    font-size: 18px;
  }
  @media ${props => props.theme.media.maxEreader} {
    font-size: 13px;
    margin: 50px 5px;
    line-height: 40px;
  }
`;

export default props => <ScrollLink {...props} />;
