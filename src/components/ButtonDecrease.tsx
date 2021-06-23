
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decreaseCounter } from "../store/counter/actions";
import { getCounterState } from "../store/counter/selectors";

const Button = styled.button`
	font-size: 18px;
	border-radius: 18px;
	outline: none;
	border: 0;
	padding: 12px 24px;
`


const ButtonDecrease = () => {
	const dispatch = useDispatch();
	let counter = useSelector(getCounterState);

	const handleButtonClick = () => {
		dispatch(decreaseCounter(counter));
	};

	return (<Button onClick={handleButtonClick}>
		Decrease
	</Button>);

}

export default ButtonDecrease;