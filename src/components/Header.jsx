import { useEffect } from 'react';

/* Data Imports */
import { ReactComponent as Logo } from '../assets/svg/amulogo_icon.svg';
import CVButton from './buttons/CVButton.jsx';
import MailToButton from './buttons/MailToButton.jsx';
import LinkedInButton from './buttons/LinkedInButton.jsx';
import GithubButton from './buttons/GithubLogoButton.jsx';

/* Style Imports */
import '../styles/Header.css';

/* HTML */
export default function Header() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.header-wrapper .section-links a');

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
      <div className='header-wrapper'>
        <div className='section-links'>
          <a href='#home'>
           <div className='header--logo'>
             <Logo className='svg'/>
           </div>
          </a>
          <a href='#projects'>
            <h4>Projects</h4>
          </a>
          <a href='#about'>
            <h4>About</h4>
          </a>
          <a href='#skills'>
            <h4>Skills</h4>
          </a>
          <a href='#contact'>
            <h4>Contact</h4>
          </a>
        </div>
        <div className='small-contact'>
          <MailToButton/>
          <LinkedInButton/>
          <CVButton/>
          <GithubButton/>
        </div>
      </div>
    </>
  );
}