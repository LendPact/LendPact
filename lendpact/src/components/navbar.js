import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logoImage from "../images/logo.png";

import { ConnectKitButton } from "connectkit";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <img src={logoImage} alt="lendpact" className="navbar-logo-image" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/lend'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Lend
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/borrow'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Borrow
              </Link>
            </li>
{/*
            <li>
              <Link
                to='/connect-wallet'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Connect Wallet
              </Link>  
            </li>  */}
          </ul>
          <ConnectKitButton />
       {/*  {button && <Button buttonStyle='btn--outline'>CONNECT WALLET</Button>} */}
      </div>
      </nav>
    </>
  );
}

export default Navbar;
