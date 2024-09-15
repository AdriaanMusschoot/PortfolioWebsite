import React, { useState, useEffect } from 'react';
import projects from '../data/projects.json';
import '../styles/App.css';

export default function ProjectCard() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    // Toggle body scrolling when a card is active
    document.body.classList.toggle('no-scroll', activeIndex !== null);

    // Cleanup function to ensure scrolling is re-enabled if the component is unmounted
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [activeIndex]);

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

            {/* Description section that slides up from the bottom */}
            <div className={`projectCard-description ${activeIndex === index ? 'active' : ''}`}>
              <p>{project.description}</p>
              <button onClick={() => setActiveIndex(null)}>Close</button>
            </div>
          </div>
        ))
      }

      {/* Backdrop for the card */}
      {activeIndex !== null && <div className='backdrop' onClick={() => setActiveIndex(null)}></div>}
    </div>
  );
}