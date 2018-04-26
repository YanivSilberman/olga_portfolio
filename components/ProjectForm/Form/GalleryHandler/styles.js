import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GalleryContainer = styled.div`
  border: none;
  padding: 5px;
`;

export const GalleryRow = styled.div`
  display: flex;
  flex-direction: rows;
  width: 100%;
`;

const Btn = styled.div`
  border: none;
  background-color: transparent;
  color: ${props => props.theme.colors.dark};
  padding: 5px;
  cursor: pointer;
  ${props => props.theme.effects.hover.mainColor};
`;

export const RemoveBtn = Btn.extend`
  color: inherit;
`;

export const AddBtn = Btn.extend`
  color: inherit;
`;
