import React from 'react';
import './Skills.css';
import reactImage from '../../assets/react.png';
import htmlCss from '../../assets/html-css.png';
import figma from '../../assets/figma.png';
import wordpress from '../../assets/wordpress.png';
import node from '../../assets/node.png';
import sql from '../../assets/sql-server.png';
import js from '../../assets/js.png';
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
    <div className="my-skills">
      <h1>My Skills</h1>
      <p>
        Crafting seamless digital experiences with a versatile skill set.
      </p>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.title} className="skill">
            <img src={skill.icon} alt={skill.title} className="skill-icon" />
            <p className="skill-title">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
