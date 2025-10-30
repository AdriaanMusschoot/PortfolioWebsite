/* React Imports */
import ShortIntro from './shared/shortintro/ShortIntro.jsx';
import ShortIntroMedia from './shared/shortintro/ShortIntroMedia.jsx';
import ShortIntroTitle from './shared/shortintro/ShortIntroTitle.jsx';

/* Style Imports */
import './GetCooked.css';

/* HTML */
export default function GetCooked() 
{
    return (
        <div className='GetCookedCard'>
            <ShortIntro>
                <div>
                    <ShortIntroTitle>
                        Quick Overview
                    </ShortIntroTitle>
                    <p>
                        Here Is Text
                    </p>
                </div>
                <ShortIntroMedia MediaFilePath="./assets/ProjectImages/GetCooked!/Trailer_GetCooked!.mp4" />
            </ShortIntro>
            <h2>Prototyping</h2>
            <p>
                Creating the initial prototype for Get Cooked! was quite chaotic. We were only 3 programmers, no art no design.
                As you can imagine the visuals were not up to par, but for a prototype it had to do.
                <br></br><br></br>
                We lacked version control like Perforce for proper management of binary files.
                Totally not ideal as we decided to only use blueprints for quick iteration.
                Our solution? A discord channel with the files you currently had checked out. 
                Far from ideal, it definitely didn't result in us comparing them visually, whenever a merge conflict did happen.
                This really makes you appreciate the tools that are available.
                <br></br><br></br>
                We only had a week to create a prototype, so we mainly focused on getting a full game loop working for a proof of concepts.
                It even boiled down to us getting together on the final night.
                Then we could try to balance the troops, as we didn't have any time before.
                At least after we found new bugs and fixed them for a big part of that evening.
                I will never forget that night, that was some of the best bonding time with my team.
            </p>
            <div className='Foodwars-Container'>
                <img src='./assets/ProjectImages/GetCooked!/FoodWars_Throwing.gif' alt='Food Wars Throwing'/>
                <img src='./assets/ProjectImages/GetCooked!/FoodWars_TowerAndTroopVsEnemy.gif' alt='Food Wars Tower And Troop Vs Enemy'/>
                <img src='./assets/ProjectImages/GetCooked!/FoodWars_TowerVsEnemy.gif' alt='Food Wars Tower Vs Enemy'/>
                <img src='./assets/ProjectImages/GetCooked!/FoodWars_TroopInteraction.gif' alt='Food Wars Troop Interaction'/>
            </div>
            <h3>What I did</h3>
            <p>
                As I am an avid fan of geometric brain gymnastics, I immedeately grabbed the throwing mechanic task.
                It was quite fun to reverse engineer the throwing trajectory using some clever math.
                Also when the throwing arc was added we used the debug lines first and when we made the build on the final day we realised that vanished.
                So we quickly added a spline renderer to visualize the throwing arc (which was reassigned every frame but hey it's only a prototype right?).
                <br></br><br></br>
                My second task was the cooking aspect. This meant I got to work with the beautiful state pattern which I really enjoyed.
                I also added the basic functionality of the player walking, picking up ingredients, placing them etc. 
                And of course the team helped each other out where needed.
            </p>
            <h2>Development</h2>
            <p>
                We had a development period of about 6 weeks. Extra features were needed and others were slashed.
                <br></br><br></br>
                When the game was play tested, players didn't know what to do when picking up the wrong ingredient, 
                we intended for them to use it as ammo in an unused kitchen.
                Players were looking for a place to throw the ingredient away. 
                So we added a trash can to get rid of unwanted ingredients.
                This was a small but nice addition for players to feel more comfortable.
                <br></br><br></br>
                As deadlines drew closer we noticed we wouldn't have time to implement every troop we wanted.
                So, as a team we decided to not implement the last troop (rest in peace, wrap).
                Luckily, there would still be a fully playable game with the troops we already conjured up.
            </p>
            <h3>What I did</h3>
            <p>
                During development we switched up the roles a bit. 
                One of our programmers who had previously implemented the troops, got really fed up with it.
                I saw an opportunity to work with the state pattern and learn how to implement the AI behaviour for our troops.
                At the time I had become really fond of the state pattern so I started my own implementation right away.
                Getting that initial state machine working was quite tricky, and actually maintaining it was too. 
                I dove in head first, and didn't really compare the tools already available.
                I think I could have saved myself much work if I had used Unreal's behaviour trees or in house state machine solution.
                <br></br><br></br>
                I also added localization. I learned from implementing the statemachine for the troops quickly without checking existing solutions, 
                that I should take some time and learn about Unreal's built in systems for that.
                Once, I figured that out it was quite nice to work with.
                <br></br><br></br>
                When people play against each other it seemed they liked to compare their stats for that round. 
                So that's exactly what I implemented with a post game stat menu. 
                Sadly, we did not decouple it quite as well as I remembered. 
                We just call straight to the objects instead of using events, to keep our concerns seperate.
            </p>
            <h2>Polishing</h2>
            <p>
                Two weeks to make the game feel as best as possible. Adding sounds, VFX, making the UI 3D on the final day.
                The final stretch was intense, but luckily we managed to get by without any crunch time.
                I added dynamic splatters it really made the kitchen come alive. 
                Overall, we kept quite a good separation of concerns, so adding all of these effects was as simple as just adding a call into the correct system.
            </p>
            <h2>The Game</h2>
            <p>
                Get Cooked! is a fast-paced action-strategy multiplayer game where culinary chaos meets strategic battles. 
                Gather ingredients, cook dishes, and unleash them as troops to dominate the battlefield. 
                Outcook and outfight your opponent to claim victory!
                <br></br><br></br>
                Your goal? Destroy your opponent's cooking stations while defending your own in fast-paced 1v1 matches. 
                Each dish brings unique powers to the fight, letting you strategize and outcook your rival.
                <br></br><br></br>
                With intuitive gameplay, unique dish combinations, and high-energy battles
                , Get Cooked! is the ultimate test of culinary and tactical skills. 
                Will you reign supreme in the kitchen clash? 
            </p>
        </div>
    )
};