import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Header = styled.header`
  margin: auto;
  margin-bottom: 5px;
  padding: 20px 0px;
  border-bottom: 0px;
  display: flex;
  flex-direction: rows;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  position: fixed;
  width: 70%;
  z-index: 9997;
  left: 0;
  right: 0;
  height: 150px;

  @media ${props => props.theme.media.maxPortrait} {
    flex-direction: column;
    justify-content: center;
  }

  @media ${props => props.theme.media.maxTablet} {
    width: 95%;
  }
`;

export const Title = styled.h1`
  display: inline-block;
  vertical-align: middle;
  margin-right: 20px;
  font-size: 25px;
  cursor: pointer;
  color: ${props => props.theme.colors.dark};
`;
