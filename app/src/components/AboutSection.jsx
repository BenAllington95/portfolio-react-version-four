import React from 'react';

const AboutSection = ({children}) => {
  return (
    <section className="about-section">
        <div className="about-content"> 
          {children}
      </div>
    </section>
  );
};

export default AboutSection;
