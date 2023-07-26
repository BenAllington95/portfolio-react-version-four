import React, { useState, useEffect } from 'react';

const codeSnippet = `const ben = {
  name: 'Ben',
  age: 28,
  occupation: 'Front End Developer',
  location: 'England'
};`;

const HeroSection = () => {
  const [typedCode, setTypedCode] = useState('');
  const codeSpeed = 50; // Adjust typing speed (milliseconds per character)

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= codeSnippet.length) {
        setTypedCode(codeSnippet.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, codeSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="hero-section">
      <pre>
        <code>{typedCode}</code>
      </pre>
    </div>
  );
};

export default HeroSection;
