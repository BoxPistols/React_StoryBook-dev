import React from "react";
import styled from 'styled-components'

// const pxRem = df_size / 10 * 0.625 + 'rem';
const default_size = 16;
const pxRem = 1 / default_size;

const Head1 = styled.div`
  font-size: ${90 * pxRem}rem;
  /* font-size: ${90 * pxRem + `rem`}; */
  /* padding:  ${12 * pxRem + `rem`} ${16 * pxRem + `rem`}; */
`;

const Head2 = styled.div`
  font-size: ${60 * pxRem}rem;
`;

const Head3 = styled.div`
  font-size: ${48 * pxRem}rem;
`;

const Font2 = styled.div`
  font-size: 1em;
  padding: 1em 3em;
`;

export interface FontProps {
  text: string;
}

const FontComp = (props: FontProps) => {
  const { text } = props;
  return (
    <div>
      <Head1>{ text }</Head1>
      <Head2>{ text }</Head2>
      <Head3>{ text }</Head3>
      <Font2>{ text }</Font2>
    </div>
  );
};

export default FontComp;
