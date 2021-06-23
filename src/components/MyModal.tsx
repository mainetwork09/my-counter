import React from 'react';
import styled from "styled-components";

type Props = {
  title: string,
	message: string
}

const ModalWrapper = styled.div`
	display: none;
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	height: 100vh;
	background-color: rgba( 0, 0, 0, 0.6);
	align-items: center;
`;

const ModalContent = styled.div`
	margin: auto;
	width: 300px;
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
	margin-bottom: 1rem;
`

const Button = styled.button`
	font-size: 18px;
	border-radius: 18px;
	outline: none;
	border: 0;
	padding: 12px 24px;
`

function MyModal({ title, message }: Props) {
  return (
    <ModalWrapper>
			<ModalContent>
				<Title>
					{title}
				</Title>
				<Body>
					{message}
				</Body>
				<Button>Close</Button>
			</ModalContent>
		</ModalWrapper>
  );
}

export default MyModal;