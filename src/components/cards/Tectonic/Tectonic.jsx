import React from "react";

/* Data Imports */
import WorkingExampleIMG from './Resources/WorkingExample.png';
import ImpossibleShapeIMG from './Resources/ImpossibleShape.png';
import BlockingShapeIMG from './Resources/BlockingShape.png';
import UnfillableShapeIMG from './Resources/UnfillableShape.png';

/* Style Imports */
import './Tectonic.css';

/* HTML */
export default function Tectonic({activeIndex}) {
    return (
      <>
        <div className='Tectonic'>
            <h2>The Project</h2>
            <p>
               For a personal passion project I decided to try to automate the process of setting up a Tectonic puzzle myself. 
               I made this project in my own 2D game engine, Amugen, since all I needed was some basic 2D graphics and very rigid logic.
               It is still a work in progress, as I work on it on my own whenever I can find the time.<br/> 
               To find out more about my progress and a bit of an explanation take a look below.
            </p>
            <h3>What is a tectonic, you might wonder?</h3>
            <p>
              A Tectonic Puzzle (also known as Suguru) is a logic-based number puzzle where you fill a grid divided into irregularly shaped regions. 
              Each region needs to be filled with the numbers from 1 up to the number of cells in that region, so a 5-cell region will use 1 through 5, for example.
              The catch is that the same number can’t appear in two cells that touch, even diagonally. 
              Solving it requires a mix of logic, deduction, and pattern recognition, 
              often starting with regions that have only one possible solution and gradually narrowing down options as you move through the grid.
              Feel free to take a look at this example below!
            </p>
            <img
              className='big'
              src={WorkingExampleIMG}
              alt='Working Example'
            />
            <h3>Why tectonics?</h3>
            <p>
              Well it's simple, I love making them. I am an avid fan of solving puzzles through analytic reasoning.
            </p>
            <h2>Progress</h2>
            <h3>Setting up the grid</h3>
            <p>
              Below you can find some of the issues I have encountered with my first approach.
              My first approach went something like this, we start in the top left corner.
              We generate some random directions and look if the cell in that direction is already taken or if there is no cell there, sort of a flood fill.<br/>
              I hadn't foreseen this but there were some issues that arose.
            </p>
            <div class="container">
              <div class="column">
                <h4>Unfillable Shapes</h4>
                <img class="img" src={UnfillableShapeIMG} alt="thumbnail" />
                <p>
                    Some shapes become impossible to fill up with the correct numbers later on.
                    Take this shape for example. 
                    Whatever is filled in in the middle square (1), <br/>
                    is impossible to fill in any of the surrounding squares, 
                    making the outer shape (0) impossible to fill due to the ruleset of Tectonics.<br/>
                    For a solution and my next approach, ill be trying to layout predetermined shapes instead of this flood fill approach.
                </p>
              </div>
              <div class="column">
                <h4>Blocking Shapes</h4>
                <img class="img" src={BlockingShapeIMG} alt="thumbnail" />
                <p>
                    Here in a similar fashion to the first one it is also impossible to fill up.
                    If there were a 4 or 5 filled in as part of a bigger shape (10), the shape (9) is not impossible to fill up.
                    However due to the nature of the approach a shape with size one make this impossible to fill up.
                    To solve this I will try to pre-emptively fill in the shape with its digits.
                    I could then unwind the stack and place a different shape and try again. 
                </p>
              </div>
              <div class="column">
                <h4>Generating shapes</h4>
                <img class="img" src={ImpossibleShapeIMG} alt="thumbnail" />
                <p>
                    With this flood-fill approach there is another issue.
                    Some shapes are simply not possible to generate.<br/>
                    Take this one for example, coming from the middle square and choosing the utmost left square as our next square,
                    There is no going back to any of the other squares.
                    The approach of defining all shapes before hand and choosing them from a pool to place in the level should solve this issue. 
                </p>
              </div>
            </div>
            <a 
              href='https://github.com/AdriaanMusschoot/Amugen' 
              target='_blank' 
              rel='noopener noreferrer'
            >
              <img
                className='git-img'
                src='./assets/ProjectImages/GITHUB.png'
                alt='git'
              />
            </a>
        </div>
      </>
    )
  };