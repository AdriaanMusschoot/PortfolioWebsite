/* React Imports */
import { FWHighlight } from '../../../shared/highlight.js';

/* Style Imports */
import './FeaturedSnailsAndPotions.css';

/* HTML */
export default function FeaturedSnailsAndPotions() {
  return (
    <div className='featured-snails-and-potions'>
      <p>
        This amazing project was developed in a team of 5 (2 devs, 3 artists)
         in <FWHighlight>Unreal Engine 5</FWHighlight> using <FWHighlight>C++</FWHighlight>.
        <br /><br />
        I was responsible for the <FWHighlight>Crafting Mechanics</FWHighlight>, <FWHighlight>NPC Behaviour</FWHighlight> and <FWHighlight>UI</FWHighlight>.
        <br />
        After we finished it, I prepared the <FWHighlight>Steam Release</FWHighlight>.
        <br /><br />
        It is a local PvP game where the players fight over ingredients to craft potions, 
        which they have to feed to their snails to race to the finish line.
      </p>
    </div>
  )
};