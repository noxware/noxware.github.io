import React from 'react';
import FakeCodeEditor from '../components/FakeCodeEditor';

export default function () {
  return (
    <div className='intro'>
      <h1>Franco Profeti</h1>
      <h2>Developer from Uruguay passionate about open source technologies</h2>
      <FakeCodeEditor code={`%k%import %d%api%x%, {%d%decrypt%x%} %k%from %s%'api'%x%;
 
%k%async function %d%main%x%() {
  %k%const %d%data %o%= %k%await %v%api%x%.%p%get%x%(%s%'data'%x%);
  %k%const %d%decryptedData %o%= %v%data%x%.%p%map%x%(%d%d %o%=> %v%decrypt%x%(%v2%d%x%));
  %k%const %d%awesomeData %o%= %v%decryptedData%x%.%p%filter%x%(%d%d %o%=> %v2%d%x%.%p%type %o%== %s%'awesome'%x%);
   
  %k%for %x%(%k%const %d%d %k%of %v%awesomeData%x%)
    %k%if %x%(%v2%d%x%.%p%wisdom%x%)
      %v%console%x%.%p%log%x%(%v2%d%x%.%p%wisdom%x%);
}
 
%v%main%x%();
 
%c%// Output: This Javascript animation looks nice!
      `} />
    </div>
  );
}