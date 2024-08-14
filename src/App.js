import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css'; // Import global styles

const App = () => (
  <div>
    <Header />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </div>
);

export default App;
