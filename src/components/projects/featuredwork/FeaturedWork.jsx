/* React Imports */
import FeaturedWorkText from './FeaturedWorkText.jsx';

/* Data Imports */
import Projects from '../../../data/projects.json';


/* Style Imports */
import '../../../styles/projects/featuredwork/FeaturedWork.css';

/* HTML */
export default function FeaturedWork({ ActivateProjectCallback }) {

  const FeaturedProjects = Projects.filter(project => project.type === 'main');
  const FeaturedProjectName = 'featured-project';
  
  return (
    <div id='featured-work' className='featured-work'>
        <h2><span className='highlight'>Featured</span> Work</h2>
        {
            FeaturedProjects.map((project, index) => (
              <div /* Div For the Whole Project Card */ onClick={() => ActivateProjectCallback(project)}>
                { index % 2 === 0 ? ( /* If the projects index is even, put the image on one side else put it on the other side */
                  <>
                    <div className={`${FeaturedProjectName} odd`}>
                      <FeaturedWorkText project={project}/>
                      <img className='featured-project-thumbnail' src={project.image} alt={project.title} />
                    </div>
                  </>
                ) :(
                  <>
                    <div className={`${FeaturedProjectName} even`}>
                      <img className='featured-project-thumbnail' src={project.image} alt={project.title} />
                      <FeaturedWorkText project={project}/>
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
