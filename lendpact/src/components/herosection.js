import React from 'react';
import '../App.css';
import { Button } from './button.js';
import './herosection.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAccount } from "wagmi";


function HeroSection() {
  const { address, isConnecting, isDisconnected,isConnected } = useAccount();
  const handleBecomeLenderClick = () => {  console.log("handleBecomeLenderClick");  
  if (isConnected) {
     // Wallet is connected, proceed with your logic
     toast.success('Wallet is connected! Proceeding to become a lender.', {
      position: 'bottom-center',
      autoClose: 600000, // 10 seconds
    });
  }
  if (isDisconnected) {
    toast.error('Wallet is not connected. Please connect your wallet at top right.', {
      position: 'top-center',
      autoClose: 600000, // 10 seconds

    });
  }
  if (isConnecting) {
    toast.info('Connecting wallet...', {
      position: 'top-center',
      autoClose: 600000, // 10 seconds

    });
  }
 
}

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
          to='/lend'
          onClick={handleBecomeLenderClick}
        >
          Become a lender
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to='/borrow'  // Security best practice
        onClick={console.log('hey')}
        >
          Become a Borrower <i className='far fa-play-circle' />
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default HeroSection;