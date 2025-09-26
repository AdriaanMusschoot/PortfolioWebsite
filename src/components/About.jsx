import React from 'react';

/* Style Imports */
import '../styles/About.css';

/* Data Imports */
import ProfileImage from '../assets/Profile/pfp2.jpg';

/* HTML */
export default function About() {

  /* VARS */
  const DAESite = 'https://www.digitalartsandentertainment.be/page/31/Game+Development';
  const MailTo = 'mailto:contact@adriaanmusschoot.com';
  
  return (
    <div className="about-me">
      <div className="about-content">
        <img src={ProfileImage} alt='ProfilePicture' className='about-image'/>
        <div className="about-text">
          <p> 
            Hi there! Let me tell you a little bit about myself. In case you skipped the intro my name is Adriaan.
            My curiosity for games started with mobile games, such as Clash of Clans and Clash Royale. 
            When I got my first laptop, I turned to Rocket League and the DOOM Franchise.
          </p>
          <p>
            After discovering I could follow a degree in game development, that's exactly what I did.
            It wasn't easy as I had never programmed before, but I stuck through it and now I am a proud graduate with a Bachelor's in
            <a href={DAESite} target="_blank" rel="noopener noreferrer">Game Development</a>!
          </p>
          <p>
            My favourite programming task usually involves some geometric brain gymnastics.
            Setting up gameplay systems for designers is also something I really enjoy, as it requires me to think about all aspects of the system.
          </p>
          <p>
            Currently I am looking for a job as a Junior Games Programmer.
            The minimum requirement for it is programming. Gameplay, Tools , ... anything goes as long as its connected to games, I am genuinely curious and eager to learn about anything thrown in my path.
            Don't hesitate to <a href={MailTo}>reach out</a> if you know of an opportunity!
          </p>
        </div>
      </div>
    </div>
  );
}
