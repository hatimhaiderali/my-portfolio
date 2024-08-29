import React from 'react';
import './Header.css'; // Import the CSS for this component

const Header = () => (
  <header>
    <div className="header-container">
      <div className="email">
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
