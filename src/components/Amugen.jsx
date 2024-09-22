import '../styles/Amugen.css'; 

export default function Amugen() {

  return (
    <div className='Amugen'>
      <h1>Amugen - Game Engine</h1>
      <h2>The Project</h2>
      <p>
        I have developped a custom 2D Engine in C++. 
        The engine uses a scene graph to determine positions and uses a game object component system.
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
        as I had to prove the engine works by creating a remake of the all time classic Pac-Man (check out other projects).
      </p>
      <a 
        href='https://github.com/AdriaanMusschoot/Amugen' 
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
  );
}