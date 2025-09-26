/* React Imports */
import React, { useState, useEffect } from 'react';
import { ReactComponent as CrossButton } from './Resources/cross-small.svg';

/* Project Card Data */
import MainProjects from '../../data/MainProjects.json';
import SmallProjects from '../../data/SmallProjects.json';

/* Project Details */
import SnailsAndPotions from '../cards/SnailsAndPotions/SnailsAndPotions.jsx';
import Amugen from '../cards/Amugen/Amugen.jsx';



import InstancedRendering from '../cards/InstancedRendering/InstancedRendering.jsx';
import Raymarcher from '../cards/RayMarcher/Raymarcher.jsx';
import PhysicsPrediction from '../cards/PhysicsPrediction/PhysicsPrediction.jsx';
import SouperHero from '../cards/SouperHero/Souperhero.jsx';
import Tectonic from '../cards/Tectonic/Tectonic.jsx';
import RideOfGiri from '../cards/RideOfGiri/RideOfGiri.jsx';
import GetCooked from '../cards/GetCooked/GetCooked.jsx';
import BFG from '../cards/BFG/BFG.jsx';

/* Style Imports */
import './Projects.css';
import '../cards/ProjectCard.css';

export default function ProjectCard() {
  const [activeProject, setActiveProject] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  const projectCardMap = {
    'Snails & Potions': <SnailsAndPotions />,
    'Amugen - Game Engine': <Amugen />,
    'Instanced Rendering': <InstancedRendering />,
    'Ray Marcher': <Raymarcher />,
    'Tectonic': <Tectonic />,
    'Souper Hero': <SouperHero />,
    'Trajectory Prediction': <PhysicsPrediction />,
    'Ride Of Giri': <RideOfGiri />,
    'Get Cooked!': <GetCooked />,
    'BFG - 3D Action Adventure Game': <BFG />,
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
