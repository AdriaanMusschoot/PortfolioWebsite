import React from 'react';
import skills from '../data/skills.json';

export default function Skills() {
  return (
    <div className='skills'>
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
                                          <span className='skill-name'>{content[0]}</span> 
                                          <span className='skill-level'>{content[1]}</span>
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