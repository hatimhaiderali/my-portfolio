import React from 'react';
import './Header.css'; // Import the CSS for this component
import logo from '../../assets/h_icon.png'

const Header = () => (
  <header>
    <div className="header-container">
      <div className="email-div">
        <img src={logo} alt='H' width={40} height={40} />
        <a href="mailto:hatimhaiderali786@gmail.com">hatimhaiderali786@gmail.com</a>
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a className='contact-a' href="#contact">Contact Me</a>
      </nav>
    </div>
  </header>
);

/* Sticky Header on Scroll */
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  }

  else {
    header.classList.remove('scrolled');
  }
});

export default Header;
