import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const TypeHandlerContainer = styled.div`
  border: none;
  padding: 5px 0;
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: rows;
  align-items: center;
  justify-content: center;
`;

export const TypeOption = styled.div`
  color: ${props =>
    props.picked ? props.theme.colors.main : props.theme.colors.dark};
  text-align: center;
  flex: 1;
  margin: 0 10px;
  height: 100%;
  cursor: pointer;

  ${props => props.theme.effects.hover.mainColor};
`;
