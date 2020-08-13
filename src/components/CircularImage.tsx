import React from 'react';

interface Props {
  [attr: string] : any
}

export default function (props: Props) {
  return (
    <div className='circular-image'>
      <img {...props} />
    </div>
  );
}