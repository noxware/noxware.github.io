import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import FakeCodeEditor from './FakeCodeEditor';

class AnimationStep {
  constructor(public before: string, public text: string, public after: string, public speed: number) {}
}

interface Props {
  steps: AnimationStep[];
}

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
  const [code, setCode] = useState('');
  const [height, setHeight] = useState(0);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!height && editorRef.current) {
      setHeight(editorRef.current.offsetHeight);
    }
  }, [height]);

  useEffect(() => {
    function resize2Handler() {
      setHeight(0);
    }

    window.addEventListener('resize', resize2Handler);
    return () => window.removeEventListener('resize', resize2Handler);
  }, []);

  useEffect(() => {
    let stepInterval:number;
    let stepIndex = 0;

    let currentStep = props.steps[stepIndex];
    let textIterator = createTextIterator(currentStep);

    function setNextInterval() {
      clearInterval(stepInterval);

      stepIndex++;
      currentStep = props.steps[stepIndex];
      if (currentStep) {
        textIterator = createTextIterator(currentStep);
        stepInterval = window.setInterval(stepIntervalHandler, currentStep.speed);
      }
    }

    function stepIntervalHandler() {
      const result = textIterator.next();

      if (!result.done) {
        setCode(result.value);
      } else {
        setNextInterval();
      }
    }

    stepInterval = window.setInterval(stepIntervalHandler, currentStep.speed);

    return () => clearInterval(stepInterval);
  }, []);

  const finalStep = props.steps[props.steps.length - 1];
  const finalCode = finalStep.before + finalStep.text + finalStep.after;

  return <FakeCodeEditor code={height? code : finalCode} ref={editorRef} style={height ? {height: height} : undefined}></FakeCodeEditor>
}