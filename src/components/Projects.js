import React from 'react';

function Projects() {
  const projectList = [
    
    {
      name: 'Scriptora',
      description: 'A web-based platform for code collaboration and chat integration.',
      link: 'https://scriptora-frontend.onrender.com/', // Scriptora link
      credentials: {
        username: 'test',
        password: '123'
      }
    },
    {
      name: 'Stitch',
      description: "Stitch utilizes Twitch TV's API and hosts streamers and incorporates tracked watch time to earn free cash!",
      link: 'https://stitch-tv.onrender.com/', // Stitch project link
      
    },
    {
      name: 'FormulAI',
      description: 'An AI-driven formula generator which preprocesses the excel file you upload, data scrapes, and gives you ANY formula upon your command.',
      link: 'https://formulai-mjtr.onrender.com/' // AI Chatbot link
    },
  ];

  return (
    <section className="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project">
            <h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>
            <p>{project.description}</p>

            {/* Only render credentials if they exist */}
            {project.credentials && (
              <div className="credentials">
                <p><strong>Username:</strong> {project.credentials.username}</p>
                <p><strong>Password:</strong> {project.credentials.password}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
