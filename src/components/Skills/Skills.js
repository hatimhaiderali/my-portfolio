import React from 'react';
import './Skills.css';
import reactImage from '../../assets/react.png';
import htmlCss from '../../assets/html-css.png';
import figma from '../../assets/figma.png';
import wordpress from '../../assets/wordpress.png';
import node from '../../assets/node.png';
import sql from '../../assets/sql-server.png';
import js from '../../assets/js.png';
import python from '../../assets/python.png';
import c from '../../assets/c-.png';
const Skills = () => {
  const skills = [
    {
      icon: htmlCss, // Replace with your HTML/CSS logo
      title: 'HTML/CSS',
    },
    {
      icon: js, // Replace with your JavaScript logo
      title: 'JavaScript',
    },
    {
      icon: reactImage, // Replace with your React logo
      title: 'React',
    },
    {
      icon: node, // Replace with your Node.js logo
      title: 'Node.js',
    },
    {
      icon: python, // Replace with your Node.js logo
      title: 'Python',
    },
    {
      icon: c, // Replace with your Node.js logo
      title: 'C++',
    },
    {
      icon: figma, // Replace with your Figma logo
      title: 'Figma',
    },
    {
      icon: wordpress, // Replace with your WordPress logo
      title: 'WordPress',
    },
    {
      icon: sql, // Replace with your SQL logo
      title: 'SQL',
    },
  ];

  return (
    <section id='skills' className="skills-container">
      <h1 className='gradient-text'>My Skills</h1>
      <p>
        Crafting seamless digital experiences with a versatile skill set.
      </p>
      <div className="my-skills-container">
        {skills.map((skill) => (
          <div key={skill.title} className="skill">
            <img src={skill.icon} alt={skill.title} className="skill-icon" />
            <p className="skill-title">{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
