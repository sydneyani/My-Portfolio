import React from 'react';

const certifications = [
  'NVIDIA DLI — Building RAG Agents with LLMs (2025)',
  'NVIDIA DLI — NLP Fundamentals (2025)',
];

function Education() {
  return (
    <section className="education" id="education" data-aos="fade-up">
      <h2>Education</h2>
      <div className="education-grid">
        <article className="education-card">
          <h3>University of Houston</h3>
          <p>
            <strong>M.S. Engineering Data Science &amp; AI</strong>
            <span className="education-meta">GPA 3.8 · Dec 2025</span>
          </p>
          <p>
            <strong>B.S. Computer Information Systems</strong>
          </p>
          <p>
            <a
              href="https://github.com/sydneyani/university-coursework"
              target="_blank"
              rel="noopener noreferrer"
            >
              University coursework (2021–2025)
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
