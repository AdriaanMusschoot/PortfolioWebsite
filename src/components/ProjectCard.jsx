import React, { useState, useEffect } from 'react';
import projects from '../data/projects.json';
import '../styles/App.css';
import SnailsAndPotions from './SnailsAndPotions.jsx';
import Amugen from './Amugen.jsx';
import Vulkan from './Vulkan.jsx';
import Raymarcher from './Raymarcher.jsx'

export default function ProjectCard() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  const getDescriptionComponent = (descriptionId) => {
    switch (descriptionId) {
      case 0: return <SnailsAndPotions activeIndex={activeIndex} />;
      case 1: return <Amugen activeIndex={activeIndex}/>;
      case 2: return <Vulkan activeIndex={activeIndex}/>;
      case 3: return <Raymarcher activeIndex={activeIndex}/>
      default: return <div></div>;
    }
  };

  useEffect(() => {
    document.body.classList.toggle('no-scroll', activeIndex !== null);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && activeIndex !== null) {
        closeCard();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('no-scroll');
    };
  }, [activeIndex]);

  const closeCard = () => {
    setTransitioning(true);
    setTimeout(() => {
      setActiveIndex(null);
      setTransitioning(false);
    }, 500); // Match this duration with your CSS transition time
  };

  const openClickedCard = (index) => {
    setTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => {
      setTransitioning(false);
    }, 0); // Set to 0 to allow the transition to take effect
  };

  const isCardActive = (index) => (activeIndex === index ? 'active' : '');

  return (
    <div className='projects'>
      <div className="mainproj-wrapper">
        {
          projects.map((project, index) => {
            const IsSmallClass = project.main ? '' : 'mainproj-container--small';
            return (
              <div
                key={index}
                className={`mainproj-container ${isCardActive(index)} ${IsSmallClass}`}
                onClick={() => openClickedCard(index)}
              >
                {/* Image Section */}
                <div className='mainproj-container_image'>
                  <img src={project.image} alt={project.title} />
                  {/* Specifics Section */}
                  {project.specifics.length > 0 && (
                    <div className="mainproj-container_specifics">
                      <ul>
                        {project.specifics.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {/* Title Section */}
                <div className='mainproj-container_title'>
                  {project.title}
                </div>
                <div className='mainproj-container_date'>
                  {project.date}
                </div>
              </div>
            );
          })
        }
      </div>
      {/* Description Section */}
      {activeIndex !== null && (
        <div className={`projectCard-description ${transitioning ? 'transitioning' : 'active'}`} onClick={closeCard}>
          <div className='backdrop' />
          <div
            className='content'
            onClick={(event) => event.stopPropagation()}
          >
            <svg
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
              className='button-img'
              onClick={closeCard}
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g className='img-fill' transform="translate(-467.000000, -1039.000000)" fill="#FF0000">
                  <path d="M489.396,1061.4 C488.614,1062.18 487.347,1062.18 486.564,1061.4 L479.484,1054.32 L472.404,1061.4 C471.622,1062.18 470.354,1062.18 469.572,1061.4 C468.79,1060.61 468.79,1059.35 469.572,1058.56 L476.652,1051.48 L469.572,1044.4 C468.79,1043.62 468.79,1042.35 469.572,1041.57 C470.354,1040.79 471.622,1040.79 472.404,1041.57 L479.484,1048.65 L486.564,1041.57 C487.347,1040.79 488.614,1040.79 489.396,1041.57 C490.179,1042.35 490.179,1043.62 489.396,1044.4 L482.316,1051.48 L489.396,1058.56 C490.179,1059.35 490.179,1060.61 489.396,1061.4 Z M485.148,1051.48 L490.813,1045.82 C492.376,1044.26 492.376,1041.72 490.813,1040.16 C489.248,1038.59 486.712,1038.59 485.148,1040.16 L479.484,1045.82 L473.82,1040.16 C472.257,1038.59 469.721,1038.59 468.156,1040.16 C466.593,1041.72 466.593,1044.26 468.156,1045.82 L473.82,1051.48 L468.156,1057.15 C466.593,1058.71 466.593,1061.25 468.156,1062.81 C469.721,1064.38 472.257,1064.38 473.82,1062.81 L479.484,1057.15 L485.148,1062.81 C486.712,1064.38 489.248,1064.38 490.813,1062.81 C492.376,1061.25 492.376,1058.71 490.813,1057.15 L485.148,1051.48 Z" />
                </g>
              </g>
            </svg>
            <h1>{projects[activeIndex].title}</h1>
            <div>
              {projects[activeIndex].specifics.length > 0 && 
                (
                <div className="mainproj-container_specifics">
                  <ul>
                    {projects[activeIndex].specifics.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
                )
              }
            </div>
            <div className='description'>
              {getDescriptionComponent(activeIndex)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
