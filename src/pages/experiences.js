import React from "react";
import styled from "styled-components";

import Carousel from "../components/Carousel/Carousel";
import CarouselItem from "../components/Carousel/CarouselItem";

export default class Experiences extends React.Component {
  render() {
    const screenWidth = window.innerWidth;
    return (
      <section id="experiences">
        <h3>Experiences</h3>
        {screenWidth < 700 ? (
          <Carousel>
            <CarouselItem index={1} />
            <CarouselItem index={2} />
            <CarouselItem index={3} />
            <CarouselItem index={4} />
          </Carousel>
        ) : (
          <Wrapper>
            <Item />
            <Item />
            <Item />
            <Item />
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
`;
