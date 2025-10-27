/* Data Imports */
import { ReactComponent as DownArrowSVG } from '../../assets/svg/down_arrow_icon.svg';

/* Style Imports */
import './Home.scss';

/* HTML */
export default function Home() {
  const highlightClass = 'Highlight';
  const emphasisClass = 'Emphasis';

  return (
    <section className='home' id='home'>
      <div className='home-background'>
          <div className="home-text">
            <h1><span className={highlightClass}>C++</span> & <span className={highlightClass}>Unreal Engine</span> Developer</h1>
            <h2>Welcome to my portfolio!</h2>
            <p>
            Looking for a<span className={`${highlightClass} ${emphasisClass}`}> junior games programmer position</span>.
            </p>
            <a href="#projects">
                <DownArrowSVG className="down-arrow-icon"/>
            </a>
          </div>
      </div>
    </section>
  );
}