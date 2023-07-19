import React, { useState } from 'react';
import { NavbarContext } from './Header';

const HamburgerNavbar = () => {

  const isOpen = React.useContext(NavbarContext)

  return (
    <div className={`hamburger-navbar ${isOpen ? 'open' : ''}`}>
      <nav>
        <ul className='hamburger-nav'>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerNavbar;
