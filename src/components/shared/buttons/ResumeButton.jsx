/* Style Imports */
import './ResumeButton.css';

/* HTML */
export default function ResumeButton(){
    return (
        <a href='./assets/Profile/CV_AdriaanMusschoot.pdf' target="_blank" rel="noopener noreferrer">
            <p className='download-resume-button'>
                Download Resume
            </p>
        </a>
    )
}