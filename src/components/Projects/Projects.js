import React from 'react';
import './Projects.css'; // Import the CSS for this component
import admin from '../../assets/image3.png'; // Example local image
import hash from '../../assets/image.png'; // Example local image

const projects = [
  {
    image: admin,
    title: 'Admin Module of a Hospital Management System',
    link: 'https://github.com/kazmisohail/HospitalAdmin',
  },
  {
    image: hash,
    title: 'File Security System Using Python',
    link: 'https://github.com/Haateeem/File-Hash-Utility/tree/master',
  },
  // Add more projects as needed
];

const Projects = () => (
  <section id='projects' className='projects-section'>
    <div className="projects-container">
      <h2 className="section-title gradient-text">My Projects</h2>
      <p>
        We turn your ideas into engaging web projects that captivate and inspire.
      </p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.link} className="project-card" target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
