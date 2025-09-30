/* Data Imports */

/* Style Imports */
import '../styles/Epilogue.css';

/* HTML */
export default function Epilogue() {
  const LaisLink = 'https://portfolio-25ma.onrender.com/';
  const JulianLink = 'https://julianrijken.com/';
  
  return (
    <div className='epilogue'>
        <p>
          Credits to:
        </p>
        <p>
          <a href={LaisLink} target='_blank' rel='noreferrer'>
            Lais Ben Belgacem
          </a>
            : for the initial layout and framework setup
        </p>
        <p>
          <a href={JulianLink} target='_blank' rel='noreferrer'>
            Julian Rijken
          </a>
            : for the layout inspiration
        </p>
    </div>
  )
};