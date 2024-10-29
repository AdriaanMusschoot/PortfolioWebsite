import '../styles/SouperHero.css'; 

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
        <video className='Trailer' width='100%' height='auto' controls loop autoPlay>
            <source src='./assets/ProjectImages/SouperHero/Trailer.webm' />
                Your browser does not support the video tag.
        </video>
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
            src='./assets/ProjectImages/SouperHero/Gameplay01.jpg'
            alt='thumbnail'
      />
      <img
            className='img-2'
            src='./assets/ProjectImages/SouperHero/Menu.jpg'
            alt='thumbnail'
      />
      <img
            className='img-3'
            src='./assets/ProjectImages/SouperHero/Gameplay02.jpg'
            alt='thumbnail'
      />
      <img
            className='img-1'
            src='./assets/ProjectImages/SouperHero/Level.jpg'
            alt='thumbnail'
      />
      <img
            className='img-2'
            src='./assets/ProjectImages/SouperHero/Thumbnail.jpg'
            alt='thumbnail'
      />
      <img
            className='img-3'
            src='./assets/ProjectImages/SouperHero/Deathrun.jpg'
            alt='thumbnail'
      />
    </div>
  );
}