import React from 'react';

export default function Home() {
  return (
    <div className='home'>
      <div className='text-container'>
        <h1>Adriaan Musschoot</h1>
        <h2>Gameplay / aspiring Graphics Programmer</h2>
        <p>
          As a passionate game developer who thrives in <strong>team environments</strong>, I love to help other people.
          I have a keen <strong>eye for detail</strong> and like working neatly, keeping everything <strong>organized</strong> and refactoring when needed to keep everything clean.
          When I encounter problems, I can really grit my teeth and <strong>persist</strong> until I find an effective and elegant solution.
        </p>
        <p>
          I am currently looking for an <strong>end of study internship</strong> (Feb - Jun 2025) as a gameplay / graphics developer preferably programming in C++.
        </p>
      </div>
      <div className='image-container'>
        <img src='./assets/pfp.png' alt='Profile' className='profile-image' />
      </div>
    </div>
  );
}