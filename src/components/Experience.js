import React from 'react';

const experienceList = [
  {
    company: 'NOV/Auredia',
    title: 'BI – Data Warehouse Developer',
    location: 'Houston, TX',
    time: 'Apr 2026 – Present',
    description: [
      'Work in Snowflake daily, using Snowflake’s built-in AI for data validation.',
      'AI enablement lead for the group, running training sessions.',
      'Built a Python Flask app with Snowflake SSO and the Snowflake API for ETL readiness checks, delta-variance analysis, and cross-column comparisons.',
      'LLM-assisted validation workflows that flag schema mismatches and variance spikes across multiple ERP systems.',
      'AI automation in GitHub Actions workflows, and support for ERP consolidation into OneBI.',
    ],
  },
  {
    company: 'NOV/Auredia',
    title: 'Data Scientist / Software Engineer',
    location: 'Houston, TX',
    time: 'Oct 2024 – Mar 2026',
    description: [
      'Primary languages were C# and Flutter, with Python and SQL for analytics.',
      'Built ML pipelines with pandas, NumPy, scikit-learn, and XGBoost for forecasting and classification.',
      'Built REST API automation services.',
      'Used Azure heavily and Databricks occasionally.',
    ],
  },
  {
    company: 'NOV',
    title: 'HR Technology Project Specialist (SQL Engineer)',
    location: 'Houston, TX',
    time: 'Aug 2021 – Sep 2024',
    description: [
      'Automated SQL internal auditing and reporting systems, reducing manual effort by ~50%.',
    ],
  },
];

function Experience() {
  return (
    <section className="experience" id="experience" data-aos="fade-up">
      <h2>Experience</h2>
      <div className="experience-list">
        {experienceList.map((experience) => (
          <article key={`${experience.company}-${experience.time}`} className="experience-tile">
            <header className="experience-heading">
              <h3>{experience.title}</h3>
              <p className="experience-time">{experience.time}</p>
            </header>
            <p className="experience-org">
              {experience.company}
              <span aria-hidden="true"> · </span>
              <span className="experience-location">{experience.location}</span>
            </p>
            <ul>
              {experience.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
