import React from 'react';

function Languages() {
  const languages = ['Python', 'C#', 'SQL', 'React', 'Node.js', 'Express'];

  return (
    <section className="languages" data-aos="fade-up">
      <h2>Programming Languages</h2>
      <div className="language-list">
        {languages.map((language, index) => (
          <div key={index} className="language">
            {language}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Languages;
