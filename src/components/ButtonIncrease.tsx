
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increaseCounter } from "../store/counter/actions";
import { getCounterState } from "../store/counter/selectors";

const Button = styled.button`
	font-size: 18px;
	border-radius: 18px;
	outline: none;
	border: 0;
	padding: 12px 24px;
	background-color: #00ddff;

	&:hover {
		background-color: #12ddff;
	}
`

const ButtonIncrease = () => {
	const dispatch = useDispatch();
	let counter = useSelector(getCounterState);

	const handleButtonClick = () => {
		dispatch(increaseCounter(counter));
	};

	return (<Button onClick={handleButtonClick}>
		Increase
	</Button>);

}

export default ButtonIncrease;