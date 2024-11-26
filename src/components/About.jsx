import React from 'react';
import CV from '../assets/CV_20241005_AdriaanMusschoot_Public.pdf';


export default function About() {
  return (
    <div className="about-me">
      <div className="about-content">
        <img src="./assets/pfp2.jpg" alt="me" className="about-image" />
        <div className="about-text">
          <p>
            Hi, I am Adriaan. I am currently studying my 3rd year of
            <a href="https://www.digitalartsandentertainment.be/page/31/Game+Development" target="_blank" rel="noopener noreferrer" className="about-link-1">
              Game Development at Digital Arts and Entertainment
            </a>
            at
            <a href="https://www.howest.be/en/" target="_blank" rel="noopener noreferrer" className="about-link-2">
             Howest University of Applied Sciences.
            </a>
            <br></br>
            <br></br>
            My <strong>passion for games</strong> started with mobile games such as Clash- of Clans and Royale. After I got my first laptop, I turned to competitive titles such as Rocket League and the beauty that is the DOOM franchise.
            When I discovered you could follow a degree centered around <strong>creating games</strong>, I instantly knew what I wanted to study. It was scary at first since I had programmed before.
            But as the challenges were thrown my way, I have managed to tackle all of them.
            <br></br>
            <br></br>
            As I am nearing the end of my degree and am <strong>eager to gain my first real world experience</strong>,
            I am looking for an end of study internship from Februari 2025 to June 2025. Feel free to
            <a href="#contact" className="about-link-2">
            contact
            </a>
            me about a position/opportunity to add me to your team or check out my
            <a href={CV} target="_blank" rel="noopener noreferrer">
              CV
            </a>
            .
            <br></br>
            <br></br>
            I am really interested in <strong>gameplay programming</strong>, with a special passion towards setting up systems and working with finite state machines.
            More recently I also grew a passion for <strong>graphics programming</strong>.
            I mainly work in Unreal Engine 5 and have also used Unity and
            <a href="#projects" className="about-link-2">
            my own engine.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
