import React, { useState } from 'react';

const PcNavbar = () => {

  return (
    <div className={`pc-navbar`}>
      <nav>
        <ul className='pc-nav'>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default PcNavbar;
