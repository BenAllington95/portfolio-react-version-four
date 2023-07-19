import React, { useState, useEffect } from 'react';

import HamburgerNavbar from './HamburgerNavbar';

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
          {isHamburgerNavOpen ? 'close' : 'open'}
        </button>
      )}
      <NavbarContext.Provider value={isHamburgerNavOpen}>
        
        {window.innerWidth < 768 ? 
        <HamburgerNavbar /> : "hello"}
      </NavbarContext.Provider>
    </header>
  );
};

export default Header;
