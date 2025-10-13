import React from 'react';

/* Data Imports */
import skills from '../data/skills.json';

/* Style Imports */
import '../styles/Skills.css';

/* HTML */
export default function Skills() {
  const PrimarySymbol = '♦';
  const SecondarySymbol = '♢';

  return (
    <section id='skills' className='skills-section'>
        <div className='header'>
          <h2>Skills</h2>
          <p className='levels'>
            <p className='primary-legend'>Primary / Proficient = {PrimarySymbol}</p>
            <p className='secondary-legend'>Secondary / Some Experience = {SecondarySymbol}</p>
          </p>
        </div>
        <div className='skills'>
                {
                  skills.map((skill) => 
                    (
                      <div className='section'>
                            <h4>{skill.title}</h4>
                            <div className='primary-elements'>
                              {
                                skill.contents.map((content) =>
                                  content[1] === 'Primary' ? (
                                      <p>{PrimarySymbol} {content[0]}</p> ) : null
                                )
                              }
                            </div>
                            <div className='secondary-elements'>
                              {
                                skill.contents.map((content) =>
                                  content[1] === 'Secondary' ? (
                                      <p>{SecondarySymbol} {content[0]}</p> ) : null
                                )
                              }
                            </div>
                      </div>
                    ))
                  }
        </div>
    </section>
  )
};