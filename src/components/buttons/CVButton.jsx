/* Data Imports */
import { ReactComponent as CVLogo } from '../../assets/SVG/CV.svg';
import CV from '../../assets/Profile/20251508_CV_AdriaanMusschoot_Public.pdf';

/* HTML */
export default function CVButton() {
  return (
    <a href={CV} target="_blank" rel="noopener noreferrer">
        <CVLogo className='svg' />
    </a>
  )
};