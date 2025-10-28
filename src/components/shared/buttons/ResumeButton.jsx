/* Data Imports */
import { ReactComponent as CVLogo } from '../../../assets/svg/CV_icon.svg';

/* Style Imports */
import './ResumeButton.css';

/* HTML */
export default function ResumeButton(){
    return (
        <a className='download-resume-button' href='./assets/Profile/CV_AdriaanMusschoot.pdf' target="_blank" rel="noopener noreferrer">
            <p>
                Download Resume
            </p>
        </a>
    )
}