import React from 'react';

interface Props {
  icon?: string
  title: string
  text?: string
}

export default function (props: Props) {
  return (
    <div className='skill-item'>
      <img src={props.icon} alt={`${props.title || ''} icon`}/>
      <span className='title'>{props.title}</span>
      {props.text && <span className='text'>{props.text}</span>}
    </div>
  );
}