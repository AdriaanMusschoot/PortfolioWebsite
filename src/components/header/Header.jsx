import { useEffect } from 'react';

/* Data Imports */
import { ReactComponent as Logo } from './Resources/Logo.svg';
import CVButton from '../buttons/cvbutton/CVButton.jsx';
import MailToButton from '../buttons/mailtobutton/MailToButton.jsx';
import LinkedInButton from '../buttons/linkedinbutton/LinkedInButton.jsx';
import GithubButton from '../buttons/githubbutton/GithubButton.jsx';

/* Style Imports */
import './Header.css';

/* HTML */
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
          <MailToButton/>
          <LinkedInButton/>
          <CVButton/>
          <GithubButton/>
        </div>
      </div>
    </>
  );
}