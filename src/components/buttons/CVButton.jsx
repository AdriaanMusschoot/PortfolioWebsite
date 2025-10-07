/* Data Imports */
import { ReactComponent as CVLogo } from '../../assets/svg/CV_icon.svg';

/* HTML */
export default function CVButton() {
  return (
    <a href='./assets/Profile/CV_AdriaanMusschoot.pdf' target="_blank" rel="noopener noreferrer">
        <CVLogo className='svg' />
    </a>
  )
};