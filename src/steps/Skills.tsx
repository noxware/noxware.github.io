import React, { useState } from 'react';
import SkillItem from '../components/SkillItem';

import VSensor from 'react-visibility-sensor';

import langs from '../data/skills-langs.json';
import libs from '../data/skills-libs.json';

export default function () {
  const [progAnimation, setProgAnimation] = useState('');
  const [libsAnimation, setLibsAnimation] = useState('');

  return (
    <section className='skills step'>
      <h1 className='title'>Skills</h1>

      <VSensor onChange={(visible: boolean)=>{if (visible) setProgAnimation('show-from-bottom')}} partialVisibility>
        <section className={`category ${progAnimation} animated`}>
          <h2 className='subtitle'>Programming and markup languages</h2>
          <div className="items">
            {langs.map(l => <SkillItem key={l.title} icon={l.icon} title={l.title}/>)}
          </div>
          
        </section>
      </VSensor>

      <VSensor onChange={(visible: boolean)=>{if (visible) setLibsAnimation('show-from-bottom')}} partialVisibility>
        <section className={`category ${libsAnimation} animated`}>
          <h2 className='subtitle'>Libraries and frameworks</h2>
          <div className="items">
            {libs.map(l => <SkillItem key={l.title} icon={l.icon} title={l.title}/>)}
          </div>
        </section>
      </VSensor>
    </section>
  );
}