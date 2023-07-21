import React, { useEffect, useRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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
        interval={10000} 
        showIndicators={true} 
        emulateTouch={true}
        renderArrowPrev={renderCustomPrevArrow}
        renderArrowNext={renderCustomNextArrow}
      >
        <div className="hero-section">
          <div className="page-component first">
            <h1 className="first-heading">
              <span className="const-code">const</span> <span className='ben-code'>ben</span> = {`{`}</h1>
            <h2><span className='key-code'>role</span>: {"Front-End Developer"}</h2>
            <h2><span className='key-code'>skills</span>: {`['html', "css", "scss", "javascript", "react"]`}</h2>
            <h1 className="first-heading">{`}`}</h1>
          </div>
        </div>
        <div className="hero-section">
          <div className="page-component">
          </div>
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
