import React, { useState } from 'react';
import './Header.css'; // Import the CSS for this component
import logo from '../../assets/h_icon.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className={`header-container ${menuOpen ? 'show' : ''}`}>
        <div className="email-div">
          <img src={logo} alt='H' width={40} height={40} />
          <a href="mailto:hatimhaiderali786@gmail.com" className='email'>hatimhaiderali786@gmail.com</a>
          <button className="menu-button gradient-text" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
          <a className='mob-contact-a' href="tel:+92 3012533883"><i class="fa-solid fa-phone"></i></a>
        </div>

        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#testimonials">Testimonials</a>
          <a className='contact-a' href="#contact">Contact Me</a>
        </nav>
      </div>
    </header>
  );
}

/* Sticky Header on Scroll */
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

export default Header;
