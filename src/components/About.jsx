/* Data Imports */
import Breaker from './Breaker.jsx';

/* Style Imports */
import '../styles/About.css';

/* HTML */
export default function About() {
  return (
    <section className="about" id='about'> 
          <h2>About</h2>
            <div className="about-content">
              <div className="about-left">
                <img src="./assets/Profile/ProfilePicture.jpg" alt="me" className="about-image" />
                <a href="./assets/Profile/20251508_CV_AdriaanMusschoot_Public.pdf" target="_blank" rel="noopener noreferrer">
                  <p>CV</p>
                </a>
              </div>
              <div className="about-text">
                <p>
                  Hi there! Let me tell you a little bit about myself. In case you missed the intro my name is Adriaan.
                  My curiosity for games started with mobile games, such as Clash of Clans and Clash Royale. 
                  When I got my first laptop, I turned to Rocket League and the DOOM Franchise.
                  <br></br><br></br>
                  After discovering I could follow a degree in game development, that's exactly what I did.
                  It wasn't easy as I had never programmed before, but I stuck through it and now I am a proud graduate with a Bachelor's in
                  <a href="https://www.digitalartsandentertainment.be/page/31/Game+Development" target="_blank" rel="noopener noreferrer">Game Development</a>!
                  <br></br><br></br>
                  My favourite programming task usually involves some geometric brain gymnastics.
                  Setting up gameplay systems for designers is also something I really enjoy, as it requires me to think about all aspects of the system.
                  <br></br><br></br>
                  Currently I am looking for a job as a Junior Programmer.
                  The minimum requirement for it is programming. Gameplay, Tools, Software... anything goes, I am genuinely curious and eager to learn about anything thrown in my path.
                  Don't hesitate to <a href="mailto:contact@adriaanmusschoot.com">reach out</a> if you know of an opportunity!
                </p>
              </div>
            </div>
      <Breaker/>
    </section>
  );
}

/* As a passionate developer who thrives in <span className={emphasisClass}>team environments</span>, I love to help other people.
              I have a keen <span className={emphasisClass}>eye for detail</span> and like working neatly, keeping everything <span className={emphasisClass}>organized</span> and refactoring when needed to keep everything clean.
              When I encounter problems, I can really grit my teeth and <span className={emphasisClass}>persist</span> until I find an effective and elegant solution.
              <br></br><br></br> */