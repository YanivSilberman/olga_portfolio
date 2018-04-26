import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const CardContainer = styled.div`
  flex: 1;
  border: none;
  background-color: none;
  overflow: hidden;
  height: 200px;
  min-width: 300px;
  max-width: 350px;
  margin: 25px;
  transition: all 0.5s;
  z-index: 299;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardInner = styled.div`
  box-shadow: ${props => props.theme.shadow.asana};
  border-radius: 5%;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  width: inherit;
  display: block;
  min-width: 100%;
  min-height: 100%;
  height: auto;
  max-height: 130%;
  z-index: 300;
`;
