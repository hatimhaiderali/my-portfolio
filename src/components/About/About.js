import React from 'react';
import './About.css'; // Import the CSS for this component
import '@fortawesome/fontawesome-free/css/all.min.css';
import displayPicture from '../../assets/dp.jpg'


const About = () => (
  <section className="about-container" id='about'>

    <div className="content">
      <h1 className=''>I am Hatim</h1>
      <h2 className='gradient-text'>Web Developer + UX Designer</h2>
      <p>Passionate web developer and UX designer dedicated to crafting intuitive and impactful digital experiences. Let's bring your ideas to life!</p>
      <a href={`${process.env.PUBLIC_URL}/cv.pdf`} download>
        <button>Download CV     <i className='fas fa-download'></i> </button>
      </a>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/hatim-haider-ali-03b493317/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/Haateeem/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
      </div>
    </div>
    <div className="image-container">
      <img src={displayPicture} alt="Gerold" />
    </div>
    <div className="letter-container">
      <div className="letter h">H</div>
      <div className="letter i">I</div>
    </div>

  </section>
);

export default About;
