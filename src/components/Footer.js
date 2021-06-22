import React from 'react'
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <h2>This is Disney+ clone app and I will use it for my portfolio</h2>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  padding: 40px;
  color: white;
  background-color: #000;
  margin-top: 30px;
  text-align: center;
`;
