/* React Imports */
import FeaturedWorkText from './FeaturedWorkText.jsx';
import ProjectTags from '../ProjectTags.jsx';
import RewardsContainer from '../shared/rewards/RewardsContainer.jsx';
import { FWHighlight } from '../../shared/highlight.js';
import ButtonLinkContainer from '../shared/projectButtons/ButtonLinkContainer.jsx';

/* Data Imports */
import Projects from '../../../data/projects.json';

/* Style Imports */
import './FeaturedWork.scss';

/* HTML */
export default function FeaturedWork({ ActivateProjectCallback }) {

    const FeaturedProjects = Projects.filter(project => project.type === 'main');
    const FeaturedProjectName = 'featured-project';
    
    return (
        <div id='featured-work' className='featured-work'>
            <h2><FWHighlight>Featured</FWHighlight> Work</h2>
            {
                FeaturedProjects.map((project, index) => (
                    <div key={project.id} className={`${FeaturedProjectName} ${index % 2 === 0 ? 'odd' : 'even'}`}>
                        <div className='text-container'>
                            <ButtonLinkContainer links={project.links} />
                            <h3>{project.title}</h3>
                            <FeaturedWorkText project={project}/>
                        </div>
                        <div className='img-button-container'>
                            <img className={`thumbnail ${project.id}`} src={project.image} alt={project.title} />
                            <h4 className='explore-project-button' onClick={() => ActivateProjectCallback(project)}>
                                Explore Project
                            </h4>
                            <ProjectTags tags={project.specifics} />
                            <p className='date'>{project.date}</p>
                            <RewardsContainer rewards={project.rewards} />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
