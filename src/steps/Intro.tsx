import React, { useEffect, useState } from 'react';
import AnimatedFCE from '../components/AnimatedFCE';

const bigCode = `%k%import %d%api%x%, {%d%decrypt%x%} %k%from %s%'api'%x%;
 
%k%async function %d%main%x%() {
  %k%const %d%data %o%= %k%await %v%api%x%.%p%get%x%(%s%'data'%x%);
  %k%const %d%decryptedData %o%= %v%data%x%.%p%map%x%(%d%d %o%=> %v%decrypt%x%(%v2%d%x%));
  %k%const %d%awesomeData %o%= %v%decryptedData%x%.%p%filter%x%(%d%d %o%=> %v2%d%x%.%p%type %o%== %s%'awesome'%x%);
   
  %k%for %x%(%k%const %d%d %k%of %v%awesomeData%x%)
    %k%if %x%(%v2%d%x%.%p%wisdom%x%)
      %v%console%x%.%p%log%x%(%v2%d%x%.%p%wisdom%x%);
}
 
%v%main%x%();
 
%c%// Output: This Javascript animation looks nice!`;

const smallCode = `%k%import %x%{%d%get%x%} %k%from %s%'api'%x%;
 
%k%async function %d%main%x%() {
  %k%const %d%data %o%= %k%await %v%get%x%(%s%'data'%x%);
   
  %k%for %x%(%k%const %d%d %k%of %v%data%x%)
    %k%if %x%(%v2%d%x%.%p%wisdom%x%)
      %v%console%x%.%p%log%x%(%v2%d%x%.%p%wisdom%x%);
}
 
%v%main%x%();
 
%c%/* Output: This Javascript animation is different and better in a device with higer resolution, like a desktop computer. */`;

export default function () {
  const getCode = () => window.innerWidth < 600 ? smallCode : bigCode;

  const [code, setCode] = useState(getCode());

  useEffect(() => {
    const handleResize = () => setCode(getCode());
    
    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='intro'>
      <h1>Franco Profeti</h1>
      <h2>Developer from Uruguay passionate about open source technologies</h2>
      <AnimatedFCE steps={[{before: '', text: code, after: '%i%', speed: 20}]} />
    </div>
  );
}