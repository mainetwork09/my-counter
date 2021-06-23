import React from 'react';
import logo from './images/logo.svg';
import './css/App.css';
import ShowCounter from './components/ShowCounter';
import ButtonCounter from './components/ButtonCounter';

import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: 1fr 1fr;
`


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ShowCounter />
        <ButtonWrapper>
          <ButtonCounter type="increase" />
          <ButtonCounter type="decrease" />
        </ButtonWrapper>
      </header>
    </div>
  );
}

export default App;
