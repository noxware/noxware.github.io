import React from 'react';
import CircularImage from '../components/CircularImage';
import Quote from '../components/Quote';

export default function () {
  return (
    <div className='about'>
      <h1>About me</h1>
      <div className='speak'>
        <CircularImage alt='cat' src='https://www.miamiherald.com/living/pets/g4tdgu/picture135751113/alternates/FREE_1140/dribbling-cat'/>
        <blockquote>
          <p>
              I am a 21 years old developer from Uruguay who has been interested in programming since young.
            I had my first contact with the world of programming at the age of 12 and I began to learn how to
            program for real at the age of 15 thanks to the help of 2 friends who taught me about
            open source software.
          </p>
          <p>
              From there, I started to learn all kinds of things that interested me, from web development to
            assembly language and electronics.
          </p>
          <p>
              I love programming and I am always learning things as I need them for something.
            Learning new things related to technology is always a pleasure.
            The satisfaction of seeing something created by oneself, working, is indescribable.
          </p>
        </blockquote>
      </div>
    </div>
  );
}