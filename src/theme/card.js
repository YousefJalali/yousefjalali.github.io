import styled from "styled-components";

const Card = styled.div`
  position: relative;
  width: 90%;
  /* height: 30rem; */
  border: 1px solid #eee;
  padding: 2rem 0;
  margin: 2rem auto;
  border-radius: 2rem;
  box-sizing: border-box;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export default Card;
