/* React Imports */
import FeaturedWorkText from './FeaturedWorkText.jsx';
import ProjectTags from '../ProjectTags.jsx';

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
            <h2><span className='highlight'>Featured</span> Work</h2>
            {
                FeaturedProjects.map((project, index) => (
                    <div key={project.id} className={`${FeaturedProjectName} ${index % 2 === 0 ? 'odd' : 'even'}`}>
                        <FeaturedWorkText project={project}/>
                        <div className='img-button-container'>
                            <img className={`thumbnail ${project.id}`} src={project.image} alt={project.title} />
                            <h4 className='explore-project-button' onClick={() => ActivateProjectCallback(project)}>
                                Explore Project
                            </h4>
                            <ProjectTags tags={project.specifics} />
                            <p className='date'>{project.date}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
