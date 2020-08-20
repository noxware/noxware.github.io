import react from 'react';

interface AnimationStep extends Array<string> {
  before: string;
  text: string;
  after: string;
  speed: number; // ms/char
}

interface Props {
  steps: AnimationStep[];
}

export default function (props: Props) {
  function* createTextIterator(step: AnimationStep) {
    let current = '';
    let className = false;

    for (const c of step.text) {
      if (c == '%') {
        className = !className;
      }
      else if (!className) {
        current += c;
        yield step.before + current + step.after;
      }
    }
  }

  
}