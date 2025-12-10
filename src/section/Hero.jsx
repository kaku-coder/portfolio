
import React from 'react';
import HeroText from '../componets/HeroText';
import ParallaxBackground from '../componets/ParallaxBackground';
import Models from '../componets/Models';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{
        // Prevent any potential scrolling
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      {/* Background FIRST */}
      <ParallaxBackground />

      {/* Text Layer */}
      <div className="relative z-40">
        <HeroText />
      </div>

      {/* 3D Model Layer */}
      <figure
        className="absolute inset-0 z-30 w-screen h-screen pointer-events-none"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      >
        {/* Models component may include interactive children; make them interactive selectively inside the component if needed. */}
        <Models />
      </figure>
    </section>
  );
};

export default Hero;