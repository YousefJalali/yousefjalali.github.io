import React from "react";
import styled from "styled-components";

export default props => {
  return (
    <Item>
      Item {props.index} of {props.numSlides}
    </Item>
  );
};

const Item = styled.div`
  background: ${props => props.theme.secondary};
  text-align: center;
  width: 100%;
  padding-bottom: 100%;
  height: 0;
  color: ${props => props.theme.secondary};
  box-shadow: 0 0 1rem  rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
`;
