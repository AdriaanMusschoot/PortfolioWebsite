import React from 'react';

/* Data Imports */
import skills from '../data/skills.json';

/* Style Imports */
import '../styles/Skills.css';
import Breaker from './Breaker';

/* HTML */
export default function Skills() {
  return (
    <section id='skills' className='skills-section'>
        <div className='header'>
          <h2>Skills</h2>
          <p className='levels'>
            Primary / Proficient = ●
            <br></br>
            Secondary / Some Experience = ○
          </p>
        </div>
        <div className='skills'>
                {
                  skills.map((skill) => 
                    (
                      <div className='skills-container'>
                            <h4>{skill.title}</h4>
                            {
                              skill.contents.map((content) => 
                                (
                                  <li className='content'>
                                    {
                                      Array.isArray(content) ? (
                                        <>
                                              <p>
                                                {content[1] === 'Primary' ? '● ' : content[1] === 'Secondary' ? '○ ' : ''}{content[0]}
                                              </p> 
                                            </>
                                          ) : (
                                            <span className='skill-name'>{content}</span>
                                          )
                                        }
                                  </li>
                                ))
                              } 
                      </div>
                    ))
                  }
        </div>
      <Breaker/>
    </section>
  )
};