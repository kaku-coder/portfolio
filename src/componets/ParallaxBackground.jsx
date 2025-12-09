import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import skyImage from '../assets/sky.jpg';
import mountainLayer3 from '../assets/mountain-3.png';
import mountainLayer2 from '../assets/mountain-2.png';
import mountainLayer1 from '../assets/mountain-1.png';
import planetsImage from '../assets/planets.png';

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();

  const springConfig = {
    damping: 40,
    stiffness: 120
  };

  const x = useSpring(scrollYProgress, springConfig);

  // Parallax transformations
  const planetsY = useTransform(x, [0, 1], ['0%', '10%']);
  const mountain3y = useTransform(x, [0, 1], ['0%', '20%']);
  const mountain2y = useTransform(x, [0, 1], ['0%', '30%']);
  const mountain1y = useTransform(x, [0, 1], ['0%', '40%']);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sky Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${skyImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Planets Layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${planetsImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          y: planetsY,
        }}
      />

      {/* Mountain Layers */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${mountainLayer3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          y: mountain3y,
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${mountainLayer2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          y: mountain2y,
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${mountainLayer1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          y: mountain1y,
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
