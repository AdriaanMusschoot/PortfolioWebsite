/* Data Imports */

/* Style Imports */
import '../styles/Epilogue.css';

/* HTML */
export default function Epilogue() {
  const LaisLink = 'https://portfolio-25ma.onrender.com/';
  const JulianLink = 'https://julianrijken.com/';
  
  return (
    <div className='epilogue'>
        <h2>Epilogue</h2>
          <p>
            Credits to:
            <br></br>
            <a href={LaisLink} target='_blank' rel='noreferrer'>
              Lais Ben Belgacem
            </a>
              : for the initial layout and framework setup.
            <br></br>
            <a href={JulianLink} target='_blank' rel='noreferrer'>
              Julian Rijken
            </a>
              : for the layout inspiration.
            <br></br><br></br>
            Copyright © 2025
            <br/>
            Adriaan Musschoot Portfolio Website.
            <br/>
            All rights reserved.
          </p>
    </div>
  )
};