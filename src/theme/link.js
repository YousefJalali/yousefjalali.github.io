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
  position: relative;
  text-decoration: none;

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

  &:hover {
    color: ${props =>
      props.primary ? props.theme.primary : props.theme.secondary};
    text-decoration: none;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 0.3rem;
    bottom: -1rem;
    background-color: ${props =>
      props.primary ? props.theme.primary : props.theme.secondary};
  }
  &:before {
    left: 0;
  }
  &:after {
    right: 0;
    background-color: ${props =>
      props.primary ? props.theme.primary : props.theme.secondary};
    transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  &:hover:before {
    background-color: ${props =>
      props.primary ? props.theme.primary : props.theme.secondary};
    width: 100%;
    transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  &:hover:after {
    background-color: transparent;
    width: 100%;
    transition: 0s;
  }
`;

// const BorderSlide = styled.span`
//   position: relative;
//   display: block;
//   cursor: pointer;
//   color: ${Colors.colorSecondary};
//   text-decoration: none;

//   &:hover {
//     color: ${Colors.colorSecondary};
//     text-decoration: none;
//   }

//   &:before,
//   &:after {
//     content: "";
//     position: absolute;
//     width: 0%;
//     height: 0.5rem;
//     bottom: -1rem;
//     background-color: ${Colors.colorSecondary};
//   }
//   &:before {
//     left: 0;
//   }
//   &:after {
//     right: 0;
//     background-color: ${Colors.colorSecondary};
//     transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
//   }
//   &:hover:before {
//     background-color: ${Colors.colorSecondary};
//     width: 100%;
//     transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
//   }

//   &:hover:after {
//     background-color: transparent;
//     width: 100%;
//     transition: 0s;
//   }
// `;

export default Link;
