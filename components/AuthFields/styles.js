import styled from 'styled-components';
import * as T from '../Theme';

export const Main = styled.div`
  border-bottom: 1px solid #ececec;
  padding-bottom: 20px;
  margin-bottom: 20px;
  text-align: center;
  width: auto;
  margin: auto;
  > h1 {
    font-size: 20px;
  }

  > form input {
    display: block;
    margin-bottom: 10px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #333;
  }
`;

export const SubmitButton = T.Button.extend`
  opacity: ${({ touched }) => (touched ? 1 : 0.5)};
`;
