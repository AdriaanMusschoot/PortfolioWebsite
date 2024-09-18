import React from 'react';
import '../styles/App.css'; // Ensure you import your CSS file

export default function SnailsAndPotions () {
  

  return (
    <>
      <div title='SnailsAndPotions'
        style={{marginLeft: '5vw', marginRight: '5vw', marginBottom: '2vw'}}      
      >

        <h1>Snails And Potions</h1>
        <h2>
          The Game
        </h2>
        <p 
          style={{fontSize:'var(--description-text-size', marginLeft:'2vw', marginRight:'2vw'}}
        >
          Snails and Potions is a local fantasy-themed multiplayer pvp game, where each player competes in a snail race with their own snail. 
          They are witches who must brew potions with specific recipes to feed to their snail and keep them in the race, get advantages or to annoy the other players. 
          To brew these potions the players have a common area where ingredients will spawn sporadically. 
          They must gather ingredients and brawl over them with the other players when their interests overlap. 
          May the best snail-master reach the finish first.
        </p>
       <h2>
          My role
        </h2>
        <p 
          style={{fontSize:'var(--description-text-size', marginLeft:'2vw', marginRight:'2vw'}}
        >
          The biggest part of the game and my biggest task was the snail and making it tick, well actually crawl and make it interact appropriatly to all the different potions. 
          It included working with the beautiful State Pattern, which I absolutely love working with. 
          Another big part of the game is recipe crafting which I was also responsible for. Every round different ingredients form the same recipes. 
          This means the cauldron needs to detect dynamically if its contents still could add up to recipe or if they add up to a recipe and then spew out the correct potion. 
          To create a systemt to detect this was also quite challenging but fun none the less.
          The functionality of the UI for this was also done by me, as the player needs to know what ingredients he needs to gather for his potion.
          Main menu and pause menu I also took upon me as I saw another opportunity to work with state machines :)
        </p>
        <h2>
          The Project
        </h2>
        <p 
          style={{fontSize:'var(--description-text-size', marginLeft:'2vw', marginRight:'2vw'}}
        >
          This project was crafted for the course Game Projects - Game Development DAE. 
          We we're a team of 5, 2 programming students and 3 game graphics production students. 
          12 weeks we spent 10 hours a week each developing this game (and some bonus hours).
          I am really proud of all the work everyone put in and the result is absolutely stunning.
          Feel free to  download it from itch.io and try out the game yourself.
        </p>
        <a 
          href='https://boomertijl.itch.io/snails-and-potions' 
          target='_blank' 
          rel='noopener noreferrer'
        >
          <img
            className='thumbnail'
            width='20%'
            height='auto'
            src='./assets/ProjectImages/ITCHIO.svg'
            alt='thumbnail'
            style=
            {{  
              borderRadius: 'var(--main-border-radius)', 
              borderStyle: 'var(--main-border-style)', 
              borderColor:'var(--main-border-color)', 
              borderWidth: 'var(--main-border-width)',
            }}
          />
        </a>
        <video
          width='100%' height='auto' 
          controls 
          loop
          style=
          {{  
            borderRadius: 'var(--main-border-radius)', 
            borderStyle: 'var(--main-border-style)', 
            borderColor:'var(--main-border-color)', 
            borderWidth: 'var(--main-border-width)',       
          }}
          >
          <source src='./assets/ProjectImages/SnailsAndPotions/Trailer.webm'></source>
           Your browser does not support the video tag.
        </video>
        <img
          className='thumbnail'
          width='100%'
          height='auto'
          src='./assets/ProjectImages/SnailsAndPotions/Thumbnail.jpg'
          alt='thumbnail'
          />
      </div>
    </>
  )
};