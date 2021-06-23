import React from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getCounterState } from "../store/counter/selectors";

const ModalWrapper = styled.div`
	margin-bottom: 2rem;
	max-width: 100%;
	width: 300px;
`;

const ModalContent = styled.div`
	margin: auto;
	border-radius: 23px;
	padding: 20px;
	color: #f1f1f1;
	background: rgba( 255, 255, 255, 0.25 );
	box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
	backdrop-filter: blur( 4px );
	-webkit-backdrop-filter: blur( 4px );
`;

const Title = styled.h1`
	font-size: 2rem;
	padding: 0;
	margin: 0 0 10px 0;
`;

const Body = styled.div`
	font-size: 1rem;
`

function MyModal() {

	const counter = useSelector(getCounterState);

  return (
    <ModalWrapper>
			<ModalContent>
				<Title>
					Counter
				</Title>
				<Body>
					{counter}
				</Body>
			</ModalContent>
		</ModalWrapper>
  );
}

export default MyModal;