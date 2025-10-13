/* Style Imports */
import '../../../../styles/projects/featuredwork/individual/FeaturedGetCooked.css';

/* HTML */
export default function FeaturedGetCooked() {
  return (
    <div className='featured-get-cooked'>
        <p>
          This amazing project is being developed by a team of 6 (3 devs, 2 artist and 1 animator)
           in <span className='highlight'>Unreal Engine 5</span> using <span className='highlight'>C++</span>.
          <br /> <br />
          My main responsibility was the <span className='highlight'>Combat System</span> and AI Behaviour.
          Additionally, I implemented <span className='highlight'>local multiplayer</span>, and localization.
          <br /><br />
          It is a local multiplayer game where 2 players prepare their troops and send them to battle to destroy their opponents kitchen.
        </p>
    </div>
  )
};