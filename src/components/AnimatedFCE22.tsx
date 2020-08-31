import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import FakeCodeEditor from './FakeCodeEditor';

export class AnimationStep {
  constructor(public before: string, public text: string, public after: string, public speed: number) {}
}

export class ASComposition {
  private _steps: AnimationStep[] = [];
  private _before: string = '';
  private _after: string = '';
  private _speed: number = 0;
  private _cursor: string = '';

  cursor(c: string) {
    this._cursor = c;
    return this;
  }

  speed(msPerChar: number) {
    this._speed = msPerChar;
    return this;
  }

  write(text: string) {
    const splittedText = text.split('$');

    if (splittedText.length === 2) {
      this._steps.push(new AnimationStep(this._before, splittedText.join(''), this._cursor + this._after, this._speed));
      this._before = this._before + splittedText[0];
      this._after = splittedText[1] + this._after;
    } else {
      this._steps.push(new AnimationStep(this._before, text, this._cursor + this._after, this._speed));
      this._before = this._before + text + this._after;
      this._after = '';
    }

    return this;
  }

  finish() {
    return this._steps;
  }
}

const RESIZE_TIMEOUT = 250;

function* createTextIterator(step: AnimationStep) {
  let current = '';
  let className = false;

  for (const c of step.text) {
    if (c === '%') {
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

interface Props {
  steps: AnimationStep[];
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

  useEffect(() => {
    let currentStepIndex = 0;
    let currentStep = steps[0];
    let textIter = createTextIterator(currentStep);

    const animationHandler = () => {
      const nextCode = textIter.next();

      if (!nextCode.done) {
        i = window.setTimeout(animationHandler, currentStep.speed);
        setCode(nextCode.value);
      } else {
        currentStepIndex++;
        currentStep = steps[currentStepIndex];
        textIter = createTextIterator(currentStep);

        if (currentStep)
          i = window.setTimeout(animationHandler, 0);
      }
    }

    let i = window.setTimeout(animationHandler, currentStep.speed);

    return () => clearTimeout(i);
  }, [steps]);

  const lastStep = steps[steps.length - 1];
  const finalCode = lastStep.before + lastStep.text + lastStep.after;

  return <FakeCodeEditor code={height? code : finalCode} ref={editorRef} style={height ? {height: height} : undefined} />
}