import React from 'react';

interface Props {
  close?: boolean
}

export default function ({close}: Props) {
  return (
    <span className='quote'>{!close ? '“' : '”'}</span>
  );
}