import React, { useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/svg/Logo.svg';
import { ReactComponent as LinkedInLogo } from '../assets/svg/linkedin_icon.svg';
import { ReactComponent as GithubLogo } from '../assets/svg/github_icon.svg';
import { ReactComponent as DiscordLogo } from '../assets/svg/discord_icon.svg';
import { ReactComponent as MailLogo } from '../assets/svg/mail_icon.svg';
import { ReactComponent as CVLogo } from '../assets/svg/CV.svg';
import CV from '../assets/CV_20241005_AdriaanMusschoot_Public.pdf';

import '../styles/Header.css'

export default function Header() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.header--navbar a');

    function changeActiveLink() {
        let closestSectionIndex = -1;
        let closestDistance = Number.MAX_VALUE;

        const viewportTop = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top + viewportTop;
            const distance = Math.abs(viewportTop - sectionTop);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestSectionIndex = index;
            }
        });

        // Remove 'active' class from all links
        navLinks.forEach((link) => link.classList.remove('active'));

        // Add 'active' class to the link corresponding to the closest section
        if (closestSectionIndex >= 0 && closestSectionIndex < navLinks.length) {
            navLinks[closestSectionIndex].classList.add('active');
        }
    }

    // Call it once on mount
    changeActiveLink();

    // Add scroll event listener
    window.addEventListener('scroll', changeActiveLink);

    // Cleanup event listener on component unmount
    return () => {
        window.removeEventListener('scroll', changeActiveLink);
    };
}, []);

  
  return (
    <>
      <div className='header--navbar'>
        <div className='centered-part'>
          <a href='#home'>
           <div className='header--logo'>
             <Logo className='svg'/>
           </div>
          </a>
          <a href='#projects'>Projects</a>
          <a href='#about'>About</a>
          <a href='#skills'>Skills</a>
          <a href='#contact'>Contact</a>
        </div>
        <div className='small-contact'>
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
    </>
  );
}