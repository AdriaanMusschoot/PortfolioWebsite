import React from "react";
import '../styles/RideOfGiri.css'; // Import your CSS file


export default function RideOfGiri({activeIndex}) {
    return (
        <div className='RideOfGiri'>
            <h2>The Game</h2>
            <p>
                Welcome to the ride of your life where you control a cute little ball of rice trying to make its way down the slopes.
                Hang on to the chopsticks for dear life and beware not to fly of into the forest, you won't like what you'll find there.
            </p>
            <video
              className='Trailer'
              width='100%' height='auto' 
              controls 
              loop
              muted
              autoPlay
            >
              <source src='./assets/ProjectImages/RideOfGiri/Trailer.webm' />
              Your browser does not support the video tag.
            </video>
            <h2>The Project</h2>
            <p>
                This project was made in 2 days together with 4 of my friends. We we're 4 devs and one artist.
                This was my first ever game jam!!! And it came with all the trouble it promised ;).
                We had absolutely no idea what we we're up for.<br/>
                We made some silly mistakes, like leaving raytracing on for our project, performance was not a given to say the least.
                We tried to use github in the beginning for file sharing but none of us had a proper idea what was going on.
                So in the end we resorted to using an actual harddrive to share all the files among eachother.
            </p>
            <h2>My role</h2>
            <p>
                Together with another dev, I was responsible for figuring out the main mechanic of the game,
                making the cute little rice ball hang on for dear life and spin around the chopsticks.
            </p>
            <h2>Thoughts</h2>
            <p>
                I really enjoyed working together with everyone. I feel like we got the most out of the project in the given time and our skillset at the time.
                Looking back on the project I would organize ourselves a bit better, and make sure we don't have to resort to sharing files by passing around a hard drive.
            </p>
            <a 
                href='https://kniptang.itch.io/ride-of-giri' 
                target='_blank' 
                rel='noopener noreferrer'
                >
                <img
                  className='itch-img'
                  src='./assets/ProjectImages/ITCHIO.svg'
                  alt='itch'
                  />
            </a>
        </div>
    )
  };