import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: rows;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 150px;
`;

export const ShowMore = styled.div`
  width: inherit;
  cursor: pointer;
  ${props => props.theme.effects.hover.mainColor};
`;
