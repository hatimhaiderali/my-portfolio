import React from 'react';
import './About.css'; // Import the CSS for this component
import '@fortawesome/fontawesome-free/css/all.min.css';


const About = () => (
  <div className="about-container">
    <div className="content">
      <h1 className=''>I am Hatim</h1>
      <h2 className='gradient-text'>Web Developer + UX Designer</h2>
      <p>Passionate web developer and UX designer dedicated to crafting intuitive and impactful digital experiences. Let's bring your ideas to life!</p>
      <a href='/cv.pdf' download><button>Download CV     <i className='fas fa-download'></i> </button></a>
      <div className="social-links">
        {/* <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a> */}
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        {/* <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a> */}
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
      </div>
    </div>
    <div className="image-container">
      <img src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gerold" />
    </div>
  </div>
);

export default About;
