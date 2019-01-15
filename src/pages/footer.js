import React from "react";
import styled from "styled-components";

import { ICONS } from "../assets/ICONS";
import Card from "../theme/card";
import Button from "../components/Button";
import Contact from "../components/Contact";

export default class Footer extends React.Component {
  state = {
    isContactFormOpen: false
  };

  contactFormOpener = () => {
    this.setState({
      isContactFormOpen: true
    });
  };
  contactFormCloser = () => {
    this.setState({
      isContactFormOpen: false
    });
  };

  render() {
    const year = new Date().getFullYear();
    return (
      <Section id="contact">
        <Background />
        {/* <Contact /> */}
        {this.state.isContactFormOpen ? (
          <Contact onClose={this.contactFormCloser} />
        ) : null}
        <CustomCard column>
          <h3>Start a project</h3>
          <p style={{ fontSize: "1rem", width: "60%" }}>
            Interested in working together? We should queue up a chat.
          </p>
          <Button title="let's do it" onClick={this.contactFormOpener} />
        </CustomCard>
        <Social>
          <a
            href="https://www.facebook.com/ucef.jalali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon viewBox="0 0 32 32">
              <path d={ICONS.facebook.d} transform={ICONS.facebook.transform} />
            </Icon>
          </a>

          <a
            href="https://www.linkedin.com/in/yousef-jalali/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon viewBox="0 0 32 32">
              <path d={ICONS.linkedIn.d} transform={ICONS.linkedIn.transform} />
            </Icon>
          </a>

          <a
            href="https://github.com/YousefJalali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon viewBox="0 0 32 32">
              <path d={ICONS.github.d} transform={ICONS.github.transform} />
            </Icon>
          </a>
        </Social>
        <Credit>
          <p>
            YOUSEF JALALI <span>&copy;{year}</span>
          </p>
        </Credit>
      </Section>
    );
  }
}

const Section = styled.section`
  height: 50vh;
  width: 100vw;
  max-width: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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

const CustomCard = styled(Card)`
  min-height: fit-content;
`;

const Social = styled.div`
  position: relative;
  height: 5rem;
  width: 40%;

  display: flex;
  justify-content: center;
  align-items: center;

  a:not(:last-child) {
    margin-right: 2rem;
  }
`;

const Icon = styled.svg`
  height: 3rem;
  width: 3rem;
  fill: ${props => props.theme.secondary};
  border: 1px solid white;
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding: 0.3rem;

  &:active {
    background-color: ${props => props.theme.secondary};
    fill: ${props => props.theme.primary};
  }
`;

const Credit = styled.div`
  position: relative;
  color: ${props => props.theme.secondary};
  p {
    font-size: 1.2rem;
  }
`;
