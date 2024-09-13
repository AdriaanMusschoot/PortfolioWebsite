import React, { useState } from 'react';
import projects from '../data/projects.json';

export default function ProjectCard() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the card if it's already open
    } else {
      setActiveIndex(index); // Open the clicked card
    }
  };

  return (
    <div className='projects'>
      {
        projects.map((project, index) => (
          <div
            key={index}
            className={`projectCard-container ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className='projectCard-container_image'>
              <img src={project.image} alt={project.title} />
            </div>
            <div className='projectCard-container_title'>
              <h3>{project.title}</h3>
            </div>

            {/* Description section that slides in from the side */}
            <div className={`projectCard-description ${activeIndex === index ? 'active' : ''}`}>
              <p>{project.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}