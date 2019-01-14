import React from "react";
import styled from "styled-components";

export default class Indicator extends React.Component {
  render() {
    const { length, position } = this.props;
    return (
      <Container>
        {Array.from({ length }, (pip, i) => (
          <Pip key={i} isCurrent={i === position} />
        ))}
      </Container>
    );
  }
}

const Container = styled.div`
  margin-bottom: 2rem;
  margin-top: -2rem;
`;
const Pip = styled.span`
  background: ${props => (props.isCurrent ? props.theme.primary : "#eee")};
  width: 1rem;
  height: 1rem;
  margin-right: .5rem;
  border-radius: 50%;
  display: inline-block;
  transition: background 0.5s ease;
  cursor: pointer;
`;
