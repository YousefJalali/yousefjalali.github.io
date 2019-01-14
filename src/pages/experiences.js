import React from "react";
// import styled from "styled-components";

import Carousel from "../components/Carousel/Carousel";
import CarouselItem from "../components/Carousel/CarouselItem";

export default class Experiences extends React.Component {
  render() {
    return (
      <section>
        <h3>Experiences</h3>
        <div>
          <Carousel>
            <CarouselItem index={1} />
            <CarouselItem index={2} />
            <CarouselItem index={3} />
            <CarouselItem index={4} />
          </Carousel>
        </div>
      </section>
    );
  }
}
