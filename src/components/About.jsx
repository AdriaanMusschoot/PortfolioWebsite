import React from 'react';

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
            When I discovered you could follow a degree centered around creating games, I instantly knew what I wanted to study. It was scary at first since I had never dabbled in software development.
            But as the challenges were thrown my way, I have managed to tackle all of them.
            On the table for my third and final year is a semester long of working on a project together in a team of 6 and a graduation work in which I will conduct my own research, in the second semester there is my internship.
            <br></br>
            <br></br>
            As I am nearing the end of my degree and am <strong>eager to gain some real world experience</strong>,
            I am looking for an end of study internship from Februari 2025 to June 2025. Feel free to
            <a href="#contact" className="about-link-2">
            contact
            </a>
            me about a position/opportunity to add me to your team or check out my CV.
            <br></br>
            <br></br>
            My main branch is <strong>gameplay programming</strong>, with a special passion towards setting up systems and working with finite state machines. I mainly work in Unreal Engine 5 and have also used Unity and
            <a href="#projects" className="about-link-2">
            my own engine.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
