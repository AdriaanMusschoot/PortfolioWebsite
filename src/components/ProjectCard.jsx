import React, { useState, useEffect } from 'react';
import projects from '../data/projects.json';
import '../styles/App.css';
import SnailsAndPotions from './SnailsAndPotions.jsx';
import Amugen from './Amugen.jsx';
import Vulkan from './Vulkan.jsx';
import Pacman from './Pacman.jsx';

export default function ProjectCard() {

  const [activeIndex, setActiveIndex] = useState(null);

  const getDescriptionComponent = (descriptionId) => {
    switch(descriptionId )
    {
    case 0:
      return <SnailsAndPotions
              activeIndex={activeIndex}
             />;
    case 1:
      return <Amugen
             />; 
    case 2: 
      return <Vulkan
          />;             
    case 3: 
      return <Pacman
          />;             

    default:
      return <div></div>
    }
  }

  const [imageSrc, setImageSrc] = useState('./assets/CrossDefault.png');

  const handleMouseOver = () => {
    setImageSrc('./assets/CrossHovered.png');
  };

  const handleMouseOut = () => {
    setImageSrc('./assets/CrossDefault.png');
  };



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
        projects.map((project, index) => {
          return (
            <div
              key={index}
              className={`projectCard-container ${activeIndex === index ? 'active' : ''} `}
              onClick={() => openClickedCard(index)}
            >
              {/* Image Section */}
              <div className='projectCard-container_image'>
                <img src={project.image} alt={project.title} />
              </div>

              {/* Title Section */}
              <div className='projectCard-container_title'>
                <h3>{project.title}</h3>
              </div>

              {/* Description Section */}
              <div className={`projectCard-description ${activeIndex === index ? 'active' : ''}`}
                  onClick={closeOpenCard}>
                <div className='backdrop' />
                <div 
                  className='content'
                  onClick={(event) => event.stopPropagation()}
                >
                  <img alt='x' 
                    src={imageSrc}
                    className='button-img'
                    onClick={closeOpenCard}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  />
                  <div
                    className='description' >
                    {getDescriptionComponent(index)}
                  </div>
                  
                  <img alt='x' 
                    src={imageSrc}
                    className='button-img'
                    onClick={closeOpenCard}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  />
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );

}