import React from 'react';
import '../App.css';
import { Button } from './button.js';
import './herosection.css';


function HeroSection() {
  console.log('HeroSection component is being rendered');
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Make a loan, support a builder.</h1>
      <p>Fund your favourite crypto projects with LendPact</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Become a lender.
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          How does it work? <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;