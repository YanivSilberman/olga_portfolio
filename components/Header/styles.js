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
  width: 80%;
  z-index: 9999;
  left: 0;
  right: 0;

  @media ${props => props.theme.media.maxEreader} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const MoreButton = styled.i`
  position: absolute;
  right: 0;
  top: 40px;
  font-size: 25px;
  display: 'none';

  @media ${props => props.theme.media.maxEreader} {
    display: ${props => (props.displayLearnMore ? 'block' : 'none')};
  }

  @media ${props => props.theme.media.minPortrait} {
    display: 'none';
  }
`;

export const Img = styled.img`
  width: 70px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  cursor: pointer;
`;
