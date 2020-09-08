import React, { useState, useRef } from 'react';
import CircularImage from '../components/CircularImage';

import VSensor from 'react-visibility-sensor';

const P_TEXTS = [
  `I am a 21 years old developer from Uruguay who has been interested in programming since young.
  I had my first contact with the world of programming at the age of 12 and I began to learn how to
  program for real at the age of 15 thanks to the help of 2 friends who taught me about
  open source software.`,

  `From there, I started to learn all kinds of things that interested me, from web development to
  assembly language and electronics.`,

  `I love programming and I am always learning things as I need them for something.
  Learning new things related to technology is always a pleasure.
  The satisfaction of seeing something created by oneself, working, is indescribable.`
]

export default () => {
  const [paragraphAnimation, setParagraphAnimation] = useState('');
  const [imageAnimation, setImageAnimation] = useState('');

  const paragraphs = P_TEXTS.map((t, i) => <p key={i} className={`paragraph ${paragraphAnimation} animated`}>{t}</p>);

  const visibilityHandler = (visible: boolean) => {
    if (visible) {
      if (window.innerWidth < 730) {
        setParagraphAnimation('show-from-bottom');
        setImageAnimation('show-from-bottom');
      } else {
        setParagraphAnimation('show-from-right');
        setImageAnimation('show-from-left');
      }
    }
  }

  return (
    <div className='about step'>
      <h1 className='title'>About me</h1>
        <VSensor onChange={visibilityHandler} partialVisibility>
          <div className='speak'>
            <CircularImage className={`${imageAnimation} animated`} alt='cat' src='https://www.miamiherald.com/living/pets/g4tdgu/picture135751113/alternates/FREE_1140/dribbling-cat'/>
            <blockquote className='paragraph-list'>
              {paragraphs}
            </blockquote>
          </div>
        </VSensor>
    </div>
  );
}