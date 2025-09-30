/* Data Imports */
import { ReactComponent as CVLogo } from '../../assets/svg/CV.svg';

/* HTML */
export default function CVButton() {
  return (
    <a href='./assets/Profile/20251508_CV_AdriaanMusschoot_Public.pdf' target="_blank" rel="noopener noreferrer">
        <CVLogo className='svg' />
    </a>
  )
};