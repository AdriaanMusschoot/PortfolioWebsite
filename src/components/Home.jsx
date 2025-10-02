import React from 'react';
/* Data Imports */
import Breaker from './Breaker.jsx';

/* Style Imports */
import '../styles/Home.css';

/* HTML */
export default function Home() {
  const highlightClass = 'Highlight';
  const emphasisClass = 'Emphasis';

  return (
    <section className='home' id='home'>
        <h1>Hi, I'm <span className={highlightClass}>Adriaan</span></h1>
          <h2>I'm a <span className={highlightClass}>games programmer</span></h2>
              <h3>Welcome to my portfolio!</h3>
            <p>
              As a passionate game developer who thrives in <span className={emphasisClass}>team environments</span>, I love to help other people.
              I have a keen <span className={emphasisClass}>eye for detail</span> and like working neatly, keeping everything <span className={emphasisClass}>organized</span> and refactoring when needed to keep everything clean.
              When I encounter problems, I can really grit my teeth and <span className={emphasisClass}>persist</span> until I find an effective and elegant solution.
              <br></br><br></br>
              I am currently looking for <span className={emphasisClass}>a junior games programmer position</span>, to make my first mark in the industry.
              Please have a look at my projects and reach out if you know of any <span className={emphasisClass}>opportunities</span>!
            </p>
      <Breaker/>
    </section>
  );
}