import React from 'react';

export default function SnailsAndPotions () { 
  return (
    <>
      <div className='Title'>
        <h1>Snails And Potions</h1>
        <iframe title='Trailer' width='560' height='315' controls src='./assets/ProjectImages/SnailsAndPotions/Trailer.mp4'>
            Your browser does not support the video tag.
        </iframe>     
        <img
          className='thumbnail'
          width='560' 
          height='315' 
          src='./assets/ProjectImages/SnailsAndPotions/Thumbnail.jpg' 
          alt='thumbnail'
        /> 
      </div> 
    </> 
  )
};