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

  const closeOpenCard = (event) => {
    event.stopPropagation(); 
    setActiveIndex(null); 
  };

  const openClickedCard = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='projects'>
      {
        projects.map((project, index) => (
          <div
            key={index}
            className={`projectCard-container ${activeIndex === index ? 'active' : ''}`}
            onClick={() => openClickedCard(index)}
          >
            <div className='projectCard-container_image'>
              <img src={project.image} alt={project.title} />
            </div>
            <div className='projectCard-container_title'>
              <h3>{project.title}</h3>
            </div>

            <div className={`projectCard-description ${activeIndex === index ? 'active' : ''}`}
                            onClick={closeOpenCard} >
              <div 
                className='backdrop' 
              />
              <div 
                className='content'
                onClick={(event) => event.stopPropagation()}
              >
                <p>{project.description}</p>
              </div>
              <button onClick={closeOpenCard}>Close</button>
            </div>
          </div>
        ))
      }
    </div>
  );
}