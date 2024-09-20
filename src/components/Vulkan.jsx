import React from "react";
import '../styles/Vulkan.css'; // Import your CSS file
export default function Vulkan() {
    return (
      <>
        <div className='vulkan'>
          <h1>Instanced Rendering - Vulkan</h1>
          <video
            className='Trailer'
            width='100%' height='auto' 
            autoPlay
            loop
            muted
          >
            <source src='./assets/ProjectImages/Vulkan/Trailer.webm' />
            Your browser does not support the video tag.
          </video>
        </div>
      </>
    )
  };