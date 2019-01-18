import React from "react";
import styled from "styled-components";
import media from 'styled-media-query';

import phone from "../assets/phone.svg";
import minesweeper from "../assets/minesweeper.gif";
// import Carousel from '../components/PhoneCarousel/Carousel';
// import CarouselItem from '../components/PhoneCarousel/ca'

export default class Work extends React.Component {
  render() {
    return (
      <section style={{ height: "100vh" }} id="work">
        <h3>Recent work</h3>
        <Container>
          <img src={minesweeper} alt="minesweeper" />
          <Phone src={phone} alt="phone" />
        </Container>
      </section>
    );
  }
}

const Container = styled.div`
  width: var(--width);
  padding-top: calc(100 / 49.16 * 100%);
  position: relative;
  /* border: 1px solid red; */
  margin: 0 auto;

  img:first-child {
    position: absolute;
    left: 5.5%;
    width: 90%;
  }

  ${media.lessThan("medium")`
    --width: 60%;
    img:first-child {
      top: 10%;
    }
  `};

  ${media.between("medium", "large")`
    --width: 40%;
    img:first-child {
      top: 5%;
    }
  `};

  ${media.greaterThan("large")`
    --width: 25%;
    img:first-child {
      top: 3%;
    }
  `};
`;

const Phone = styled.img`
  position: absolute;
  top: -1.7%;
  left: -16%;
  z-index: 2;
  width: 132%;
`;
