import styled from 'styled-components';
import * as T from '../../Theme';

export const A = T.A.extend`
  font-size: 14px;
  margin-right: 20px;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  color: ${props =>
    props.active ? props.theme.colors.main : props.theme.colors.dark};
  text-decoration: none;

  @media ${props => props.theme.media.maxEreader} {
    margin-right: 10px;
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
