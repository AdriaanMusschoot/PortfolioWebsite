import React from "react";
import '../styles/Pacman.css'; // Import your CSS file


export default function Pacman() {
    return (
      <>
        <div className='Pacman'>
          <h1>Pac Man - Amugen</h1>
          <h2>The Project</h2>
          <p>
            This project was completely developed in my own 2D engine - Amugen.
            It was a proof of concept that all the features in my own engine worked.
            <br></br>
            I really enjoyed creating all the gameplay elements behind Pacman. It all starts of with reading in some file data to determine what the playing field looks like (so if ever a new version of the map came out it would be easy to change ;).
            Working with statemachines for Pacman and the ghosts was a blast from the past. I just love working with state machines, they seem so trivial but yet can create complex behaviours.
            The subject observer pattern was also very helpfull in decoupling the components from one another. My favourite place to use it was in the animation components. 
            It made it simple to reason wether the ghost is hunting pacman or running from pacman and the spritesheets could then easily be updated on their own.
          </p>
          <h2>Result</h2>
          <p>
            In the end, I was quite satisfied with both the code and the project structure. It reinforces my preference for a clean and organized approach.
            There is a release version available on github showcasing the gameplay of Pacman.
          </p>
          <a 
            href='https://github.com/AdriaanMusschoot/Programming4' 
            target='_blank' 
            rel='noopener noreferrer'
          >
            <img
              className='git-img'
              src='./assets/ProjectImages/GITHUB.png'
              alt='git'
            />
          </a>
          <video
            className='Trailer'
            width='100%' height='auto' 
            autoPlay
            loop
            muted
          >
            <source src='./assets/ProjectImages/Amugen/Showcase.webm' />
            Your browser does not support the video tag.
          </video>
        </div>
      </>
    )
  };