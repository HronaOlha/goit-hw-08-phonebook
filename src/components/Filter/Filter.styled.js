import styled from 'styled-components';

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
