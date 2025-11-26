/* Data Imports */

/* Style Imports */
import './Epilogue.css';

/* HTML */
export default function Epilogue() {
  const LaisLink = 'https://www.linkedin.com/in/lais-ben-belgacem-0672b72b3/';
  const SenneLink = 'https://www.linkedin.com/in/senne-bovee/';
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
            <a href={SenneLink} target='_blank' rel='noreferrer'>
                Senne Bovée
            </a>
            : for creating my awesome logo.
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