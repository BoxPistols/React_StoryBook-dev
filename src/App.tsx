import React from 'react';
import logo from './logo.svg';
import './styles/main.sass';
import styled, { css, keyframes } from 'styled-components'


const Header = styled.header`
  font-size: 1.5rem;
  padding: 2rem;
  text-align: center;
  // color: tomato;
  // background: #353B41;
`;


const animation = keyframes`
  0% {
    opacity: 0;
  }

  100 {
    opacity: 1;
  }
`

const animationRule = css`
  ${animation} 1s infinite alternate;
`

const Component = styled.div`
  background: teal;
  color: red;
  animation: ${animationRule};
`

const ExtendedComponent = styled(Component)`
  color: black;
`

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Component>
          <Header><ExtendedComponent>Head</ExtendedComponent></Header>
        </Component>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wel <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
