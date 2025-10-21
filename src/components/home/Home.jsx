/* Style Imports */
import './Home.css';

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
          </div>
      </div>
    </section>
  );
}