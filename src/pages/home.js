import React from "react";
import styled from "styled-components";

import { ICONS } from "../assets/ICONS";
import MobileMenu from "../components/Nav/Mobile";
import Brain from "../assets/brain.svg";

export default class Home extends React.Component {
  render() {
    return (
      <section>
        <Nav>
          <Logo viewBox="0 0 40 40">
            <path d={ICONS.logo.d} transform={ICONS.logo.transform} />
          </Logo>
          <MobileMenu />
        </Nav>
        <Intro>
          <h1>Yousef jalali</h1>
          <h2>Front-end developer</h2>
        </Intro>
        <BgImage>
          <img src={Brain} alt="background" />
        </BgImage>
      </section>
    );
  }
}

const Nav = styled.nav`
  height: 10vh;
  box-sizing: border-box;
  margin-top: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.svg`
  height: 4rem;
  width: 4rem;
  fill: ${props => props.theme.primary};
`;

const Intro = styled.div`
  height: 70vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BgImage = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  img {
    width: 18rem;
  }
`;
