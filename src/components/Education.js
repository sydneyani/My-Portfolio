import React from 'react';
import { certifications, education } from '../data/profile';

function Education() {
  return (
    <section className="education" id="education">
      <div className="section-heading">
        <p className="section-index">04</p>
        <h2>Education &amp; certifications</h2>
      </div>
      <div className="education-grid">
        <article className="education-card">
          <h3>{education.school}</h3>
          <p className="education-span">{education.span}</p>
          {education.degrees.map((degree) => (
            <p key={degree.name}>
              <strong>{degree.name}</strong>
              {degree.detail ? <span className="education-meta">{degree.detail}</span> : null}
            </p>
          ))}
          <p>
            <a href={education.coursework.href} target="_blank" rel="noopener noreferrer">
              {education.coursework.label}
            </a>
          </p>
        </article>
        <article className="education-card">
          <h3>Certifications</h3>
          <ul>
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Education;
