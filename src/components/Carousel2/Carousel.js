import React from "react";
import styled, { keyframes, css } from "styled-components";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    const orderArray = new Array(4).fill(0);

    for (let i = 0; i < orderArray.length; i++) {
      orderArray[i] = i;
    }
    orderArray[orderArray.length - 1] = -1;

    this.state = {
      position: 0,
      itemsNbr: 4,
      isSliding: false,
      orderArray
    };
  }

  changeOrder = direction => {
    const orderArray = [...this.state.orderArray];
    switch (direction) {
      case "next":
        const lastEle = orderArray[orderArray.length - 1];
        orderArray.pop();
        orderArray.unshift(lastEle);
        this.setState({
          orderArray,
          position:
            this.state.position === this.state.itemsNbr
              ? 0
              : this.state.position + 1
        });
        break;

      case "previous":
        const firstEle = orderArray[0];
        orderArray.shift();
        orderArray.push(firstEle);
        this.setState({
          orderArray,
          position:
            this.state.position === 0
              ? this.state.itemsNbr
              : this.state.position - 1
        });
        break;

      default:
        return;
    }
  };

  onButtonClick = direction => {
    const { position, itemsNbr } = this.state;
    switch (direction) {
      case "next":
        this.changeOrder("next");
        break;

      case "previous":
        this.changeOrder("previous");
        break;

      default:
        return;
    }
  };

  render() {
    console.log(this.state.position);
    return (
      <Container>
        <Slot position={this.state.position}>
          <ItemPicture order={this.state.orderArray[0]} color="red">
            0
          </ItemPicture>
          <ItemPicture order={this.state.orderArray[1]} color="blue">
            1
          </ItemPicture>
          <ItemPicture order={this.state.orderArray[2]} color="green">
            2
          </ItemPicture>
          <ItemPicture order={this.state.orderArray[3]} color="yellow">
            3
          </ItemPicture>
        </Slot>

        <Control>
          <button onClick={() => this.onButtonClick("previous")}>
            Previous
          </button>
          <button onClick={() => this.onButtonClick("next")}>Next</button>
        </Control>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid blue;
  position: relative;
`;

const Slot = styled.div`
  position: absolute;
  top: 0;
  left: calc(-50% - 2rem);
  bottom: 30%;
  border: 1px solid black;
  transition: all 1s ease-out;

  animation: ${props =>
      props.position === 0
        ? reset
        : props.position === 1
        ? slideRight
        : slideLeft}
    2s linear;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ItemPicture = styled.div`
  width: 60vw;
  height: 100%;
  background-color: ${props => props.color};
  /* border: 1px solid yellow; */
  /* &:not(:last-child) {
    margin-right: 2rem;
  } */
  margin-right: 2rem;

  order: ${props => props.order};

  font-size: 5rem;
  color: white;
`;

const Control = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const slideRight = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(60vw);
  }
`;

const slideLeft = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-60vw);
  }
`;

const reset = keyframes`
to {
  transform: translateX(0);
}
`;
