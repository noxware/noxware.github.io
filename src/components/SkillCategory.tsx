import React from 'react';

interface Props {
  title: string
  children: any
}

export default function (props: Props) {
  return (
    <div className="skill-category">
      <h3>{props.title}</h3>
      <div className='container'>
        {props.children}
      </div>
    </div>
  );
}