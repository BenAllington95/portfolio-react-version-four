import React, { useEffect, useRef, version } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ScrollDownArrow from './ScrollDownArrow'

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';




const Hero = () => {
  const carouselRef = useRef(null);
  const carouselRefTwo = useRef(null);

  const certificateImages = [
    'https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', // Replace this with the actual Unsplash link for your certificate image,
    'https://images.unsplash.com/photo-1690205074022-560b3587cbc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  ];

  const certificateViewerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  
  const certificateImageStyles = {
    maxWidth: '100%',
    height: 'auto',
    margin: '10px',
  };
  
  


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
        emulateTouch={false}
        renderArrowPrev={renderCustomPrevArrow}
        renderArrowNext={renderCustomNextArrow}
      >
        <div className="hero-section">
          <HeroSection />
        </div>
        <div className="hero-section">
          <AboutSection>
          <code>
            <h2>about.ben</h2>
            <p> 
                Hi, I'm Ben, a self-taught front-end developer passionate about coding and design. I've spent the last two years honing my HTML, CSS, JavaScript, and React skills by creating a selection of projects.
            </p> 
            <p> 
                With strong problem-solving abilities, a keen eye for design, and valuable teamwork and perseverance lessons from sports, I can deliver high-quality work and fresh perspective.
            </p> 
        </code>
          </AboutSection>
        </div>
        <div className="hero-section">
          <AboutSection>
          {/* <code>
            <h2>certificates.ben</h2>
          </code> */}

          <Carousel 
            ref={carouselRefTwo} 
            showStatus={false} 
            autoPlay={true} 
            showThumbs={false} 
            showIndicators={false} 
            infiniteLoop={true}
            interval={5000}
            emulateTouch={true}
            axis={'vertical'}
            stopOnHover={true}
            showArrows={false}
          >
                {certificateImages.map((certificate, index) => (
                  <img
                    key={index}
                    src={certificate}
                    alt={`Certificate ${index + 1}`}
                    className="certificate-image"
                  />
                ))}
          </Carousel>

       
          </AboutSection>
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
