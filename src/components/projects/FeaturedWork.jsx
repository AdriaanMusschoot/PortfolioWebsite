/* React Imports */
import ProjectTags from '../projects/ProjectTags.jsx';

/* Project Card Data */
import Projects from '../../data/projects.json';

/* Style Imports */
import '../../styles/FeaturedWork.css';

export default function FeaturedWork() {

  const MainProjects = Projects.filter(project => project.type === 'main');
  const FeaturedProjectName = 'featured-project';
  
  return (
    <div id='featured-work' className='featured-work'>
        <h2>Featured Work</h2>
        {
            MainProjects.map((project, index) => (
              <div /* Div For the Whole Project Card */>
                { index % 2 === 0 ? ( /* If the projects index is even, put the image on one side else put it on the other side */
                  <>
                    <div className={`${FeaturedProjectName} odd`}>
                      <div className='featured-project-details'>
                        <h3>{project.title}</h3>
                        <ProjectTags tags={project.specifics} />
                      </div>
                      <img className='featured-project-thumbnail' src={project.image} alt={project.title} />
                    </div>
                  </>
                ) :(
                  <>
                    <div className={`${FeaturedProjectName} even`}>
                      <img className='featured-project-thumbnail' src={project.image} alt={project.title} />
                      <div className='featured-project-details'>
                        <h3>{project.title}</h3>
                        <ProjectTags tags={project.specifics} />
                      </div>
                    </div>
                  </>
                )
                }
              </div>
            ))
        }
    </div>
  );
}
