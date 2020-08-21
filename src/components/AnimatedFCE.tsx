import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import FakeCodeEditor from './FakeCodeEditor';

class AnimationStep {
  constructor(public before: string, public text: string, public after: string, public speed: number) {}
}

interface Props {
  steps: AnimationStep[];
}

const RESIZE_TIMEOUT = 250;

function* createTextIterator(step: AnimationStep) {
  let current = '';
  let className = false;

  for (const c of step.text) {
    if (c == '%') {
      className = !className;
      current += c;
    }
    else if (className) {
      current += c;
    }
    else {
      current += c;
      yield step.before + current + step.after;
    }
  }
}

export default function (props: Props) {
  const {steps} = props;

  const [code, setCode] = useState('');
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

  let currentStepIndex = 0;
  let currentStep = steps[0];

  useEffect(() => {
    const textIter = createTextIterator(currentStep);

    const animationHandler = () => {
      const nextCode = textIter.next();

      if (!nextCode.done) {
        i = window.setTimeout(animationHandler, currentStep.speed);
        setCode(nextCode.value);
      }
    }

    let i = window.setTimeout(animationHandler, currentStep.speed);

    return () => clearTimeout(i);
  }, [steps]);

  const lastStep = steps[steps.length - 1];
  const finalCode = lastStep.before + lastStep.text + lastStep.after;

  return <FakeCodeEditor code={height? code : finalCode} ref={editorRef} style={height ? {height: height} : undefined} />
}