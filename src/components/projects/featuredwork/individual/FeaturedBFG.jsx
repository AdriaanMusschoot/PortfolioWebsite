/* React Imports */
import { FWHighlight } from '../../../shared/highlight.js';

/* Style Imports */
import './FeaturedBFG.css';

/* HTML */
export default function FeaturedBFG() {
  return (
    <div className='featured-bfg'>
        <p>
          I joined the team at Black Forest Games Gmbh. (Germany) to work on their upcoming 3D action open world action game.
          Working in Unreal Engines <FWHighlight>Mass</FWHighlight> for the first time and further improving my skills in <FWHighlight>C++</FWHighlight> and <FWHighlight>UE5</FWHighlight>.
          <br /><br />
          My main task was creating a<FWHighlight> perception system</FWHighlight>.
          I also worked on the <FWHighlight>chain reaction system</FWHighlight> after noticing some shortcomings to the <FWHighlight>user experience</FWHighlight>.
        </p>
    </div>
  )
};