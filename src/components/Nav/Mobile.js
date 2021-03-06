import React from "react";
import styled from "styled-components";
import ScrollLock from "react-scrolllock";

import Link from "../../theme/link";

export default props => {
  return (
    <Overlay>
      <ul>
        {props.items.map(item => (
          <li key={item.name} onClick={() => props.onItemClick(item.name)}>
            <Link>
              <h3>{item.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
      <ScrollLock />
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 50%;
  right: 0;
  /* background-color: rgba(0, 0, 0, .2); */
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};

  display: flex;
  justify-content: center;
  align-items: center;
`;
