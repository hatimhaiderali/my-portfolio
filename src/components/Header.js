import React from 'react';
import './Header.css'; // Import the CSS for this component

const Header = () => (
  <header>
    <div className="container">
      <h1>Hatim Haider Ali</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;
