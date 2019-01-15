import React from "react";
import styled from "styled-components";

import Link from "../../theme/link";

export default props => {
  return (
    <Container>
      <ul>
        {props.items.map(item => (
          <li key={item.name} onClick={() => props.onItemClick(item.name)}>
            <Link primary>{item.name}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li:not(:last-child) {
      margin-right: 4rem;
      margin-bottom: 0;
    }
  }
`;
