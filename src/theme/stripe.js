import React from "react";
import styled from "styled-components";

export default () => (
  <Container>
    <Stripe />
  </Container>
);

const Container = styled.div`
  position: relative;
  width: 100vw;
`;
const Stripe = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70vh;
  background-color: ${props => props.theme.primary};
`;
