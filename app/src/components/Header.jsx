import React, { useState, useEffect } from 'react';

import HamburgerNavbar from './HamburgerNavbar';
import PcNavbar from './PCNavbar';

export const NavbarContext = React.createContext();

const Header = () => {
  const [isHamburgerNavOpen, setIsHamburgerNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsHamburgerNavOpen(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsHamburgerNavOpen(!isHamburgerNavOpen);
  };

  return (
    <header>
      {window.innerWidth < 768 && (
        <button className="hamburger-nav-btn" onClick={toggleNav}>
          {isHamburgerNavOpen ? 
          <ion-icon name="close-sharp"></ion-icon> 
          : <ion-icon name="reorder-three-outline"></ion-icon>}
        </button>
      )}
      <NavbarContext.Provider value={isHamburgerNavOpen}>
        {window.innerWidth < 768 ? 
        <HamburgerNavbar /> : <PcNavbar />}
      </NavbarContext.Provider>      
    </header>
  );
};

export default Header;
