import React from 'react';
import skills from '../../data/skills.json';

import './Skills.css';

export default function Skills() {
  return (
    <div className='skills'>
     <div className='levels'>
      <div>
       ● Primary / Proficient
      </div>
      <div>
       ○ Secondary / Some Experience
      </div>
     </div>
        {
            skills.map((skill) => (
                <div className='skills-container'>
                    <h3>{skill.title}</h3>
                    {
                        skill.contents.map((content) => (
                                <li className='content'>
                                {
                                    Array.isArray(content) ? (
                                        <>
                                          <span className='skill-name'>
                                          {content[1] === 'Primary' ? '● ' : content[1] === 'Secondary' ? '○ ' : ''}{content[0]}
                                            </span> 
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
  )
};