import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
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
