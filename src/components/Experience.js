import React from 'react';
import { experience } from '../data/profile';

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-heading">
        <p className="section-index">02</p>
        <h2>Experience</h2>
      </div>
      <div className="experience-list">
        {experience.map((role) => (
          <article key={`${role.title}-${role.time}`} className="experience-tile">
            <header className="experience-heading">
              <div>
                <h3>{role.title}</h3>
                <p className="experience-org">
                  {role.company}
                  <span aria-hidden="true"> · </span>
                  <span>{role.location}</span>
                </p>
              </div>
              <p className="experience-time">{role.time}</p>
            </header>
            <ul>
              {role.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
