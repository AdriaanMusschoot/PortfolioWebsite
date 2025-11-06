/* React Imports */
import React from 'react';
import FeaturedSnailsAndPotions from './individual/FeaturedSnailsAndPotions.jsx';
import FeaturedBFG from './individual/FeaturedBFG.jsx';
import FeaturedGetCooked from './individual/FeaturedGetCooked.jsx';

/* Style Imports */
import './FeaturedWorkText.css';

/* HTML */
export default function FeaturedWorkText({ children, project }) {
  const highlightClassName = 'highlight';

  const FeaturedWorkMap = {
    'Snails & Potions': <FeaturedSnailsAndPotions highlightClassName={highlightClassName} />,
    'BFG - 3D Action Game': <FeaturedBFG highlightClassName={highlightClassName} />,
    'Get Cooked!': <FeaturedGetCooked highlightClassName={highlightClassName} />,
  }

  return (
    <div className='featured-work-text'>
        {
            FeaturedWorkMap[project.title]
        }
    </div>
  )
};