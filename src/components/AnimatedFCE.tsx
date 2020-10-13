import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import FakeCodeEditor from './FakeCodeEditor';

const RESIZE_TIMEOUT = 250;

function* createTextIterator(text: string) {
  let current = '';
  let className = false;

  for (const c of text) {
    if (c === '%') {
      className = !className;
      current += c;
    }
    else if (className) {
      current += c;
    }
    else {
      current += c;
      yield current;
    }
  }
}

interface Props {
  code: string;
  cursor: string;
  speed: number;
  className?: string;
}

export default function (props: Props) {
  const [currentCode, setCurrentCode] = useState('');
  const [height, setHeight] = useState(0);
  const editorRef = useRef<HTMLDivElement>(null);

  const resizeTimeout = useRef<number>();

  useEffect(()=> {
    const resizeHandler = () => {
      if (!resizeTimeout.current)
        resizeTimeout.current = window.setTimeout(() => {
          resizeTimeout.current = undefined;
          setHeight(0);
        }, RESIZE_TIMEOUT);
    }
    
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      window.clearTimeout(resizeTimeout.current);
    }
  }, []);

  useLayoutEffect(() => {
    if (!height && editorRef.current)
      setHeight(editorRef.current.offsetHeight);
  }, [height]);

  useEffect(() => {
    let textIter = createTextIterator(props.code);
    let i: number;

    const animationHandler = () => {
      const nextCode = textIter.next();

      if (!nextCode.done) {
        i = window.setTimeout(animationHandler, props.speed);
        setCurrentCode(nextCode.value + props.cursor);
      } /*else if (props.cursor) {
        setCurrentCode(c => c.slice(0, -props.cursor.length));
      }*/
    }

    i = window.setTimeout(animationHandler, props.speed);

    return () => clearTimeout(i);
  }, [props.code, props.speed, props.cursor]);

  return <FakeCodeEditor className={`animated-fce ${props.className}`} code={height? currentCode : props.code} ref={editorRef} style={height ? {height: height} : undefined} />
}