/* Data Imports */

/* Style Imports */
import '../../styles/cards/BFG.css';

/* HTML */
export default function BFG() 
{
    return (
        <div className="BFG">
            <p>Work in progress</p>
            <h2>Black Forest Games GMBH</h2>
                    <p>
                        As final part to my education I completed an internship at Black Forest Games.
                        They are a German Company located in Offenburg. 
                        Mostly known for titles such as "Giana Sisters: Twisted Dreams", "Fade to Silence", "Destroy All Humans 1 & 2". 
                        During my time there I joined the team to release an upcoming title.
                        My main task was creating a Perception System.
                        I also worked together with the team on the trigger device system and improved the chain reaction system.
                        I will dive a bit deeper into my work for each of these systems below.
                    </p>
            <h2>Disclaimer!</h2>
                    <p>
                        All visual assets shown below, have been modified to not show any of the actual visuals of the game.
                    </p>
            <h2>Perception System (Core Project)</h2>
                <h3>The Goal Of The System</h3>
                    <p>
                        Initially this task was assigned to me so I could familiarize myself with the code base
                        and Unreal's Mass framework at my own pace as it was a new system not being actively worked on by others.
                        It later evolved into a core system for the designers to adopt, and start designing their levels.
                        <br></br><br></br>
                        At the time for the enemies to start combat, the designers needed to manually place trigger zones in the world, and hook them up appropriately.
                        This was quite tedious for the designers, and it also limited the gameplay possibilities.
                        <br></br><br></br>
                        They wanted to be able to have some kind of stealth mechanic, where the player could sneak around enemies undetected.
                        For that to work enemies needed to be able to perceive the player by either hearing him make a sound, watching him crawl around in their fov or feeling an attack from the yet undetected player. 
                        Any of these would send out an event and in this case start combat.
                    </p>
                <h3>Simple Beginnings</h3>
                    <p>
                        I had previously never worked with Mass, so I knew it was going to take some time to get it right.
                        In my first iteration for the system I was working with constant shared fragments, thinking that a per config basis was appropriate.
                        Initially this was fine, but later on designers wanted to change it per instance, so we needed to switch to a regular fragment for a per instance basis.
                        <h4>Sight Perception</h4>
                            <div className='SightWedgeInitial'>
                                For the sight perception, the designers wanted a sight wedge, not just a cone.
                                So I simplified the math into 3 steps, a distance check, a height check and an angle check.
                                Every check was to the center of the player for simplicity.
                                By performing these checks in this order, I could early out and avoid the more expensive angle check at the end.
                                <img className='SightWedgeVisualInitial' src='./assets/ProjectImages/BFG/SightWedge_Visual_Initial.png' alt='Sight Wedge Visuals Initial'></img>
                            </div>
                            <img className='SightWedgeCodeInitial' src='./assets/ProjectImages/BFG/SightWedge_Code_Initial.png' alt='Sight Wedge Code Initial'></img>
                        <h4>Hearing Perception</h4>
                            <div className='ListeningSphereInitial'>
                                For the hearing perception, we just went for a simple sphere check.
                                A noise is represented by a sphere with a radius, an enemy also has a radius and if these two overlap the enemy can hear the noise.
                                <img className='ListeningSphereVisualInitial' src='./assets/ProjectImages/BFG/ListeningSphere_Visual_Initial.png' alt='Listening Sphere Visuals Initial'></img>
                            </div>
                            <img className='ListeningSphereCodeInitial' src='./assets/ProjectImages/BFG/ListeningSphere_Code_Initial.png' alt='Listening Sphere Code Initial'></img>
                    </p>
                <h3>Maintenance Work</h3>
                    <p>

                    </p>
                <h3>Finalizing</h3>
                    <p>
                        The fact it was seperate also gave the task to think about how I would design the system from the ground up.
                        From which I was able to make plenty of mistakes, rip out big parts and put them back together in an improved way.

                    </p>
        </div>
    )
};