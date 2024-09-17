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
                            <ul>
                                <li>{content}</li>
                            </ul>
                        ))
                    } 
                </div>
            ))
        }
    </div>
  )
};