import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;