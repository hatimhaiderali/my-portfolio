import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './index.css'; // Import global styles

const App = () => (
  <div>
    <Header />
    <About />
    {/*  <Projects /> */}
    <Skills />
    <Contact />
  </div>
);

export default App;
