/* React Imports */
import { ShortIntro, ShortIntroAlinea, ShortIntroTitle } from './shared/ShortIntro.js';
import ShortIntroMedia from './shared/ShortIntroMedia.jsx';

/* Style Imports */
import '../../styles/cards/BFG.css';

/* HTML */
export default function BFG() 
{ 
    return (
        <div className="BFG">
            <ShortIntro>
                <ShortIntroAlinea>
                    <ShortIntroTitle>
                        Quick Overview
                    </ShortIntroTitle>
                    <p>
                        BFG Short Text
                    </p>
                </ShortIntroAlinea>
                <ShortIntroMedia MediaFilePath='./assets/ProjectImages/BFG/Showcase_FullPerceptionSystem.mp4' />
            </ShortIntro>
            <h2>Black Forest Games GMBH</h2>
                <p>
                    As final part to my education I completed an internship at Black Forest Games.
                    They are a German Company located in Offenburg. 
                    Mostly known for titles such as "Giana Sisters: Twisted Dreams", "Fade to Silence", "Destroy All Humans 1 & 2". 
                    During my time there I joined the team to release an upcoming title.
                    My main task was creating a Perception System, and I also worked with the team to improve the chain reaction system.
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
                <h3>System Analysis</h3>
                    <p>
                        The fact this system was separate at the start also gave me the task to think about how I would design the system from scratch.
                        Therefore I was able to make plenty of mistakes, rip out big parts and put them back together in an improved way.
                        As I kept working on the system, I became more and more familiar with it (and a little bit attached).
                    </p>
                    <h4>Mass Structure</h4>
                        <p>
                            Each perception type has one regular fragment. On it are stored the parameters for that perception type. 
                            Designers can add these fragments on any entity and tweak its values, to make it perceive.
                            In code each perception type has its own matching processor, that iterates over the fragments and performs its logic.
                            The player is made perceivable by adding a mass tag to it. 
                            When a processor listens to the addition of that tag, a reference to its mass handle is stored in the perception subsystem.
                            This way if later the player had a dog running with him, you could just add the tag to the dog and it would be perceivable.
                        </p>
                    <h4>Types Of Perception</h4>
                        <h5>Sight</h5>
                            <p>
                                The sight processor iterates over all entities that have a sight wedge fragment and checks if they can see any perceivable entities.
                                If that is the case it sends out a corresponding event; an entity entered my sight wedge.
                                And it will try to store a reference to that entity on the sight wedge fragment. 
                                By storing these references, we can compare them to last frame to determine whether the entity is still in the sight wedge, or it has left.
                                Then we can send out the appropriate event, 'an entity exited my sight wedge', and remove it from the array on the fragment. 
                            </p>
                        <h5>Listening</h5>
                            <p>
                                Any noises produced by entities are stored for one frame in the perception subsystem.
                                The listening processor iterates over all entities that have a listening sphere fragment and checks if they hear any of those noises.
                                If the entity was able to hear a noise (produced by any entity), it sends out the corresponding event; I heard a noise.
                                After executing all of its logic it clears out the noises stored in the perception subsystem.
                            </p>
                        <h5>Feeling</h5>
                            <p>
                                Any entity that receives damage, will send out an event, I got hit.
                                If the amount of damage was enough to kill the entity it will not, this way we allow for stealth.
                            </p>
                    <h4>Responding To The Events</h4>
                        <p>
                            Responding to these events is not part of the perception system.
                            Instead that happens in the chain reaction system.
                            There are processors that listen to the events sent out by the perception system.
                            These processors then execute any chain reaction actions when this event triggers.
                            As I was using this system, I also found out that some core functionality was missing, but more about that below the Perception System.
                        </p>
                <h3>Evolution of the system</h3>
                    <h4>Simple Beginnings</h4>
                        <p>
                            I had never worked with Mass before, so I knew it was going to take some time to get it right.
                            In my first iteration for the system I was working with constant shared fragments, thinking that a per config basis was appropriate.
                            Initially this was fine, but later on designers wanted to change it per instance, so we needed to switch to a regular fragment for a per instance basis.
                            Logic wise not a lot changed, but I had to rip out a lot of code and make it work again with the new fragment type.
                        </p>
                        <h5>Sight Perception</h5>
                            <div className='Media-Next-To-Text'>
                                <p>
                                    For the sight perception, the designers wanted a sight wedge, not just a cone.
                                    So I simplified the math into 3 steps, a distance check, a height check and an angle check.
                                    Every check was to the center of the player for simplicity.
                                    By performing these checks in this order, I could stop the calculation early and avoid the more expensive angle check at the end.
                                </p>
                                <img src='./assets/ProjectImages/BFG/SightWedge_Visual_Initial.png' alt='Sight Wedge Visuals Initial'></img>
                            </div>
                            <img className='Code-Snippet' src='./assets/ProjectImages/BFG/SightWedge_Code_Initial.png' alt='Sight Wedge Code Initial'></img>
                        <h5>Hearing Perception</h5>
                            <div className='Media-Next-To-Text'>
                                <p>
                                    For the hearing perception, we just went for a simple sphere check.
                                    A noise is represented by a sphere with a radius, an enemy also has a radius and if these two overlap the enemy can hear the noise.
                                </p>
                                <img src='./assets/ProjectImages/BFG/ListeningSphere_Visual_Initial.png' alt='Listening Sphere Visuals Initial'></img>
                            </div>
                            <img className='Code-Snippet' src='./assets/ProjectImages/BFG/ListeningSphere_Code_Initial.png' alt='Listening Sphere Code Initial'></img>
                        <h5>Feeling Perception</h5>
                            <p>
                                Creating the feeling perception was the first time that I had to work in other parts of the codebase that weren't on my island.
                                At first I was a bit scared to make changes to existing code. 
                                I will never forget the first one. Some logic on public struct members happening twice in 2 different places.
                                So I quickly refactored it into a function and called it from both places. 
                                Receiving feedback on that change reaffirmed that code is an ever evolving process. 
                            </p>
                    <h4>Maintenance Work</h4>
                        <p>
                            To keep it simple at the start, the perception system was created purely for enemies.
                            Once that evolved and new use cases came up, trouble arose.
                        </p>
                        <h5>Security Cameras = Trouble</h5>
                            <div className='Media-Next-To-Text'>
                                <div className='SecurityCameraAlignmentText'>
                                    <p>
                                        When the sight perception was created, all entities that used it were aligned with the world up axis.
                                        Once security cameras were introduced and they could be rotated in the world, the sight wedge no longer worked as intended.
                                        <br></br><br></br>
                                        Below you'll find an update version of the sight wedge detection.
                                        It uses projections of vectors onto the appropriate axis to accommodate for the rotations.
                                    </p>
                                </div>
                                <video className='SecurityCameraAlignmentVideo' src='./assets/ProjectImages/BFG/ShowcaseSecurityCameraBad.mp4' autoPlay loop muted controls />
                            </div>
                                <img className='Code-Snippet' src='./assets/ProjectImages/BFG/SightWedge_Code_Updated.png' alt='Sight Wedge Code Updated' />
                        <h5>Make It More Generic!</h5>
                            <p>
                                Security cameras don't need to start combat, they need to open doors, trigger alarms and so on.
                                So instead of triggering combat, I changed it to a generic event 'entity within sight wedge'.
                                Doing it this way also allowed for any entity to have a detection period.
                                <br></br><br></br>
                                Additionally they also don't need a listening sphere, so I introduced a base fragment for perception type fragments.
                                This allowed to just store them in an array on the entity and add or remove which ever one the designer needed.
                                Sadly, this was not covered by default mass functionality, as most of it happens with templates.
                                But the type was unknown at runtime, so I had to do a mass deep dive and create a custom push command.
                            </p>
                    <h4>Finalizing</h4>
                        <h5>Increasing Detection Accuracy</h5>
                            <div className='Media-Next-To-Text'>
                                <p>
                                    After discussing the system with another programmer over lunch, he suggested checking out something he implemented for a different game.
                                    Instead of checking for a single point, you generate spheres within a capsule from the player.
                                    Similarly, I generated those (spheres) cylinders in my case as the math already in place worked for that.
                                    <br></br><br></br>
                                    After writing this I realised that generating three cylinders with the same radii on top of each other can really just be 1 big cylinder.
                                    Unfortunately, I am no longer at the company to change that.
                                </p>
                                <img src='./assets/ProjectImages/BFG/SightWedge_Visual_Cylinder.png' alt='Sight Wedge Visuals Cylinder'></img>
                            </div>
                        <h5>Debugging</h5>
                            <div className='Media-Next-To-Text'>
                                <p>
                                    To help designers finetune the parameters of the system, I added debugging options at editor time and runtime.
                                    This way of opt-in debugging through the console, allows both designers and programmers to easily debug it without causing any clutter.
                                </p>
                                <video src='./assets/ProjectImages/BFG/PerceptionSystem_DesignerExperience.mp4' alt='Designer Usage' autoPlay loop muted controls></video>
                            </div>
                        <h5>Documentation</h5>
                            <p>
                                Additionally I wrote external documentation for anyone to understand how to use the system.
                                This included explanations of each perception type, every parameter, how to enable debugging.
                                As the system was evolving, I kept the documentation up to date.
                            </p>
            <h2>Chain Reaction System</h2>
                <h3>What's missing?</h3>
                    <div className='Media-Next-To-Text'>
                        <p>
                            As I started using the chain reaction system, to activate combat on perception events, I quickly discovered some core functionality was missing. 
                            After debugging for an extensive period why I couldn't get two instigators to work I stumbled on this hidden code.
                            Quite a surprise to find out that something I could select in blueprints, wouldn't translate to C++.
                            So I added support for it.
                        </p>
                        <img src='./assets/ProjectImages/BFG/SingleInstigatorProblem.png' alt='Single Instigator Problem'></img>
                    </div>
                <h3>Hard To Use</h3>
                    <p>
                        The more I was using the system, the more cumbersome it became to work with. 
                        If you wanted a chain reaction to listen to the same event, you had to duplicate the entire chain reaction and add a different action.
                        If an entity was listening to itself for the event to trigger, it suddenly became impossible for anyone else to trigger the event.
                        I discussed this with my colleague and we came to the conclusion that indeed it could be improved. 
                        The result is that designers can now achieve the image on the right instead of the left.
                    </p>
                    <div className='Title-Next-To-Title'>
                        <p>Before</p>
                        <p>After</p>
                    </div>
                    <div className='Img-Next-To-Img'>
                        <img src='./assets/ProjectImages/BFG/ChainReaction_Visuals_Before.png' alt='Chain Reaction Visual Before'></img>
                        <img src='./assets/ProjectImages/BFG/ChainReaction_Visuals_After.png' alt='Chain Reaction Visual After'></img>
                    </div>
                    <p>Before</p>
                    <img className='Code-Snippet' src ='./assets/ProjectImages/BFG/ChainReaction_Code_Before.png' alt='Chain Reaction Code Before'></img>
                    <p>After</p>
                    <img className='Code-Snippet' src ='./assets/ProjectImages/BFG/ChainReaction_Code_After.png' alt='Chain Reaction Code After'></img>
            <h2>Conclusion</h2>
        </div>
    )
};