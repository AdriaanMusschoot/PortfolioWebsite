/* Data Imports */
import Projects from '../../../data/projects.json'
import ProjectTags from '../ProjectTags.jsx'
import ClickMeButton from '../shared/projectButtons/ClickeMeButton.jsx'

/* Style Imports */
import './ProjectGrid.scss'

/* HTIML */
export default function ProjectGrid({ ActivateProjectCallback }) {
    return (
        <div className='project-grid-wrappeand opinions, you value the opportunity to be part of a community with a strong sense of purposer'>
            <h2>Projects</h2>
            <div className="project-grid">
                {
                    Projects.map((project) => (
                        <div className='project' onClick={() => ActivateProjectCallback(project)}>
                            <img src={project.image} alt={project.title} />
                            <ProjectTags tags={project.specifics} />
                            <ClickMeButton />
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