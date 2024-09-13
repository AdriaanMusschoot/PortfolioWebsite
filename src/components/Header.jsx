import React from 'react';

export default function Header() {
  return (
    <>
        <div className='header--logo'>
            <img src='./assets/Logo.png' alt='logo'/>
        </div>
        <div className='header--navbar'>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#skills'>Skills</a>
            <a href='#contact'>Contact</a>
        </div>
    </>
  )
};