import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const NameUser = styled.p`
  font-size: 20px;
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
