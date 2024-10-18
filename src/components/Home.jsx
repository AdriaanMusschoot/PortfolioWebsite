import React from 'react';

export default function Home() {
  return (
    <div className='home'>
      <div className='text-container'>
        <h1>Adriaan Musschoot</h1>
        <h2>Gameplay Programmer</h2>
        <p>
          As a passionate game developer who thrives in team environments, I love to help other people.
          I have a keen eye for detail and like working neatly, keeping everything organized and refactoring when needed to keep everything clean.
          When I encounter problems, I can really grit my teeth and persist until I find an effective and elegant solution.
        </p>
        <p>
          I am currently looking for an end of study internship (February - June 2025) as a gameplay developer programming in C++.
        </p>
      </div>
      <div className='image-container'>
        <img src='./assets/pfp.png' alt='Profile' className='profile-image' />
      </div>
    </div>
  );
}
