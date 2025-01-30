
import './Projects.css';
import admin from '../../assets/image3.png';
import hash from '../../assets/image.png';

const projects = [
  {
    image: admin,
    title: 'Admin Panel',
    link: 'https://github.com/kazmisohail/HospitalAdmin',
    description: "Dashboard of an admin panel for a hospital management system.",
  },
  {
    image: hash,
    title: 'File Security System',
    link: 'https://github.com/Haateeem/File-Hash-Utility/tree/master',
    description: "Hash Generator and file compromisation check using Flask Python.",
  },
  // Add more projects as needed
];

const Projects = () => (
  <section id='projects' className='projects-section'>
    <div className="projects-container">
      <h2 className="section-title gradient-text">My Recent Works</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View details of ${project.title}`}
          >
            <img src={project.image} alt={`Screenshot of ${project.title}`} />
            <div className="project-info">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;