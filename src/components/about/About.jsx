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
                        I started with mobile games such as Clash Of Clans, Clash Royale and Bloons TD. 
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
                        Currently, I am hunting for my first job in the industry! Please<a href='#contact'>reach out</a>if you know of any opportunies.
                    </p>    
                    <p >
                    </p>
                </div>
        </section>
    );
}