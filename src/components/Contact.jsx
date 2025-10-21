/* React Imports */
import CVButton from './buttons/CVButton.jsx';
import MailToButton from './buttons/MailToButton.jsx';
import LinkedInButton from './buttons/LinkedInButton.jsx';
import GithubButton from './buttons/GithubLogoButton.jsx';
import CopyableDiv from './shared/CopyableDiv.jsx';
/* Style Imports */
import '../styles/Contact.css';

/* HTML */
export default function Contact() 
{
    const ContactMail = 'contact@adriaanmusschoot.com';

    return (
        <section id='contact' className='contact'>
            <h2>Contact</h2>
            <CopyableDiv TextToCopy={ContactMail}>
                <h4>{ContactMail}</h4>
            </CopyableDiv>
            <div className='contact-socials'>
                <MailToButton/>
                <LinkedInButton/>
                <CVButton/>
                <GithubButton/>
            </div>
        </section>
    )
};