/* Data Imports */
import CVButton from '../buttons/cvbutton/CVButton.jsx';
import MailToButton from '../buttons/mailtobutton/MailToButton.jsx';
import LinkedInButton from '../buttons/linkedinbutton/LinkedInButton.jsx';
import GithubButton from '../buttons/githubbutton/GithubButton.jsx';

/* Style Imports */
import './Contact.css';

/* HTML */
export default function Contact() {
  return (
    <div className='contact'>
        <div className='contact-socials'>
            <MailToButton/>
            <LinkedInButton/>
            <CVButton/>
            <GithubButton/>
        </div>
    </div>
  )
};