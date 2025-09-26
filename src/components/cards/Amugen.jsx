/* Style Imports */
import '../../styles/cards/Amugen.css'; 

/* HTML */
export default function Amugen({ activeIndex }) {

  return (
    <div className='Amugen'>
      <h2>The Engine</h2>
      <p>
        This custom 2D Engine, that I have developed in C++, uses a scene graph to determine positions and uses a game object component system.
        The rendering, input and audio is all handled by SDL.
        To handle the mathematics and positions behind the scene graph I am using GLM.
        <br></br>
        <br></br>
        Most dependecies for rendering are nicely put away in RAII wrappers.
        The command pattern is used to provide an easy way for the user to handle input.
        Audio, provided through a service locator, is managed on a seperate thread to not uphold the main threads update loop.
        <br></br>
        <br></br>
        Through the component system the user has access to the update loop and can define their own unique behaviour. Some pre-defined components include RenderComponent, TextComponent, TransformComponent, CollisionComponent.
        The collision system uses a simple distance check and triggers the appropriate methods.
        To decouple as much as possible but still allow the components to communicate with one another, the Subject-Observer relationship is used.
        <br></br>
        All of the used patterns are applied from the book "Game Programming Patterns" by Bob Nystrom.
      </p>
      <p>
        The engine is set up using CMake and can be deployed as a github submodule.
      </p>
      <p>
        Troughout the project I followed the C++ Core Guidelines and coding standards.
        Next to that I applied guidelines from the book "Beautiful C++" by J. Guy Davidson / Kate Gregory. 
        It was a great guide and learner throughout the project.
      </p>
      <h2>Result</h2>
      <p>
        This project is the most challenging I have faced yet. I really enjoyed sticking to the guidelines as it provides an excellent frame for me to work in.
        Over 4 months I learned so much and it is the project where all of my studies came together, 
        as I had to prove the engine works by creating a remake of the all time classic Pac-Man (check out below).
      </p>
      <a 
        href='https://github.com/AdriaanMusschoot/Amugen/Amugen_Showcase.webm' 
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
        <source src='../../assets/CardImages/Amugen/Amugen_Showcase.webm' />
        Your browser does not support the video tag.
      </video>
      <h2>Pacman</h2>
        <p>
          This project was completely developed in my own 2D engine - Amugen.
          It was a proof of concept that all the features in my own engine worked.
          <br></br>
          I really enjoyed creating all the gameplay elements behind Pacman. It all starts of with reading in some file data to determine what the playing field looks like (so if ever a new version of the map came out it would be easy to change ;).
          Working with statemachines for Pacman and the ghosts was a blast from the past. I just love working with state machines, they seem so trivial but yet can create complex behaviours.
          The subject observer pattern was also very helpful in decoupling the components from one another. My favourite place to use it was in the animation components. 
          It made it simple to reason wether the ghost is hunting pacman or running from pacman and the spritesheets could then easily be updated on their own.
        </p>
      <h2>Result</h2>
        <p>
          In the end, I was quite satisfied with both the code and the project structure. It reinforces my preference for a clean and organized approach.
          There is a release version available on github showcasing the gameplay of Pacman.
        </p>
        <a 
          href='https://github.com/AdriaanMusschoot/Pacman'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='git-img'
            src='./assets/ProjectImages/GITHUB.png'
            alt='git'
          />
        </a>
    </div>
  );
}