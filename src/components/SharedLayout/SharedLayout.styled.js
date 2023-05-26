import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.header`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  color: black;

  text-decoration: none;
  font-size: 20px;

  &.active {
    color: #ffa500;
    border-bottom: 1px solid #ffa500;
  }

  :not(:last-child) {
    margin-right: 100px;
  }
`;
