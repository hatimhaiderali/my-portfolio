import React from 'react';
import Header from './components/Header/Header';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Testimonials from './sections/Testimonials/testimonials';
import './index.css'; // Import global styles


const App = () => (
  <div>
    <Header />
    <About />
    <Projects />
    <Skills />
    {/*    <Test /> */}
    <Testimonials />
    <Contact />
  </div>
);

export default App;
