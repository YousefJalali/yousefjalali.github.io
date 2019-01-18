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
              <a
                href="https://codepen.io/yousefjalali/pen/maYVRL"
                target="_blank"
                rel="noopener noreferrer"
              >
                view source
              </a>
            </Item>
            <Item>
              <img src={burgerGIF} alt="burger menu" />
              <a
                href="https://codepen.io/yousefjalali/pen/aPrvjz"
                target="_blank"
                rel="noopener noreferrer"
              >
                view source
              </a>
            </Item>
            <Item>
              <img src={inputGIF} alt="input" />
              <a
                href="https://codepen.io/yousefjalali/pen/vvMxLR"
                target="_blank"
                rel="noopener noreferrer"
              >
                view source
              </a>
            </Item>
            <Item>
              <img src={buttonArrowGIF} alt="button arrow" />
              <a
                href="https://codepen.io/yousefjalali/pen/magwBw"
                target="_blank"
                rel="noopener noreferrer"
              >
                view source
              </a>
            </Item>
          </Wrapper>
        )}
      </section>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  position: relative;

  a {
    position: absolute;
    bottom: -30%;
    left: 50%;
    height: 3rem;
    width: 9rem;
    transform: translate(-50%, -8px);
    background-color: ${props => props.theme.tertiary};
    color: ${props => props.theme.secondary};
    transition: all 0.3s ease-out;
    font-size: 0.9rem;
    line-height: 3rem;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 6px 10px 0px rgba(0, 0, 0, 0.2);

    &:active {
      box-shadow: 0 2px 6px 0px rgba(0, 0, 0, 0.2);
      transform: translate(-50%, -6px);
    }
  }

  &:hover {
    a {
      bottom: 5%;
    }
  }

  img {
    width: 100%;
  }
`;
