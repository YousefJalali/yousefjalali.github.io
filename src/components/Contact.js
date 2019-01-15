import React from "react";
import styled from "styled-components";

import Input from "../components/Input";
import Button from "../components/Button";

export default class Contact extends React.Component {
  state = {
    form: [
      {
        id: "name",
        inputType: "input",
        inputConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: "",
        validation: {
          required: true
        },
        isValid: false,
        isTouched: false
      },
      {
        id: "email",
        inputType: "input",
        inputConfig: {
          type: "email",
          placeholder: "Your Email"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        isValid: false,
        isTouched: false
      },
      //   {
      //     id: "type",
      //     inputType: "input",
      //     inputConfig: {
      //       type: "email",
      //       placeholder: "Your Email"
      //     },
      //     value: "",
      //     validation: {
      //       required: true,
      //       isEmail: true
      //     },
      //     isValid: false,
      //     isTouched: false
      //   },
      {
        id: "message",
        inputType: "textarea",
        inputConfig: {
          type: "text",
          placeholder: "Additional details"
        },
        value: "",
        validation: {
          required: true
        },
        isValid: false,
        isTouched: false
      }
    ],
    isFormValid: false
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.isEmail) {
      const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid =
        re.test(
          String(value)
            .trim()
            .toLowerCase()
        ) && isValid;
    }
    return isValid;
  };

  inputChangedHandler = (e, inputIndex) => {
    const form = [...this.state.form];
    const input = { ...form[inputIndex] };
    input.value = e.target.value;
    input.isValid = this.checkValidity(input.value, input.validation);
    input.isTouched = true;
    form[inputIndex] = input;

    let isFormValid = true;
    for (let input in form) {
      isFormValid = form[input].isValid && isFormValid;
    }
    this.setState({
      form: form,
      isFormValid: isFormValid
    });
  };

  resetForm = () => {
    const form = { ...this.state.form };
    for (let inputId in form) {
      let input = { ...form[inputId] };
      input.value = "";
      form[inputId] = input;
    }
    this.setState({
      form: form
    });
  };

  render() {
    return (
      <Overlay>
        <Wrapper>
          <Container>
            <CloseBtn onClick={this.props.onClose} />
            <h3>feel free to contact me</h3>
            <form>
              {this.state.form.map((input, i) => (
                <Input
                  key={input.id}
                  inputtype={input.inputType}
                  inputConfig={input.inputConfig}
                  value={input.value}
                  isValid={input.isValid}
                  isTouched={input.isTouched}
                  changed={e => this.inputChangedHandler(e, i)}
                />
              ))}
              <Button title="send" disabled={!this.state.isFormValid} />
            </form>
          </Container>
        </Wrapper>
      </Overlay>
    );
  }
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 2rem;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.secondary};
  border-radius: 1rem;
  padding: 3rem 1rem;
  box-sizing: border-box;
  position: relative;

  h3 {
    opacity: 0.2;
    margin-bottom: 3rem;
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  right: -1rem;
  top: -1rem;
  background-color: ${props => props.theme.primary};
  cursor: pointer;

  &::before {
    content: "";
    height: 2rem;
    width: 0.5rem;
    border-radius: 5rem;
    background-color: ${props => props.theme.secondary};

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    content: "";
    height: 2rem;
    width: 0.5rem;
    border-radius: 5rem;
    background-color: ${props => props.theme.secondary};

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:active {
    background-color: ${props => props.theme.tertiary};
  }
`;