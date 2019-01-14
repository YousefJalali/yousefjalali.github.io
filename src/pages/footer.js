import React from "react";
import styled from "styled-components";

import { ICONS } from "../assets/ICONS";
import Card from "../theme/card";
import Button from "../components/Button";

export default class Footer extends React.Component {
  render() {
    return (
      <Section>
        <Background />
        <Card>
          <h3>Start a project</h3>
          <p style={{ fontSize: "1rem", width: "60%" }}>
            Interested in working together? We should queue up a chat.
          </p>
          <Button title="let's do it" />
        </Card>
        <Social>
          <Icon viewBox="0 0 32 32">
            <path d={ICONS.facebook.d} transform={ICONS.facebook.transform} />
          </Icon>
          <Icon viewBox="0 0 32 32">
            <path d={ICONS.linkedIn.d} transform={ICONS.linkedIn.transform} />
          </Icon>
          <Icon viewBox="0 0 32 32">
            <path d={ICONS.github.d} transform={ICONS.github.transform} />
          </Icon>
        </Social>
        <Credit>
          <p>
            designed by <span>Yousef jalali</span>
          </p>
        </Credit>
      </Section>
    );
  }
}

const Section = styled.section`
  height: 50vh;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${props => props.theme.primary};
`;

const Social = styled.div`
  position: relative;
  height: 5rem;
  width: 40%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Icon = styled.svg`
  height: 3rem;
  width: 3rem;
  fill: ${props => props.theme.secondary};
  border: 1px solid white;
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding: 0.3rem;
`;

const Credit = styled.div`
  position: relative;
  color: ${props => props.theme.secondary};
  p {
    font-size: 1.2rem;
  }
`;
