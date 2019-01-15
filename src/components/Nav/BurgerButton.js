import React from "react";
import styled from "styled-components";

export default props => {
  return (
    <Container>
      <Burger onClick={props.onClick}>
        <Bar top isOpen={props.isOpen} />
        <Bar middle isOpen={props.isOpen} />
        <Bar bottom isOpen={props.isOpen} />
      </Burger>
    </Container>
  );
};

const Container = styled.div`
  height: 4rem;
  width: 4rem;
  position: relative;
`;
const Burger = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  cursor: pointer;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
`;

const Bar = styled.div`
  height: 0.5rem;
  width: ${props => (props.middle ? "2.5rem" : "4rem")};
  background-color: ${props =>
    props.isOpen ? props.theme.primary : props.theme.secondary};
  border-radius: 2.5rem;
  transform: ${props =>
    props.isOpen
      ? null
      : props.top
      ? "translateY(1.125rem) rotate(-45deg)"
      : props.bottom
      ? "translateY(-1.125rem) rotate(45deg)"
      : "translateX(2.5rem)"};
  transition: transform .3s ease-out;
`;
