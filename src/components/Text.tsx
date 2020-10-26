import { Interface } from "readline";

import React from 'react';

interface Props {
  html?:boolean;
  children?: React.ReactNode
  className?: string;
}

export default function ({html, children, className}: Props) {
  let spanChildren: React.ReactNode;
  let innerHtml: string | undefined;

  if (html) {
    if (typeof children === 'string') {
      innerHtml = children;
    } else {
      throw new Error(`'html' flag provided but 'children' is not a string.`)
    }
  } else {
    spanChildren = children;
  }

  return <span className={className} dangerouslySetInnerHTML={innerHtml ? {__html: innerHtml} : undefined}>{spanChildren}</span>
}