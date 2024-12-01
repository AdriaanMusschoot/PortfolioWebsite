import React from 'react';
import { ReactComponent as LinkedInLogo } from '../assets/svg/linkedin_icon.svg';
import { ReactComponent as GithubLogo } from '../assets/svg/github_icon.svg';
import { ReactComponent as DiscordLogo } from '../assets/svg/discord_icon.svg';
import { ReactComponent as MailLogo } from '../assets/svg/mail_icon.svg';
import { ReactComponent as CVLogo } from '../assets/svg/CV.svg';
import CV from '../assets/CV_20241005_AdriaanMusschoot_Public.pdf';

export default function Contact() {
  return (
    <div className='contact'>
        <div className='contact-socials'>
            <a href='mailto:contact@adriaanmusschoot.com' rel='noreferrer' target='_blank'>
                <MailLogo className='svg'/>
            </a>
            <a href='https://www.linkedin.com/in/adriaan-musschoot/' rel='noreferrer' target='_blank'>
                <LinkedInLogo className='svg'/>
            </a>
            <a href={CV} target="_blank" rel="noopener noreferrer">
              <CVLogo className='svg' />
            </a>
            <a href='https://github.com/AdriaanMusschoot' rel='noreferrer' target='_blank'>
                <GithubLogo className='svg'/>
            </a>
            <a href='https://discordapp.com/users/460746279367082016' rel='noreferrer' target='_blank'>
              <DiscordLogo className='svg' />
            </a>
        </div>
    </div>
  )
};