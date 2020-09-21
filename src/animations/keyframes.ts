import {keyframes} from 'styled-components';

export function showFromFactory(x: number, y: number) {
  return keyframes`
    0% {
      transform: translate(${x}px, ${y}px);
      opacity: 0%;
    }
    100% {
      transform: translate(0, 0);
      opacity: 100%;
    }
  `
}

export const showFromLeft = showFromFactory(-50, 0);
export const showFromRight = showFromFactory(50, 0);
export const showFromTop = showFromFactory(0, -50);
export const showFromBottom = showFromFactory(0, 50);
