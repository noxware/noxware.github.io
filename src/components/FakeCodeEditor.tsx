import React from 'react';

interface Props {
  code: string;
  style?: React.CSSProperties;
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
    <div className="fce" style={props.style} ref={ref}>
      <div className="top-bar">
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14">
          <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
            <circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle>
            <circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle>
            <circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle>
          </g>
        </svg>
      </div>
      <div className="code">
        {resultPres}
      </div>
    </div>
  )
});