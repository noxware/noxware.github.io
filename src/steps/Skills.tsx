import React from 'react';
import SkillCategory from '../components/SkillCategory';
import SkillItem from '../components/SkillItem';

import langs from '../data/skills-langs.json';
import libs from '../data/skills-libs.json';

export default function () {
  return (
    <div className='skills'>
      <h1>Skills</h1>
      
      <div className='category'>
        <h2>Programming and markup languages</h2>
        <div className="items">
          {langs.map(l => <SkillItem key={l.title} icon={l.icon} title={l.title}/>)}
        </div>
        
      </div>
      <div className='category'>
        <h2>Libraries and frameworks</h2>
        <div className="items">
          {libs.map(l => <SkillItem key={l.title} icon={l.icon} title={l.title}/>)}
        </div>
      </div>
      
    </div>
  );
}