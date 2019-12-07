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

class LikeButton extends React.Component {
  render() {
    return (
      <span>いいねボタン予定地</span>
    );
  }
}

// ReactDom.render(
//   <LikeButton />,
//   document.getElementById("like-button")
// );

interface Props {
  title: string
}

const FunctionalComponent: React.FC<Props> = (props) => {
  return (
    <div>
      {props.title}
    </div>
  );
}

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
        {FunctionalComponent({title: "HELLO FC"})}
      <LikeButton />
    </div>
  );
}
export default App;
