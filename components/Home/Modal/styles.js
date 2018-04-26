import styled from 'styled-components';
// eslint-disable-next-line import/prefer-default-export

export const Overlay = styled.div`
  z-index: 9998;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
`;

export const ModalContainer = styled.div`
  background-color: white;
  z-index: 9999;
  position: fixed;
  left: 0;
  right: 0;
  top: 5%;
  bottom: 5%;
  padding-bottom: 50px;
  width: 65%;
  margin: auto;
  border-radius: 5%;
  box-shadow: ${props => props.theme.shadow.heavy};
  will-change: top, opacity;
  text-align: center;
  overflow: scroll;
`;

const Icon = styled.i`
  position: absolute;
  left: 100px;
  font-size: 40px;
  color: ${props => props.theme.colors.dark};
  cursor: pointer;
  z-index: 999999;

  ${props => props.theme.effects.hover.mainColor};

  @media ${props => props.theme.media.maxEreader} {
    left: 50px;
  }
`;

export const Close = Icon.extend`
  top: 50px;
`;

export const Edit = Icon.extend`
  top: 100px;
`;
