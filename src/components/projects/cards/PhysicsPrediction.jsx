/* React Imports */
import ShortIntro from './shortintro/ShortIntro.jsx';
import ShortIntroMedia from './shortintro/ShortIntroMedia.jsx';
import ShortIntroTitle from './shortintro/ShortIntroTitle.jsx';
import { SIHighlight } from '../../shared/highlight.js';

/* Style Imports */
import './PhysicsPrediction.css'; 

/* HTML */
export default function PhysicsPrediction() 
{
    return (
        <div className='PhysicsPrediction'>
            <ShortIntro>
                <div>
                    <ShortIntroTitle>
                        Quick Overview
                    </ShortIntroTitle>
                    <p>
                        This project is my implementiation of the <SIHighlight>math</SIHighlight> required for a basic<SIHighlight>physics simulation</SIHighlight>.
                        Additionally, I also provided <SIHighlight>custom collision detection</SIHighlight> for the walls and ball.
                        <br/><br/>
                        The simulation takes into account <SIHighlight>several parameters</SIHighlight> such as mass, gravity, drag, acceleration, velocity, and elasticity.
                        The user can modify the parameters easily to change the outcome of the simulation.
                        <br/><br/>
                        On the <a href='https://github.com/AdriaanMusschoot/TrajectoryPrediction'>Github</a>  readme you can find further explanation about the implementation.
                    </p>
                </div>
                <ShortIntroMedia MediaFilePath='./assets/ProjectImages/TrajectoryPrediction/PhysicsSimulation.gif' />
            </ShortIntro>
        </div>
    )
}