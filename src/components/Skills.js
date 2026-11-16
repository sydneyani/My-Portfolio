import React from 'react';
import { skillGroups } from '../data/profile';

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-heading">
        <p className="section-index">03</p>
        <h2>Skills</h2>
      </div>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div key={group.label} className="skill-group">
            <h3>{group.label}</h3>
            <ul className="chip-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
