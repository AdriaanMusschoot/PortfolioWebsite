/* React Imports */
import Breaker from './Breaker.jsx';

/* Data Imports */
import CVButton from './buttons/CVButton.jsx';
import MailToButton from './buttons/MailToButton.jsx';
import LinkedInButton from './buttons/LinkedInButton.jsx';
import GithubButton from './buttons/GithubLogoButton.jsx';

/* Style Imports */
import '../styles/Contact.css';

/* HTML */
export default function Contact() {
  return (
    <section id='contact' className='contact'>
      <h2>Contact</h2>
        <div className='contact-socials'>
            <MailToButton/>
            <LinkedInButton/>
            <CVButton/>
            <GithubButton/>
        </div>
      <Breaker/>
    </section>
  )
};