import React from 'react';

export default function SnailsAndPotions () { 
  return (
    <>
      <div className='Title'>
        <h1>Snails And Potions</h1>
        <video width='560' height='315' controls src='./assets/ProjectImages/SnailsAndPotions/Trailer.mp4'>
            Your browser does not support the video tag.
        </video>     
        <iframe
          title='Trailer'
          className='Trailer'
          width='560' 
          height='315' 
          src='./assets/ProjectImages/SnailsAndPotions/Thumbnail.jpg' 
          alt='trailer-snailsandpotions'
        /> 
      </div> 
    </> 
  )
};