import React from 'react';
import { ReactComponent as LinkedInLogo } from '../assets/svg/linkedin_icon.svg';
import { ReactComponent as GithubLogo } from '../assets/svg/github_icon.svg';
import { ReactComponent as DiscordLogo } from '../assets/svg/discord_icon.svg';

export default function Contact() {
  return (
    <div className='contact'>
        <p>"Got a software idea or challenge? Let’s connect and turn your vision into reality!"</p>
        <a className='contact-mail' href='mailto:adriaan.musschoot@gmail.com'>adriaan.musschoot@gmail.com</a>
        <div className='contact-socials'>
            <a href='https://www.linkedin.com/in/adriaan-musschoot-29a991288/' rel='noreferrer' target='_blank'>
                <LinkedInLogo className='svg'/>
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