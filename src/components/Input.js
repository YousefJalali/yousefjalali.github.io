import React from "react";
import styled from "styled-components";

export default props => {
  let inputElement = null;
  const { value, changed, isValid, isTouched } = props;

  switch (props.inputtype) {
    case "input":
      inputElement = (
        <Input
          {...props.inputConfig}
          value={value}
          onChange={changed}
          isValid={isValid}
          isTouched={isTouched}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <TextArea
          {...props.inputConfig}
          value={value}
          onChange={changed}
          isValid={isValid}
          isTouched={isTouched}
        />
      );
      break;
    default:
      inputElement = (
        <Input
          value={value}
          onChange={changed}
          isValid={isValid}
          isTouched={isTouched}
        />
      );
  }
  return <>{inputElement}</>;
};

const Input = styled.input`
  background-color: #eee;
  padding: 1.3rem 2rem;
  border-radius: 1rem;
  box-sizing: border-box;
  border: ${props =>
    !props.isValid && props.isTouched
      ? "1px solid rgba(255, 0, 0, 0.5)"
      : `1px solid ${props.theme.secondary}`};
  outline: 0;
  width: 90%;
  box-sizing: border-box;

  &::placeholder {
    font-weight: 700;
    font-size: 1rem;
    color: #ccc;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const TextArea = styled.textarea`
  background-color: #eee;
  padding: 1.3rem 2rem;
  border-radius: 1rem;
  box-sizing: border-box;
  border: ${props =>
    !props.isValid && props.isTouched
      ? "1px solid rgba(255, 0, 0, 0.5)"
      : `1px solid ${props.theme.secondary}`};
  outline: 0;
  width: 90%;
  height: 10rem;
  box-sizing: border-box;

  &::placeholder {
    font-weight: 700;
    font-size: 1rem;
    color: #ccc;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
