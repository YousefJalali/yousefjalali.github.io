import React from "react";
import styled from "styled-components";

import { ICONS } from "../assets/ICONS";
import BurgerButton from "../components/Nav/BurgerButton";
import MobileNav from "../components/Nav/Mobile";
import DesktopNav from "../components/Nav/Desktop";
import Neural from "../assets/neural.svg";

export default class Home extends React.Component {
  state = {
    isMenuModalVisible: false,
    menu: [
      {
        name: "home"
      },
      {
        name: "about"
      },
      {
        name: "work"
      },
      {
        name: "experiences"
      },
      {
        name: "contact"
      }
    ]
  };

  burgerButtonHandler = () => {
    this.setState(prevState => {
      return {
        isMenuModalVisible: !prevState.isMenuModalVisible
      };
    });
  };

  scrollHandler = id => {
    this.setState({ isMenuModalVisible: false });
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  render() {
    const screenWidth = window.innerWidth;
    return (
      <section id="home">
        <Nav>
          <Logo viewBox="0 0 40 40">
            <path d={ICONS.logo.d} transform={ICONS.logo.transform} />
          </Logo>

          {screenWidth < 1000 ? (
            <BurgerButton
              onClick={this.burgerButtonHandler}
              isOpen={!this.state.isMenuModalVisible}
            />
          ) : (
            <DesktopNav
              items={this.state.menu}
              onItemClick={this.scrollHandler}
            />
          )}
        </Nav>
        {this.state.isMenuModalVisible ? (
          <MobileNav items={this.state.menu} onItemClick={this.scrollHandler} />
        ) : null}
        <Intro>
          <h1>Yousef jalali</h1>
          <h2>Front-end developer</h2>
        </Intro>
        {/* <BgImage>
          <img src={Neural} alt="background" />
        </BgImage> */}
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
