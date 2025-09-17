import '../../styles/cards/SnailsAndPotions.css'; // Import your CSS file

export default function SnailsAndPotions({ activeIndex }) {

  return (
    <div className='snails-and-potions'>
      <h2>My Role</h2>
      <p>
        The biggest part of the game and my biggest task was the snail and making it tick, well actually crawl and make it interact appropriately to all the different potions. 
        It included working with the beautiful State Pattern, which I absolutely love working with. 
        Another big part of the game is recipe crafting which I was also responsible for. Every round different ingredients form the same recipes. 
        This means the cauldron needs to detect dynamically if its contents still could add up to a recipe or if they add up to a recipe and then spew out the correct potion. 
        To create a system to detect this was also quite challenging but fun nonetheless.
        The functionality of the UI for this was also done by me, as the player needs to know what ingredients he needs to gather for his potion.
        Main menu and pause menu I also took upon me as I saw another opportunity to work with the State Pattern :)
      </p>
      <h2>The Game</h2>
      <p>
        Snails and Potions is a local fantasy-themed multiplayer pvp game, where each player competes in a snail race with their own snail. 
        They are witches who must brew potions with specific recipes to feed to their snail and keep them in the race, get advantages or to annoy the other players. 
        To brew these potions the players have a common area where ingredients will spawn sporadically. 
        They must gather ingredients and brawl over them with the other players when their interests overlap. 
        May the best snail-master reach the finish first.
      </p>
      <video
        className='Trailer'
        width='100%' height='auto' 
        controls 
        loop
        muted
        autoPlay
      >
        <source src='./assets/ProjectImages/SnailsAndPotions/Trailer.webm' />
        Your browser does not support the video tag.
      </video>
      <h2>Winner!</h2>
      <p>
        Snails And Potions was selected as the best for the in house game jam held by our school, DAE Game Projects 2024. 
        We were first in almost every category. This selection is also meant that we could release to steam under the schools steam, which is something we are working on now.
      </p>
      <img
        className='img-1'
        src='./assets/ProjectImages/SnailsAndPotions/Speed.jpg'
        alt='thumbnail'
      />
      <img
        className='img-2'
        src='./assets/ProjectImages/SnailsAndPotions/Overview.jpg'
        alt='thumbnail'
      />
      <img
        className='img-3'
        src='./assets/ProjectImages/SnailsAndPotions/Stats.jpg'
        alt='thumbnail'
      />
      <h2>The Project</h2>
      <p>
        This project was crafted for the course Game Projects - Game Development DAE. 
        We were a team of 5, 2 programming students and 3 game graphics production students. 
        12 weeks we spent 10 hours a week each developing this game (and some bonus hours).
        The first three weeks involved mainly prototyping, defining art style and setting up our guidelines for code as well as art.
        Then we started hacking away at develompent and rounded off with 15 hours worth of polish work.
        The prototype as well as the game itself were made in unreal 5 using C++.
        I am really proud of all the work everyone put in and the result is absolutely stunning.
        These were my lovely colleagues: Tijl Gommers (programmer), Senne Bovee (artist), Ward Vervoort (artist), Luca Zulianello (artist).
        Feel free to download the game and try it out yourself.
      </p>
      <a 
        href='https://boomertijl.itch.io/snails-and-potions' 
        target='_blank' 
        rel='noopener noreferrer'
        >
        <img
          className='itch-img'
          src='./assets/ProjectImages/ITCHIO.svg'
          alt='itch'
          />
      </a>
      <a 
        href='https://store.steampowered.com/app/3224810/Snails__Potions/' 
        target='_blank' 
        rel='noopener noreferrer'
      >
        <img
          className='git-img'
          src='./assets/ProjectImages/STEAM.jpg'
          alt='steam'
        />
      </a>
    </div>
  );
}