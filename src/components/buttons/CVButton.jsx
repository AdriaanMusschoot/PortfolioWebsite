/* Data Imports */
import { ReactComponent as CVLogo } from '../../assets/svg/CV.svg';
import CV from '../../assets/CV_20241005_AdriaanMusschoot_Public.pdf';

/* HTML */
export default function CVButton() {
  return (
    <a href={CV} target="_blank" rel="noopener noreferrer">
        <CVLogo className='svg' />
    </a>
  )
};