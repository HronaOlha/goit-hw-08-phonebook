import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto 20px;
`;

export const Label = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 18px;
`;

export const Input = styled.input`
  padding: 8px;
  margin: 8px 0;
  width: 500px;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 4px;
  outline: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgb(231, 230, 230);
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

  &:hover {
    background-color: #ff8c00;
  }
`;
