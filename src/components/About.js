import React from 'react';

const focusAreas = [
  {
    title: 'Snowflake BI and data warehousing',
    body: 'Daily warehouse development, including Snowflake’s built-in AI for data validation, and support for consolidating ERP data into OneBI.',
  },
  {
    title: 'Data validation',
    body: 'A Python Flask application with Snowflake SSO and the Snowflake API for ETL readiness checks, delta-variance analysis, and cross-column comparisons. LLM-assisted workflows flag schema mismatches and variance spikes across multiple ERP systems.',
  },
  {
    title: 'Applied AI',
    body: 'AI enablement lead for the group, including training sessions, and AI automation in GitHub Actions workflows.',
  },
  {
    title: 'Software and analytics engineering',
    body: 'Applications in C# and Flutter, REST API automation, and Python/SQL analytics. Machine learning pipelines with pandas, NumPy, scikit-learn, and XGBoost for forecasting and classification, on Azure, with occasional Databricks use.',
  },
];

function About() {
  return (
    <section className="about" id="about">
      <h2>What I work on</h2>
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
