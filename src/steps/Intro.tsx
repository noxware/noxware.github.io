import React from 'react';
import FakeCodeEditor from '../components/FakeCodeEditor';

export default function () {
  return (
    <div className='intro'>
      <h1>Franco Profeti</h1>
      <h2>Young developer from Uruguay passionate about open source technologies</h2>
      <FakeCodeEditor code='hola mundo %pene% pene' stylesAliases={{pene: {color:'red'}}} />
    </div>
  );
}