import React from "react";
import styled from "styled-components";

import { ICONS } from "../assets/ICONS";
import BurgerButton from "../components/Nav/BurgerButton";
import MobileNav from "../components/Nav/Mobile";
import DesktopNav from "../components/Nav/Desktop";

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

          <BurgerButton
            onClick={this.burgerButtonHandler}
            isOpen={!this.state.isMenuModalVisible}
          />

          {/* {screenWidth < 1000 ? (
            <BurgerButton
              onClick={this.burgerButtonHandler}
              isOpen={!this.state.isMenuModalVisible}
            />
          ) : (
            <DesktopNav
              items={this.state.menu}
              onItemClick={this.scrollHandler}
            />
          )} */}
        </Nav>
        {this.state.isMenuModalVisible ? (
          <MobileNav items={this.state.menu} onItemClick={this.scrollHandler} />
        ) : null}
        <Intro>
          <h1>Yousef jalali</h1>
          <h2>Front-end developer</h2>
        </Intro>
      </section>
    );
  }
}

const Nav = styled.nav`
  position: absolute;
  top: 2rem;
  left: 2rem;
  right: 2rem;
  z-index: 9999;
  box-sizing: border-box;

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
  height: 100vh;
  box-sizing: border-box;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
