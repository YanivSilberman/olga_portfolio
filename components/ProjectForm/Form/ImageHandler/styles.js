import styled from 'styled-components';
import { Button } from '../../../Theme';

// eslint-disable-next-line import/prefer-default-export
export const ImageHandlerContainer = styled.div`
  border: none;
  padding: 5px;

  > * {
    width: 100%;
  }

  > button {
    width: auto;
  }
`;

export const TypeBtn = Button.extend`
  color: white;
  text-align: center;
  flex: 1;
  margin: 0 10px;
  height: 100%;
`;

export const PreviewImg = styled.img`
  width: 100%;
  height: auto;
`;

export const TypeBtnContainer = styled.div`
  height: 30px;
  display: flex;
  flex-direction: rows;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
