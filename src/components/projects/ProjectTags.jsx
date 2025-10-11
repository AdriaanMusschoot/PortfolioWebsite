/* Style Imports */
import '../../styles/projects/ProjectTags.css';

/* HTML */
export default function ProjectTags({ tags }) {
  return (
    <div className="project-tags">
        {
          tags.map((tag) => (
            <p key={tag}>
              {tag}
            </p>
          ))
        }
    </div>
  )
};