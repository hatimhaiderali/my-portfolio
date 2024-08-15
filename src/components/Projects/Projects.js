import React from 'react';
import './Projects.css'; // Import the CSS for this component

const Projects = () => (

  <div className="projects-container">
    <h2 className="section-title gradient-text">My Projects</h2>
    <p>
      We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
    </p>
    <div className="project-grid">
      <a href="https://github.com/your-repo-1" className="project-card">
        <img src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project 1" />
        <div className="project-info">
          <h3>Project Title 1</h3>
          <p>Project description...</p>
        </div>
      </a>
      <a href="https://github.com/your-repo-2" className="project-card">
        <img src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project 2" />
        <div className="project-info">
          <h3>Project Title 2</h3>
          <p>Project description...</p>
        </div>
      </a>
      <a href="https://github.com/your-repo-2" className="project-card">
        <img src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Project 2" />
        <div className="project-info">
          <h3>Project Title 2</h3>
          <p>Project description...</p>
        </div>
      </a>
      {/* Add more project cards as needed */}
    </div>
  </div>

);

export default Projects;
