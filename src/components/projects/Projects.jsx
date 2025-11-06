/* React Imports */
import React, { useState, useEffect } from 'react';
import { ReactComponent as CrossButton } from '../../assets/svg/smallcross_icon.svg';
import FeaturedWork from './featuredwork/FeaturedWork.jsx';
import ProjectGrid from './projectgrid/ProjectGrid.jsx';
import ProjectTags from './ProjectTags.jsx';
import ButtonLinkContainer from './shared/projectButtons/ButtonLinkContainer.jsx';

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
import './ProjectInfo.css';

export default function ProjectCard() {
  
  const [activeProject, setActiveProject] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  const projectCardMap = {
    'Snails & Potions': <SnailsAndPotions />,
    '2D Engine': <Amugen />,
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
    }, 500); // Match this duration with the CSS transition time
  };

  const openClickedCard = (project) => {
    setTransitioning(true);
    setActiveProject(project);
    setTimeout(() => {
      setTransitioning(false);
    }, 0); // Set to 0 to allow the transition to take effect
  };

    return (
        <section id='projects' className='projects'>
            <FeaturedWork ActivateProjectCallback={openClickedCard} />
            <ProjectGrid ActivateProjectCallback={openClickedCard} />
                {activeProject !== null && (
                    <div className={`card-popup-window ${transitioning ? 'transitioning' : 'active'}`}>
                        <div className='background' onClick={closeCard}>
                        <div className='card' onClick={(event) => event.stopPropagation()}>
                            <div className='header'>
                                <h1>{activeProject.title}</h1>
                                <CrossButton className="cross-button" onClick={closeCard}/>
                            </div>
                            <div className='links-tags-date'>
                                <ButtonLinkContainer links={activeProject.links}/>
                                <div className='tags-date'>
                                    <p className='date'>{activeProject.date}</p>
                                    <ProjectTags tags={activeProject.specifics} />
                                </div>
                            </div>
                            <div className='description'>
                                {projectCardMap[activeProject.title]}
                            </div>
                        </div>
                        </div>
                    </div>
                )}
        </section>
    );
}
