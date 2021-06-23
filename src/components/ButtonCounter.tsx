
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "../store/counter/actions";
import { getCounterState } from "../store/counter/selectors";

interface ButtonProps {
	type?: string;
	text?: string;
}

const defaultProps = {
	type: 'increase',
	text: 'Increase'
};

const Button = styled.button`
	font-size: 18px;
	border-radius: 18px;
	outline: none;
	border: 0;
	padding: 12px 24px;
	background-color: #ffffff;
	transition: all .3s ease-in-out;
	text-transform: capitalize;

	&:hover {
		background-color: #12ddff;
	}
`

const ButtonCounter: React.FC<ButtonProps> = ({type="increase", text="Increase"}: ButtonProps) => {
	const dispatch = useDispatch();
	const counter = useSelector(getCounterState);

	const handleButtonClick = () => {
		let dp = (type === "increase") ? 
			increaseCounter(counter):
			decreaseCounter(counter);
		dispatch(dp);
	};

	return (<Button onClick={handleButtonClick}>
		{type}
	</Button>);
};

ButtonCounter.defaultProps = defaultProps;

export default ButtonCounter;