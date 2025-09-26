import React from 'react';

import './Home.css';

export default function Home() {
  const highlightClass = 'Highlight';
  const emphasisClass = 'Emphasis';

  return (
    <div className='home'>
      <div className='text-container'>
        <h1>Hi, I'm <span className={highlightClass}>Adriaan</span></h1>
        <h2>I'm a <span className={highlightClass}>games programmer</span>.</h2>
        <p>
          <strong className='Welcome'>Welcome to my portfolio!</strong>
        </p>
        <p>
          As a passionate game developer who thrives in <span className={emphasisClass}>team environments</span>, I love to help other people.
          I have a keen <span className={emphasisClass}>eye for detail</span> and like working neatly, keeping everything <span className={emphasisClass}>organized</span> and refactoring when needed to keep everything clean.
          When I encounter problems, I can really grit my teeth and <span className={emphasisClass}>persist</span> until I find an effective and elegant solution.
        </p>
        <p>
          I am currently looking for <span className={emphasisClass}>a junior games programmer position</span>, to make my first mark in the industry.
          Please reach out if you have any <span className={emphasisClass}>opportunities</span>!
        </p>
      </div>
    </div>
  );
}