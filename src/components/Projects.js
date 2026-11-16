import React from 'react';

const featuredProjects = [
  {
    name: 'FormulAI',
    description:
      'Flask + OpenAI app that turns plain-language questions into Excel formulas from an uploaded workbook.',
    href: 'https://github.com/sydneyani/FormulAI',
    tags: ['Python', 'Flask', 'OpenAI'],
  },
  {
    name: 'NLP-Legal-Text-AI-Summarization-Model',
    description:
      'T5 abstractive and BERT extractive summarization of UK and Indian Supreme Court judgments, evaluated with ROUGE, BLEU, and BERTScore.',
    href: 'https://github.com/sydneyani/NLP-Legal-Text-AI-Summarization-Model',
    tags: ['Python', 'T5', 'BERT'],
  },
  {
    name: 'Realtime-API',
    description:
      'Browser voice agent on the OpenAI Realtime API, with a Node relay.',
    href: 'https://github.com/sydneyani/Realtime-API',
    tags: ['JavaScript', 'Node', 'OpenAI'],
  },
  {
    name: 'Tech-Solutions',
    description:
      'Full-stack railway management system: normalized MySQL schema, Express API, and React client for bookings, tickets, and SQL reports.',
    href: 'https://github.com/sydneyani/Tech-Solutions',
    tags: ['React', 'Express', 'MySQL'],
  },
  {
    name: 'SydneyAniProjects',
    description:
      'Data science portfolio: census-income classification, car-evaluation networks, speech emotion models, and SQL.',
    href: 'https://github.com/sydneyani/SydneyAniProjects',
    tags: ['SQL'],
  },
];

const inProgressProjects = [
  {
    name: 'snowflake-dbt-data-platform',
    description: 'End-to-end data pipeline.',
    href: 'https://github.com/sydneyani/snowflake-dbt-data-platform',
    tags: ['Snowflake', 'dbt'],
  },
  {
    name: 'rag-eval-assistant',
    description: 'LLM/RAG app with evaluations.',
    href: 'https://github.com/sydneyani/rag-eval-assistant',
    tags: ['RAG', 'LLM'],
  },
  {
    name: 'ml-forecasting-service',
    description: 'ML model served through an API.',
    href: 'https://github.com/sydneyani/ml-forecasting-service',
    tags: ['ML', 'API'],
  },
  {
    name: 'dotnet-flutter-app',
    description: 'C#/.NET API and Flutter mobile app.',
    href: 'https://github.com/sydneyani/dotnet-flutter-app',
    tags: ['C#', '.NET', 'Flutter'],
  },
];

function ProjectCard({ project, status }) {
  return (
    <article className="project">
      <div className="project-meta">
        <span className={`status status-${status === 'In progress' ? 'progress' : 'featured'}`}>
          {status}
        </span>
      </div>
      <h3>
        <a href={project.href} target="_blank" rel="noopener noreferrer">
          {project.name}
        </a>
      </h3>
      <p>{project.description}</p>
      <ul className="tag-list" aria-label={`${project.name} technologies`}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <a
        className="repo-link"
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        View repository
      </a>
    </article>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <p className="section-lead">
        Personal and academic repositories. Enterprise systems at NOV/Auredia stay in private company environments.
      </p>

      <p className="project-group-title">Featured</p>
      <div className="project-list">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} status="Featured" />
        ))}
      </div>

      <p className="project-group-title">In progress</p>
      <div className="project-list">
        {inProgressProjects.map((project) => (
          <ProjectCard key={project.name} project={project} status="In progress" />
        ))}
      </div>

      <p className="coursework-link">
        University coursework:{' '}
        <a
          href="https://github.com/sydneyani/university-coursework"
          target="_blank"
          rel="noopener noreferrer"
        >
          university-coursework
        </a>
        {' '}(B.S. Computer Information Systems and M.S. Engineering Data Science &amp; AI, University of Houston, 2021–2025).
      </p>
    </section>
  );
}

export default Projects;
