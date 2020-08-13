import React, { CSSProperties } from 'react';

interface StylesAliases {
  [name: string]: CSSProperties | undefined
}

interface Props {
  stylesAliases?: StylesAliases
  code: string
}

export default function (props: Props) {
  let {code, stylesAliases} = props;

  stylesAliases = stylesAliases || {};

  let currentInlineStyle: CSSProperties = {}
  const resultSpans: JSX.Element[] = [];

  props.code.split('%').forEach((t, i) => {
    if (i % 2 === 0) {
      resultSpans.push(<span key={i /* Positions are not going to change */} style={currentInlineStyle}>{t}</span>);
    } else {
      currentInlineStyle = (props.stylesAliases as StylesAliases)[t] || currentInlineStyle;
    }
  });

  return (
    <div className="fake-code-editor">
      <div className="top-bar">xxx</div>
      <div className="code" style={{}}>
        {resultSpans}
      </div>
    </div>
  )
}