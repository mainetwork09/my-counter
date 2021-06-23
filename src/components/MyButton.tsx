import React, { Component, MouseEvent } from 'react';
import styled from "styled-components";
//import { useDispatch } from "react-redux";
//import { increaseCounter } from "../store/counter/actions";

type ButtonProps = {
  text: string,
  type: string
}

type ButtonState = {
  counter: number,
}

const Button = styled.button`
	font-size: 18px;
	border-radius: 18px;
	outline: none;
	border: 0;
	padding: 12px 24px;
`


class MyButton extends Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = { counter: 0 };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event: MouseEvent){
    event.preventDefault();
    this.setState( (state) => ({
      counter: state.counter + 1
    }));
  }
  
  render() {
    //const { counter } = this.state;
    return <Button onClick={this.handleButtonClick}>
      {this.props.text}
    </Button>
  }
}

export default MyButton;