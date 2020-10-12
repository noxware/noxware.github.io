import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Fira Code', monospace;
  font-size: 1.1em;
  background-color: black;
  border-radius: 10px;
  color: white;
  padding: 15px;
`

const TopBar = styled.div`
  margin-bottom: 5px;
`

/*
  k (keyword)
  d (variable definition)
  o (operator) symbols like = => + etc
  v (variable)
  v2
  p (property)
  s (string)
  n (number)
  b (boolean)
  c (comment)
  i (cursor)
*/

const Code = styled.div`
  line-height: 1.2;

  pre { // ?
    white-space: pre-wrap; 
  }

  .k {
    color: rgb(230, 205, 105);
  }

  .d {
    color: rgb(85, 181, 219)
  }

  .o {
    color: rgb(159, 202, 86)
  }

  .v {
    color: #55b5db
  }

  .v2 {
    color: rgb(160, 116, 196)
  }

  .p {
    color: rgb(160, 116, 196)
  }

  .s {
    color: rgb(85, 181, 219)
  }

  .n {
    color: rgb(205, 63, 69)
  }

  .b {
    color: #cd3f45
  }

  .c {
    color: rgb(65, 83, 91)
  }

  .i::after {
    display: inline-block;
    content: ' ';
    background-color: white;
  }
`

interface Props {
  code: string;
  style?: React.CSSProperties;
  className?: string;
}

export default React.forwardRef<HTMLDivElement, Props>((props, ref)=>{
  const codeLines: string[] = props.code.split('\n');
  const codeLinesOfTokens: string[][] = codeLines.map(l => l.split('%'));

  let currentClass = 'x'
  const resultPres = codeLinesOfTokens.map((lineTokens, j) => {
    let resultSpans: JSX.Element[] = [];

    lineTokens.forEach((t, i) => {
      if (i % 2 === 0) {
        resultSpans.push(<span key={i /* Positions are not going to change */} className={currentClass}>{t}</span>);
      } else {
        currentClass = t.trim();
      }
    });

    return <pre key={j}>{resultSpans}</pre>
  });

  return (
    <Container className={`fce ${props.className}`} style={props.style} ref={ref}>
      <TopBar className="top-bar">
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14">
          <g fill="none" fillRule="evenodd" transform="translate(1 1)">
            <circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle>
            <circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle>
            <circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle>
          </g>
        </svg>
      </TopBar>
      <Code className="code">
        {resultPres}
      </Code>
    </Container>
  )
});