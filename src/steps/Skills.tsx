import React from 'react';
import SkillCategory from '../components/SkillCategory';
import SkillItem from '../components/SkillItem';

import langs from '../data/skills-langs.json';
import libs from '../data/skills-libs.json';

export default function () {
  return (
    <div className='skills'>
      <h1>Skills</h1>
      <SkillCategory title='Programming and markup languages'>
        {
          langs.map(l => <SkillItem key={l.title} icon={l.icon} title={l.title}/>)
        }
      </SkillCategory>

      <SkillCategory title='Libraries and frameworks'>
        {
          libs.map(l => <SkillItem key={l.title} icon={l.icon} title={l.title}/>)
        }
      </SkillCategory>
    </div>
  );
}