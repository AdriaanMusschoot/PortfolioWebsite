import React, { useState, useEffect } from 'react';
import MainProjects from '../data/MainProjects.json';
import SmallProjects from '../data/SmallProjects.json';
import SnailsAndPotions from './SnailsAndPotions.jsx';
import Amugen from './Amugen.jsx';
import Vulkan from './Vulkan.jsx';
import Raymarcher from './Raymarcher.jsx';
import PhysicsPrediction from './PhysicsPrediction.jsx';
import SouperHero from './Souperhero.jsx';
import Tectonic from './Tectonic.jsx';
import RideOfGiri from './RideOfGiri.jsx';
import { ReactComponent as CrossButton } from '../assets/svg/cross-small.svg';

import '../styles/Projects.css';
import '../styles/ProjectCard.css';

export default function ProjectCard() {
  const [activeProject, setActiveProject] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  const projectCardMap = {
    'Snails & Potions': <SnailsAndPotions />,
    'Amugen - Game Engine': <Amugen />,
    'Instanced Rendering': <Vulkan />,
    'Ray Marcher': <Raymarcher />,
    'Tectonic': <Tectonic />,
    'Souper Hero': <SouperHero />,
    'Trajectory Prediction': <PhysicsPrediction />,
    'Ride Of Giri': <RideOfGiri />,
  };

  useEffect(() => {
    document.body.classList.toggle('no-scroll', activeProject !== null);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && activeProject !== null) {
        closeCard();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('no-scroll');
    };
  }, [activeProject]);

  const closeCard = () => {
    setTransitioning(true);
    setTimeout(() => {
      setActiveProject(null);
      setTransitioning(false);
    }, 500); // Match this duration with your CSS transition time
  };

  const openClickedCard = (project) => {
    setTransitioning(true);
    setActiveProject(project);
    setTimeout(() => {
      setTransitioning(false);
    }, 0); // Set to 0 to allow the transition to take effect
  };

  const isCardActive = (project) => (activeProject === project ? 'active' : '');

  return (
    <div className='projects'>
      <h2>Projects</h2>
      {/* Main Projects Section */}
      <h3>Main</h3>
      <div className="mainproj-wrapper">
        {MainProjects.map((project) => (
          <div
            className={`mainproj-container ${isCardActive(project)}`}
            onClick={() => openClickedCard(project)}
          >
            <div className='mainproj-container_image'>
              <img src={project.image} alt={project.title} />
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
            <div className='mainproj-container_title'>
              {project.title}
            </div>
            <div className='mainproj-container_date'>
              {project.date}
            </div>
          </div>
        ))}
      </div>
      <h3>Additional</h3>
      {/* Small Projects Section */}
      <div className="smallproj-wrapper">
        {SmallProjects.map((project) => (
          <div
            className={`smallproj-container ${isCardActive(project)}`}
            onClick={() => openClickedCard(project)}
          >
            <div className='smallproj-container_image'>
              <img src={project.image} alt={project.title} />
              {project.specifics.length > 0 && (
                <div className="smallproj-container_specifics">
                  <ul>
                    {project.specifics.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className='smallproj-container_title'>
              {project.title}
            </div>
            <div className='smallproj-container_date'>
              {project.date}
            </div>
          </div>
        ))}
      </div>
      <div className='descriptionWrapper'>
        {/* Description Section */}
        {activeProject !== null && (
          <div className={`projectCard-description ${transitioning ? 'transitioning' : 'active'}`} onClick={closeCard}>
            <div
              className='contentDetails'
              onClick={(event) => event.stopPropagation()}
            >
              <CrossButton className="cross-button" onClick={closeCard}/>
              <h1>{activeProject.title}</h1>
              {activeProject.specifics.length > 0 && 
                (
                <div className="projectContainer_specifics">
                  <ul>
                    {activeProject.specifics.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
                )
              }
              <div className='description'>
                {projectCardMap[activeProject.title]}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
