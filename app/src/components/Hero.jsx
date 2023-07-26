import React, { useEffect, useRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ScrollDownArrow from './ScrollDownArrow'

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';

const Hero = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      carouselRef.current.next();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderCustomPrevArrow = (onClickHandler, hasPrev) => {
    return (
      <button
        type="button"
        className={`custom-arrow prev-arrow ${hasPrev ? '' : 'disabled'}`}
        onClick={() => {
          onClickHandler();
        }}
      >
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
    );
};

const renderCustomNextArrow = (onClickHandler, hasNext) => {
    return (
      <button
        type="button"
        className={`custom-arrow next-arrow ${hasNext ? '' : 'disabled'}`}
        onClick={() => {
          onClickHandler();
        }}
      >
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
    );
};
  return (
    <section className="hero">
      <Carousel 
        ref={carouselRef} 
        showStatus={false} 
        autoPlay={true} 
        showThumbs={false} 
        infiniteLoop={true} 
        interval={25000} 
        showIndicators={false} 
        emulateTouch={true}
        renderArrowPrev={renderCustomPrevArrow}
        renderArrowNext={renderCustomNextArrow}
      >
        <div className="hero-section">
          <HeroSection />
        </div>
        <div className="hero-section">
          <AboutSection />
        </div>
        <div className="hero-section">
          <div className="page-component">
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
