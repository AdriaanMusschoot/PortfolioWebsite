/* HTML */
export default function FeaturedBFG({ highlightClassName }) {
  return (
    <div className='featured-bfg'>
        <p>
          During my time at Black Forest Games Gmbh. I joined the team to work on an upcoming 3D action open world action games.
          Learning <span className={highlightClassName}>Mass</span> for the first time.
          Further improving my skills in <span className={highlightClassName}>C++</span> and <span className={highlightClassName}>UE5</span>.
          I was responsible for creating a<span className={highlightClassName}> perception system</span> and needed to collaborate with designers.
          I also worked on the <span className={highlightClassName}>chain reaction system</span> after noticing some shortcomings to the <span className={highlightClassName}>user experience</span>.
        </p>
    </div>
  )
};