import React from "react";
import styled from "styled-components";

import phone from "../assets/phone.svg";

export default class Work extends React.Component {
  render() {
    return (
      <section style={{ padding: 0, height: "100%" }} id="work">
        <h3>Recent work</h3>
        <Phone src={phone} alt="phone" />
      </section>
    );
  }
}

const Phone = styled.img`
  height: 100vh;
`;
