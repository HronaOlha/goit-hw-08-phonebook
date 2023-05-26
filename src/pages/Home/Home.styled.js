import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  width: 400px;
  line-height: 2;
  text-align: center;
`;

export const StyledLink = styled(NavLink)`
  color: black;
`;
