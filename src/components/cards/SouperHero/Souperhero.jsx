/* Data Imports */
import TrailerVideo from './Resources/SouperHero_Trailer.webm';
import DeathrunIMG from './Resources/Deathrun.jpg';
import Gameplay01IMG from './Resources/Gameplay01.jpg';
import Gameplay02IMG from './Resources/Gameplay02.jpg';
import Gameplay03IMG from './Resources/Gameplay03.jpg';
import LevelIMG from './Resources/Level.jpg';
import MenuIMG from './Resources/Menu.jpg';

/* Style Imports */
import './SouperHero.css'; 

/* HTML */
export default function SouperHero({ activeIndex }) {

  return (
    <div className='SouperHero'>
      <h2>The Game</h2>
        <p>
            Dive into the zesty world of Souper Hero, 
            a high-speed, heart-pounding speedrun game where you control a plucky tomato on a quest for freedom! 
            Trapped in a bubbling pot of soup, your goal is to navigate through a labyrinth of swirling flavors, sizzling obstacles, and slippery ingredients
            to escape before you're completely submerged.
        </p>
        <video className='Trailer' width='100%' height='auto' controls loop autoPlay muted>
            <source src={TrailerVideo} />
                Your browser does not support the video tag.
        </video>
        <a 
          href='https://imbajuk.itch.io/souperhero' 
          target='_blank' 
          rel='noopener noreferrer'
          >
          <img
            className='itch-img'
            src='./assets/ProjectImages/ITCHIO.svg'
            alt='itch'
            />
        </a>
      <h2>The project</h2>
      <p>
        This little game was developped for the PolyMars x ScoreSpace speedjam. 
        We made it in about 1.5 days of work (keeping a healthy schedule). <br/>
        I was in charge of making our plucky tomato navigate the soup in order to escape.
        The level loading and finishing the level was also part of my tasks.<br/>
        Most 3D Art was taken from previous projects, with permission of the respective creators.
        But the second dev decided to dable some 2D art himself and make the plucky tomato himself.
      </p>
      <img
            className='img-1'
            src={Gameplay01IMG}
            alt='thumbnail'
      />
      <img
            className='img-2'
            src={MenuIMG}
            alt='thumbnail'
      />
      <img
            className='img-3'
            src={Gameplay02IMG}
            alt='thumbnail'
      />
      <img
            className='img-1'
            src={LevelIMG}
            alt='thumbnail'
      />
      <img
            className='img-2'
            src={Gameplay03IMG}
            alt='thumbnail'
      />
      <img
            className='img-3'
            src={DeathrunIMG}
            alt='thumbnail'
      />
    </div>
  );
}