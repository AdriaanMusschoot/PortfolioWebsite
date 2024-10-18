import React from "react";
import '../styles/Raymarcher.css'; // Import your CSS file


export default function Raymarcher({activeIndex}) {
    return (
      <>
        <div className='Raymarcher'>
          <h2>The Project</h2>
          <p>
             As my recent interest in graphics programming has risen,
             I decided to look into sphere tracing on my own. 
             I used the framework of a previousy made raytracer, and transformed it into a spheretracing raymarcher.
          </p>
          <p>
             This project was made completely on the cpu, so to at least achieve some frames to look at the beautiful scenes,
             I had to make the application multi-threaded. Later, I would like to port this to Vulkan, to experiment some more and have some decent performance.  
             My main resource I used was the work of Inigo Quilez.             
          </p>
          <p>
            It resulted in these really wonky visuals, but I had a blast discovering this mathemathical method of rendering. 
          </p>
          <video
            className='SphereBox'
            autoPlay
            loop
            muted
          >
            <source src='./assets/ProjectImages/Raymarcher/CubeSphereSmooth.mp4' />
            Your browser does not support the video tag.
          </video>
          <video
            className='FractalsRotated'
            autoPlay
            loop
            muted
          >
            <source src='./assets/ProjectImages/Raymarcher/FractalsRotation.mp4' />
            Your browser does not support the video tag.
          </video>
          <video
            className='Fractals'
            autoPlay
            loop
            muted
          >
            <source src='./assets/ProjectImages/Raymarcher/Mandelbulb.mp4' />
            Your browser does not support the video tag.
          </video>
          <h2>Technical</h2>
          <p>
            What is sphere tracing in ray marching?
          </p>
          <p>
            In raytracing you shoot a ray into the scene from the camera pov and calculate the intersection point of a ray. 
            In sphere tracing you still shoot a ray from the camera, but you calculate the distance from the current point (initially the camera) to the closest object.
            Once you know the minimum distance to the closest object you know that you can travel along the ray to that minimum distance and get a new current point.
            And you repeat these steps until the minimum distance to the closest object is smaller than an arbitrary value (0.001) and you know you have hit something.
          </p>
          <a 
            href='https://github.com/AdriaanMusschoot/RayMarching' 
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
      </>
    )
  };