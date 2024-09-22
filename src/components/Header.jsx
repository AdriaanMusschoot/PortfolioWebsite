import React, { useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/svg/Logo.svg';

export default function Header() {
  useEffect(() => {
    const sections = document.querySelectorAll('section:not(.whitespace)');
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
        <a href='#home'>Home</a>
        <a href='#projects'>Projects</a>
        <a href='#about'>
        <div className='header--logo'>
          <Logo className='svg'/>
        </div>
        </a>
        <a href='#skills'>Skills</a>
        <a href='#contact'>Contact</a>
      </div>
    </>
  );
}