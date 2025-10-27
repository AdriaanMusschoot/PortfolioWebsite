/* React Imports */
import { FWHighlight } from '../../../shared/highlight.js';

/* Style Imports */
import './FeaturedGetCooked.css';

/* HTML */
export default function FeaturedGetCooked() {
  return (
    <div className='featured-get-cooked'>
        <p>
          This amazing project is being developed by a team of 6 (3 devs, 2 artist and 1 animator)
           in <FWHighlight>Unreal Engine 5</FWHighlight> using <FWHighlight>C++</FWHighlight>.
          <br /> <br />
          My main responsibility was the <FWHighlight>Combat System</FWHighlight> and AI Behaviour.
          Additionally, I implemented <FWHighlight>local multiplayer</FWHighlight>, and localization.
          <br /><br />
          It is a local multiplayer game where 2 players prepare their troops and send them to battle to destroy their opponents kitchen.
        </p>
    </div>
  )
};