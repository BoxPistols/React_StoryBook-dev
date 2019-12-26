import React, { useState, useCallback } from "react";
// import styled from 'styled-components';
import styled, { css, keyframes } from 'styled-components'


const Header = styled.header`
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;
  color: #FFC507;
  background: #353B41;
`;

const Button = styled.button`
  font-size: 1.5rem;
  padding: 1rem 3rem;
  text-align: center;
  color: ghostwhite;
  background: teal;
  border-radius: 3rem;
`;


export interface ButtonProps {
  text: string;
  flag?: boolean;
  /** ボタンを押した時のイベントハンドラ */
  action(): void;
}

const ButtonComp = (props: ButtonProps) => {
  const { text, flag, action } = props;
  const [count, countChg] = useState(0);
  const countUp = useCallback(() => countChg(prev => prev + 1), []);
  const countDown = useCallback(() => countChg(prev => prev - 1), []);

  return (
    <div>

      <Header>Head</Header>

      {flag && <p>{text}</p>}
      <Button onClick={action}>ボタン</Button>

      <p>count:{count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
};

export default ButtonComp;
