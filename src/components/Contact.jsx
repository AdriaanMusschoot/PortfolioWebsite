/* Data Imports */
import CVButton from './buttons/CVButton.jsx';
import MailToButton from './buttons/MailToButton.jsx';
import LinkedInButton from './buttons/LinkedInButton.jsx';
import GithubButton from './buttons/GithubButton.jsx';

/* Style Imports */
import '../styles/Contact.css';

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