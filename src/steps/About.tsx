import React from 'react';
import CircularImage from '../components/CircularImage';
import Quote from '../components/Quote';

export default function () {
  return (
    <div className='about'>
      <h1>About me</h1>
      <div className='about-speak'>
        
        <p>
          <CircularImage alt='cat' src='https://www.miamiherald.com/living/pets/g4tdgu/picture135751113/alternates/FREE_1140/dribbling-cat'/>
          <Quote />
          Lorem ipsum dolor sit amet, culpa non mi, dolor amet sit. Wisi consectetuer risus.
          Tincidunt morbi, pede sapien, ac nunc. Id feugiat, fermentum libero amet, vehicula at.
          Sit elementum vestibulum. Eget pede eget, ac taciti, interdum varius.
        </p>
        <p>
          Non fusce nascetur, velit non. Fusce sem. Integer duis aliquet, orci magna, tincidunt wisi.
          Aliquam leo mollis, commodo massa vel. Ullamcorper mi turpis.
          <Quote close />
        </p>
      </div>
    </div>
  );
}