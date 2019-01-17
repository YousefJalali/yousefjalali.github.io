import React from "react";
import styled from "styled-components";

import Carousel from "../components/Carousel/Carousel";
import CarouselItem from "../components/Carousel/CarouselItem";

import buttonGIF from "../assets/button.gif";
import burgerGIF from "../assets/burger.gif";
import inputGIF from "../assets/input.gif";
import buttonArrowGIF from "../assets/button-arrow.gif";

export default class Experiences extends React.Component {
  render() {
    const screenWidth = window.innerWidth;
    return (
      <section id="experiences">
        <h3>Experiences</h3>
        {screenWidth < 700 ? (
          <Carousel>
            <CarouselItem index={1}>
              <img src={buttonGIF} alt="button" />
            </CarouselItem>
            <CarouselItem index={2}>
              <img src={burgerGIF} alt="button" />
            </CarouselItem>
            <CarouselItem index={3}>
              <img src={inputGIF} alt="button" />
            </CarouselItem>
            <CarouselItem index={4}>
              <img src={buttonArrowGIF} alt="button" />
            </CarouselItem>
          </Carousel>
        ) : (
          <Wrapper>
            <Item>
              <img src={buttonGIF} alt="button" />
            </Item>
            <Item>
              <img src={burgerGIF} alt="button" />
            </Item>
            <Item>
              <img src={inputGIF} alt="button" />
            </Item>
            <Item>
              <img src={buttonArrowGIF} alt="button" />
            </Item>
          </Wrapper>
        )}
      </section>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled.div`
  background: ${props => props.theme.secondary};
  text-align: center;
  width: 25%;
  padding-bottom: 25%;
  height: 0;
  color: ${props => props.theme.secondary};
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  margin: 2rem;
  overflow: hidden;

  img {
    width: 100%;
  }
`;
