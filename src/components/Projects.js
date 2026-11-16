import React from 'react';
import { projects } from '../data/profile';

function ProjectCard({ project }) {
  return (
    <article className={`project${project.flagship ? ' project-flagship' : ''}`}>
      <div className="project-meta">
        {project.flagship ? <span className="status">Flagship</span> : null}
        {project.repo !== project.name ? (
          <span className="repo-slug">{project.repo}</span>
        ) : null}
      </div>
      <h3>
        <a href={project.href} target="_blank" rel="noopener noreferrer">
          {project.name}
        </a>
      </h3>
      <p>{project.summary}</p>
      <ul className="chip-list" aria-label={`${project.name} technologies`}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <a className="repo-link" href={project.href} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </article>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <p className="section-index">05</p>
        <h2>Projects</h2>
      </div>
      <p className="section-lead">
        Personal and academic repositories. Enterprise systems at NOV/Auredia stay in private company environments.
      </p>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.repo} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
