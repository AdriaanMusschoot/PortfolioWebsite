/* Data Imports */
import ResumeButton from '../shared/buttons/ResumeButton.jsx';
import { Highlight } from '../shared/highlight.js';

/* Style Imports */
import './About.scss';

/* HTML */
export default function About() {
    return (
        <section className="about" id='about'> 
            <h2>About</h2>
                <div className="about-content">
                    <div className="about-left">
                        <img src="./assets/Profile/ProfilePicture.jpg" alt="me" className="about-image" />
                        <ResumeButton />
                    </div>
                    <p className="about-text">
                        Hi there! You've stumbled on my about. 
                        My name is <Highlight>Adriaan</Highlight>, I am a big fan of games.
                        I started with mobile games such as Clash Of Clans and Clash Royale and Bloons TD. 
                        When I got my first PC, I explored the DOOM franchise and started competing in Rocket League.
                        <br/><br/>
                        Once I discovered all the work that goes into creating and maintaining my favourite titles, it fueled my passion to craft my own games,
                        pushing me to pursue and achieve a <Highlight>Bachelor's Degree</Highlight> in <Highlight>Game Development</Highlight>.
                        <br/><br/>
                        I am a <Highlight>games programmer</Highlight> with a strong focus on <Highlight>C++</Highlight> and <Highlight>Unreal Engine</Highlight>.
                        From discussing code to debugging together and helping eachother, I thrive in <Highlight>team environments</Highlight>.
                        I work <Highlight>cleanly</Highlight> and am not afraid to <b>(re)organize</b> and <b>refactor</b> to achieve that. 
                        I have a keen <Highlight>eye for detail</Highlight> and can really grit my teeth and <Highlight>persist</Highlight> until I find <b>effective</b> and <b>elegant</b> solutions.
                        <br/><br/>
                        Currently, I am hunting for my first job in the industry! Please <a href='#contact'>reach out</a> if you know of any opportunies.
                    </p>    
                    <p >
                    </p>
                </div>
        </section>
    );
}

/*  As a passionate developer who thrives in <span className={emphasisClass}>team environments</span>, I love to help other people.
    I have a keen <span className={emphasisClass}>eye for detail</span> and like working neatly, keeping everything <span className={emphasisClass}>organized</span> and refactoring when needed to keep everything clean.
    When I encounter problems, I can really grit my teeth and <span className={emphasisClass}>persist</span> until I find an effective and elegant solution.
    <br></br><br></br>
*/

/*  Hi there! Let me tell you a little bit about myself. In case you missed the intro my name is Adriaan.
    My curiosity for games started with mobile games, such as Clash of Clans and Clash Royale. 
    When I got my first laptop, I turned to Rocket League and the DOOM Franchise.
    <br></br><br></br>
    After discovering I could follow a degree in game development, that's exactly what I did.
    It wasn't easy as I had never programmed before, but I stuck through it and now I am a proud graduate with a Bachelor's in Game Development!
    <br></br><br></br>
    My favourite programming task usually involves some geometric brain gymnastics.
    Setting up gameplay systems for designers is also something I really enjoy, as it requires me to think about all aspects of the system.
    <br></br><br></br>
    Currently I am looking for a job as a Junior Programmer.
    The minimum requirement for it is programming. Gameplay, Tools, Software... anything goes, I am genuinely curious and eager to learn about anything thrown in my path.
    Don't hesitate to <a href="mailto:contact@adriaanmusschoot.com">reach out</a> if you know of an opportunity!
*/