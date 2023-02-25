import React from 'react';
import styled from 'styled-components';
import getHelloTest from '../hooks/useHello';

export default function LoginPage() {
  const helloAction = getHelloTest();
  return (
    <Container>
      {helloAction.data}
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;