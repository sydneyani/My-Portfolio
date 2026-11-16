import React from 'react';

const skillGroups = [
  {
    label: 'Languages and applications',
    items: ['C#', '.NET', 'Flutter', 'Dart', 'Python', 'SQL', 'JavaScript', 'React'],
  },
  {
    label: 'Data platform',
    items: ['Snowflake', 'dbt', 'Azure', 'Databricks', 'GitHub Actions'],
  },
  {
    label: 'Analytics, ML, and applied AI',
    items: ['pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'PyTorch', 'Transformers', 'Flask', 'OpenAI API'],
  },
  {
    label: 'Practices',
    items: ['ETL and data validation', 'Data warehousing', 'REST APIs', 'Prompt engineering', 'RAG', 'LLM integration'],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills" data-aos="fade-up">
      <h2>Skills</h2>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div key={group.label} className="skill-group">
            <h3>{group.label}</h3>
            <ul className="language-list">
              {group.items.map((item) => (
                <li key={item} className="language">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
