import styled from "styled-components";

const Link = styled.button`
  background-color: transparent;
  color: ${props =>
    props.primary ? props.theme.primary : props.theme.secondary};
  border: 0;
  padding: 0;
  margin: 0;

  &:active {
    outline: none;
    color: ${props => props.theme.tertiary};
  }

  &:visited {
    color: ${props =>
      props.primary ? props.theme.primary : props.theme.secondary};
  }
`;

export default Link;
