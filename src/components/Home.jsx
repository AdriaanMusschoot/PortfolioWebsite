import React from 'react';

export default function Home() {
  return (
    <div className='home'>
      <div className='home-top'>
        <h1>Adriaan Musschoot</h1>
        <h2>Gameplay Programmer</h2>
      </div>
      <div className='home-img'>
        <img src='./assets/pfp.png' alt='Adriaan Musschoot' />
      </div>
      <div className='home-lower'>
        <p>
        "The only way to do great work is to love what you do. In software development, every bug is a lesson, every challenge an opportunity to grow. Keep coding, keep learning, and the future will be written in your own code."
        </p>
        <p>
          -ChatGPT
        </p>
      </div>
    </ div>
  )
};