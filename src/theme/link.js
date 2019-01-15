import styled from "styled-components";

const Link = styled.button`
  background-color: transparent;
  color: ${props =>
    props.primary ? props.theme.primary : props.theme.secondary};
  border: 0;
  padding: 0;
  margin: 0;
  font-size: 2rem;
  font-weight: 800;
  cursor: pointer;

  &:active {
    outline: 0;
    color: ${props => props.theme.tertiary};
  }

  &:focus {
    outline: 0;
  }

  &:visited {
    color: ${props =>
      props.primary ? props.theme.primary : props.theme.secondary};
  }
`;

export default Link;
