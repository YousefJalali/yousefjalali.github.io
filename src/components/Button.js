import React from "react";
import styled from "styled-components";

export default props => (
  <Button>
    <h2>{props.title}</h2>
  </Button>
);

const Button = styled.button`
  height: 3rem;
  width: 13rem;
  margin: 2rem 0 0 0;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.tertiary};
  border: 1px solid ${props => props.theme.tertiary};
  border-radius: 5rem;

  h2 {
    text-transform: uppercase;
    font-size: 1rem;
  }
`;
