import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Burger>
      <Bar />
      <Bar middle />
      <Bar />
    </Burger>
  );
};

const Burger = styled.div`
  height: 2.7rem;
  width: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const Bar = styled.div`
  height: 0.5rem;
  width: ${props => (props.middle ? "2.5rem" : "4rem")};
  background-color: ${props => props.theme.primary};
  border-radius: 2.5rem;
`;
