import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
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
