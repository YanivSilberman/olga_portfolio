import styled from 'styled-components';
import { Input, Button } from '../../../Theme';
// eslint-disable-next-line import/prefer-default-export

export const TagHandlerContainer = styled.div`
  border: none;
  padding: 5px 0;
  height: auto;
  width: 100%;
`;

export const SelectedTags = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: rows;
  align-items: center;
  justify-content: center;
`;

export const Tag = styled.div`
  flex: 1;
  margin: 5px;
`;

export const InputContainer = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: rows;
`;

export const TagInput = Input.extend`
  flex: 1;
  margin-right: 5px;
  height: 100%;
  width: auto;
  min-width: 100px;
`;

export const CreateBtn = Button.extend`
  margin-right: 5px;
  height: 100%;
  color: ${props => props.theme.colors.dark};
  ${props => props.theme.effects.hover.mainColor};
  background-color: transparent;
`;

export const AutoComplete = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const AutoOption = styled.div`
  margin: 10px;
  background-color: transparent;
  border-left: 5px solid ${({ color }) => color};

  > button {
    background-color: transparent;
    color: ${props =>
      props.selected ? props.theme.colors.dark : props.theme.colors.light};
    border: none;
    ${props => props.theme.effects.hover.mainColor};
    font-size: 14px;
    cursor: pointer;
    height: 16px;
    line-height: 16px;
    padding: 0 5px;

    > i {
      ${props => props.theme.effects.hover.mainColor};
      font-size: 14px;
      cursor: pointer;
      height: 16px;
      line-height: 16px;
      padding: 0 5px;
    }
  }
`;
