import React, { useState, useEffect } from 'react';

const codeSnippet = `const skills = {
  html: true,
  css: true,
  scss: true,
  javascript: true,
  react: true,
  github: true
};`;

const SkillsSection = () => {
  const [typedCode, setTypedCode] = useState('');
  const codeSpeed = 100; // Adjust typing speed (milliseconds per character)

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

export default SkillsSection;
