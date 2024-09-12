import React from 'react';

function Experience() {
  const experienceList = [
    {
      company: 'National Oilwell Varco (NOV) / Auredia',
      title: 'Data Science / Software Engineering Intern | Intern',
      location: 'Houston, Texas',
      time: 'Present',
      description: ['TBD'],
    },
    {
      company: 'National Oilwell Varco (NOV)',
      title: 'Human Resources Technology Project Specialist | Full Time',
      location: 'Houston, Texas',
      time: 'Jan 2024 – Aug 2024',
      description: [
        'Primary technical support for global interfaces/reports enhancing user productivity',
        'Manage and lead various new projects for data efficiency',
        'Perform audits through Excel to ensure company data has no implications',
        'Analyze daily production server competency, optimizing performance and reliability',
        'Learn useful skills in applying different ideas to mitigate similar outcomes',
        'Provide front-end technical support via Jira and Oracle ensuring efficient operations',
      ],
    },
    {
      company: 'National Oilwell Varco (NOV)',
      title: 'Human Resources Technology Analyst | Intern',
      location: 'Houston, Texas',
      time: 'Jan 2023 – Dec 2023',
      description: [
        'Analyzed daily production server competency, optimizing performance and reliability',
        'Learned useful skills in applying different ideas to mitigate similar outcomes',
        'Provided front-end technical support via Jira and Oracle ensuring efficient operations',
      ],
    },
    {
      company: 'National Oilwell Varco (NOV)',
      title: 'Human Resources Administrative Assistant | Intern',
      location: 'Houston, Texas',
      time: 'Aug 2022 – Dec 2022',
      description: [
        'Digitized numerous classified documents to remove excess files prior to 2017',
        'Took part in hosting the National Oilwell Varco Engineering career fair at the University of Houston - Main Campus',
      ],
    },
  ];

  return (
    <section className="experience" data-aos="fade-up">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experienceList.map((experience, index) => (
          <div key={index} className="experience-tile">
            <h3>{experience.company}</h3>
            <p><strong>{experience.title}</strong> | {experience.location}</p>
            <p>{experience.time}</p>
            <ul>
              {experience.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
