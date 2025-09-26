/* Data Imports */
import { ReactComponent as CVLogo } from './CV.svg';
import CV from './20251508_CV_AdriaanMusschoot_Public.pdf';

/* HTML */
export default function CVButton() {
  return (
    <a href={CV} target="_blank" rel="noopener noreferrer">
        <CVLogo className='svg' />
    </a>
  )
};