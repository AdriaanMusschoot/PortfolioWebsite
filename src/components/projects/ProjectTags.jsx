/* Style Imports */
import './ProjectTags.css';

/* HTML */
export default function ProjectTags({ tags }) {
  return (
    <div className="project-tags">
        {
          tags.map((tag) => (
            <p className='tag' key={tag}>
              {tag}
            </p>
          ))
        }
    </div>
  )
};