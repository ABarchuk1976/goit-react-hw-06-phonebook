import styled from 'styled-components';

export const Form = styled.form`
  width: fit-content;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px 10px;
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  display: block;
  width: 400px;
  margin-top: 5px;
  outline: none;
`;

export const Button = styled.button`
  width: fit-content;
  cursor: pointer;
  margin: 0;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  outline: none;

  :hover {
    background-color: #cccccc;
  }
`;
