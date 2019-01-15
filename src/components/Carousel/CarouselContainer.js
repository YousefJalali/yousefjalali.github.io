import styled from "styled-components";

const CarouselContainer = styled.div`
  display: flex;
  margin: 0 0 2rem 2rem;
  transition: ${props => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${props => {
    if (props.numSlides === 1) return "translateX(0%)";
    if (props.numSlides === 2) {
      if (!props.sliding && props.direction === "next")
        return "translateX(calc(-80% + 3rem))";
      if (!props.sliding && props.direction === "prev") return "translateX(0%)";
      if (props.direction === "prev") return "translateX(calc(-80% + 3rem))";
      return "translateX(0%)";
    }
    if (!props.sliding) return "translateX(calc(-80% - 2rem))";
    if (props.direction === "prev")
      return "translateX(calc(2 * (-80% - 2rem)))";
    return "translateX(0%)";
  }};
`;

export default CarouselContainer;