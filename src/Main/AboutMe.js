import React from 'react';
import Resume from './Resume';
import Home from './Home';
import './AboutMe.css';
import './Resume.css'
const maxWidth = 1024

const silverBackground = {
  margin: 0,
overflow: 'hidden',
    background: 'silver',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

function AboutMe() {
    return (
      <div className="AboutMe" style={silverBackground}>
        <div className='whiteThinPage'>
        <Home />
        </div>
      </div>
    );
  }

export default AboutMe;