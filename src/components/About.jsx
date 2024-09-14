import React from 'react';

export default function About() {
  return (
    <>
      <div className='about-top'>
        <h1>Adriaan Musschoot</h1>
        <h2>Games Software developer</h2>
      </div>
      <div className='about-img'>
        <img src='./assets/pfp.png' alt='Adriaan Musschoot' />
      </div>
      <div className='about-lower'>
        <p>
        "The only way to do great work is to love what you do. In software development, every bug is a lesson, every challenge an opportunity to grow. Keep coding, keep learning, and the future will be written in your own code."
        </p>
      </div>
    </>
  )
};