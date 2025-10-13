/* Style Imports */
import '../../../../styles/projects/featuredwork/individual/FeaturedSnailsAndPotions.css';

/* HTML */
export default function FeaturedSnailsAndPotions() {
  return (
    <div className='featured-snails-and-potions'>
      <p>
        This amazing project was developed in a team of 5 (2 devs, 3 artists)
         in <span className='highlight'>Unreal Engine 5</span> using <span className='highlight'>C++</span>.
        <br /><br />
        I was responsible for the <span className='highlight'>Crafting Mechanics</span>, <span className='highlight'>NPC Behaviour</span> and <span className='highlight'>UI</span>.
        <br />
        After we finished it, I prepared the <span className='highlight'>Steam Release</span>.
        <br /><br />
        It is a local PvP game where the players fight over ingredients to craft potions, 
        which they have to feed to their snails to race to the finish line.
      </p>
    </div>
  )
};