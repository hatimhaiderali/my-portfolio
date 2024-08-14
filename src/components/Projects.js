import React from 'react';
import './Projects.css'; // Import the CSS for this component

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <h2 className="section-title">Projects</h2>
      <div className="project-card">
        <img src="path/to/image.jpg" alt="Project" />
        <div className="project-info">
          <h3>Project Title</h3>
          <p>Project description...</p>
          <a href="https://github.com/your-repo" className="btn">View Project</a>
        </div>
      </div>
      {/* Add more project cards as needed */}
    </div>
  </section>
);

export default Projects;
