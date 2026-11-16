import React from 'react';
import { focusAreas } from '../data/profile';

function About() {
  return (
    <section className="about" id="about">
      <div className="section-heading">
        <p className="section-index">01</p>
        <h2>About</h2>
      </div>
      <div className="about-lead">
        <p>
          I have 5+ years of enterprise technology experience across data warehousing, BI, software engineering, and applied machine learning. I work in Snowflake every day, apply AI to data validation and engineering workflows, and build applications in C#, Flutter, and Python.
        </p>
        <p>Currently a BI – Data Warehouse Developer at NOV/Auredia.</p>
        <p>
          The public projects are the work I can show. Warehouse and application systems at NOV/Auredia stay in private company repositories.
        </p>
      </div>
      <div className="focus-grid">
        {focusAreas.map((area) => (
          <article key={area.title} className="focus-card">
            <h3>{area.title}</h3>
            <p>{area.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
