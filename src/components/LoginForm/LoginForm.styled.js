import styled from 'styled-components';

export const Form = styled.form`
  width: 500px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 30px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 5px;
  outline: none;
  height: 30px;
  border-radius: 5px;

  :focus {
    border-color: #ff8c00;
  }
`;

export const Button = styled.button`
  padding: 8px;
  background-color: white;
  outline: none;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #ff8c00;
  }
`;
