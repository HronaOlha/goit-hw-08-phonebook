import { useSelector } from 'react-redux';
import { Container, Text, Title, StyledLink } from './Home.styled';
import { selectUser } from 'redux/auth/selectors';

const Home = () => {
  const user = useSelector(selectUser);
  return (
    <Container>
      <Title>Hi {user.name ? user.name : 'Stranger'}!</Title>

      <Text>
        It's Phonebook servise <br /> Here you can store your phone contacts.
        <br />
        {user.name ? (
          <>
            <span>To get started, go to the </span>
            <StyledLink to="/contacts">Contacts</StyledLink>
            <span> page.</span>
          </>
        ) : (
          <>
            <span>To get started, first </span>
            <StyledLink to="/register">Register</StyledLink>
            <span> or </span>
            <StyledLink to="/login">Log In.</StyledLink>
          </>
        )}
      </Text>
    </Container>
  );
};

export default Home;
