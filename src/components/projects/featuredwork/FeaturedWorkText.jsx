/* React Imports */
import ProjectTags from '../ProjectTags.jsx'

import FeaturedSnailsAndPotions from './individual/FeaturedSnailsAndPotions.jsx';
import FeaturedBFG from './individual/FeaturedBFG.jsx';
import FeaturedGetCooked from './individual/FeaturedGetCooked.jsx';

/* Style Imports */
import '../../../styles/projects/featuredwork/FeaturedWorkText.css';

/* HTML */
export default function FeaturedWorkText({ project }) {
  const highlightClassName = 'highlight';

  const FeaturedWorkMap = {
    'Snails & Potions': <FeaturedSnailsAndPotions highlightClassName={highlightClassName} />,
    'BFG - 3D Action Game': <FeaturedBFG highlightClassName={highlightClassName} />,
    'Get Cooked!': <FeaturedGetCooked highlightClassName={highlightClassName} />,
  }

  return (
    <div className='featured-work-text'>
        <h3>{project.title}</h3>
        <ProjectTags tags={project.specifics} />
        {
          FeaturedWorkMap[project.title]
        }
    </div>
  )
};