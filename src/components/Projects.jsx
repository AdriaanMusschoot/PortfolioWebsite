/* React Imports */
import React, { useState, useEffect } from 'react';
import { ReactComponent as CrossButton } from '../assets/svg/smallcross_icon.svg';

/* Project Card Data */
import MainProjects from '../data/MainProjects.json';
import SmallProjects from '../data/SmallProjects.json';

/* Project Details */
import SnailsAndPotions from './cards/SnailsAndPotions.jsx';
import Amugen from './cards/Amugen.jsx';
import Vulkan from './cards/Vulkan.jsx';
import Raymarcher from './cards/Raymarcher.jsx';
import PhysicsPrediction from './cards/PhysicsPrediction.jsx';
import SouperHero from './cards/Souperhero.jsx';
import Tectonic from './cards/Tectonic.jsx';
import RideOfGiri from './cards/RideOfGiri.jsx';
import GetCooked from './cards/GetCooked.jsx';
import BFG from './cards/BFG.jsx';

/* Style Imports */
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
    'Get Cooked!': <GetCooked />,
    'BFG - 3D Action Game': <BFG />,
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
      {/* Main Projects Section */}
      <h2>Most Relevant Projects</h2>
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
      {/* Small Projects Section */}
      <h3>Other Projects</h3>
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
      <div className='card-wrapper'>
        {/* Description Section */}
        {activeProject !== null && (
          <div className={`card-background ${transitioning ? 'transitioning' : 'active'}`} onClick={closeCard}>
            <div
              className='card'
              onClick={(event) => event.stopPropagation()}
            >
              <CrossButton className="cross-button" onClick={closeCard}/>
              <div className='cardDetails'>
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
          </div>
        )}
      </div>
    </div>
  );
}
