import styled from "styled-components";
import media from "styled-media-query";

const Card = styled.div`
  position: relative;
  min-height: 35rem;
  border: 1px solid #eee;
  padding: 2rem 0;
  margin: 2rem auto;
  border-radius: 2rem;
  box-sizing: border-box;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};

  display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
  flex-wrap: ${props => props.wrap ? "wrap" : "nowrap"};
  justify-content: space-evenly;
  align-items: center;

  ${media.lessThan("medium")`
    width: 90%;
  `};

  ${media.between("medium", "large")`
    width: 90%;
  `};

  ${media.greaterThan("large")`
    width: 40%;
  `};
`;

export default Card;
