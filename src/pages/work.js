import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import phone from "../assets/phone.svg";
import minesweeper from "../assets/minesweeper.gif";
import Carousel from '../components/Carousel2/Carousel';
// import CarouselItem from '../components/PhoneCarousel/ca'

export default class Work extends React.Component {
  render() {
    return (
      <section style={{ height: "100vh" }} id="work">
        <Title>
          <h3>Recent work</h3>
        </Title>
        <Container>
          {/* <Wrapper>
            <GIF src={minesweeper} alt="minesweeper" />
            <Phone src={phone} alt="phone" />
          </Wrapper>
          <Description>
            <h4>Minesweeper</h4>
            <p>App built with React Native</p>
          </Description>
          <Paging /> */}
          <Carousel />
        </Container>
      </section>
    );
  }
}

const Title = styled.div`
  height: 10%;
`;

const Container = styled.div`
  height: 90%;
  width: 90%;
  position: relative;
  border: 1px solid red;
  margin: 0 auto;
  /* padding: 2rem 0; */
/* 
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  } */

  /* img:first-child {
    position: absolute;
    left: 5.5%;
    width: 90%;
  } */

  /* ${media.lessThan("medium")`
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
  `}; */
`;

const Wrapper = styled.div`
  position: relative;
  height: 70%;
  /* padding-left: 45%; */
  border: 1px solid blue;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const GIF = styled.img`
  height: 80%;
`;

const Phone = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
`;

const Description = styled.div`
  height: 25%;
  width: 70%;
  border: 1px solid green;
  padding-top: 3rem;
  margin: 0 auto;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Paging = styled.div`
  height: 5%;
  width: 100%;
  border: 1px solid yellow;
`
