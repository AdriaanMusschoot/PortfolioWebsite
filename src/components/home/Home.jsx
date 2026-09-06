/* Data Imports */
import { ReactComponent as DownArrowSVG } from '../../assets/svg/down_arrow_icon.svg';
import { Highlight } from '../shared/highlight.js';

/* Style Imports */
import './Home.scss';

/* HTML */
export default function Home() {

  return (
    <section className='home' id='home'>
      <div className='home-background'>
          <div className="home-text">
            <h1><Highlight>C++</Highlight> & <Highlight>Gameplay Developer</Highlight></h1>
            <h2>Welcome to my portfolio!</h2>
            <p>
            Working on <Highlight>Hunting Simulator 3</Highlight> at <Highlight>Nacon Studio Ghent</Highlight>.
            </p>
            <a href="#projects">
                <DownArrowSVG className="down-arrow-icon"/>
            </a>
          </div>
      </div>
    </section>
  );
}