import React from 'react';
import { Container, StyledLink } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <StyledLink to="/"> &#8592; Back to the home page</StyledLink>
      <p>Page not found!</p>
    </Container>
  );
};

export default NotFound;
