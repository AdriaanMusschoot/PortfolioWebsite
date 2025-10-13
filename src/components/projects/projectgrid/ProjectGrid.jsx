/* Data Imports */
import Projects from '../../../data/projects.json'
import ProjectTags from '../ProjectTags'

/* Style Imports */
import '../../../styles/projects/projectgrid/ProjectGrid.css'

/* HTIML */
export default function ProjectGrid({ ActivateProjectCallback }) {
    return (
        <div className='project-grid-wrapper'>
            <h2>Projects</h2>
            <div className="project-grid">
                {
                    Projects.map((project) => (
                        <div className='project' onClick={() => ActivateProjectCallback(project)}>
                            <img src={project.image} alt={project.title} />
                            <ProjectTags tags={project.specifics} />
                            <div className='text'>
                                <p className='title'>{project.title}</p>
                                <p className='date'>{project.date}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}