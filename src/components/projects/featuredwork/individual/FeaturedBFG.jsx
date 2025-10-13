/* Style Imports */
import '../../../../styles/projects/featuredwork/individual/FeaturedBFG.css';

/* HTML */
export default function FeaturedBFG({ highlightClassName }) {
  return (
    <div className='featured-bfg'>
        <p>
          I joined the team at Black Forest Games Gmbh. (Germany) to work on their upcoming 3D action open world action game.
          Working in Unreal Engines <span className={highlightClassName}>Mass</span> for the first time and further improving my skills in <span className={highlightClassName}>C++</span> and <span className={highlightClassName}>UE5</span>.
          <br /><br />
          My main task responsible for creating a<span className={highlightClassName}> perception system</span>.
          I also worked on the <span className={highlightClassName}>chain reaction system</span> after noticing some shortcomings to the <span className={highlightClassName}>user experience</span>.
        </p>
    </div>
  )
};