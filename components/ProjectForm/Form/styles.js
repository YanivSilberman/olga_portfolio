import styled from 'styled-components';
import { Button } from '../../Theme';

// eslint-disable-next-line import/prefer-default-export
export const ProjectForm = styled.div`
  border: none;
  padding: 50px;
  padding-top: 150px;
  width: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FormTitle = styled.h1`
  color: ${props => props.theme.colors.dark};
`;

export const SubmitBtn = Button.extend`
  color: inherit;
`;

export const FormControl = styled.div`
  height: auto;
  width: 100%;
  margin: 10px auto;
  padding: 30px 0;
  display: flex;
  flex-direction: rows;
`;

export const InputWrap = styled.div`
  flex: 1;
  padding: 0 30px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.colors.dark};
  width: 150px;
  min-width: 150px;
  border-right: 1px solid ${props => props.theme.colors.light};
`;

export const BtnNav = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: rows;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const IconBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.dark};

  ${props => props.theme.effects.hover.mainColor};
`;
