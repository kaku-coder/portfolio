
import React from 'react'
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";

const floatKeyframes = { y: [0, -12, 0] };
const floatTransition = { duration: 4, repeat: Infinity, ease: "easeInOut" };

const Card = ({
  style,
  text,
  image,
  imageClassName = "",
  className = "",
  dragConstraints,
  dragElastic = 0.35,
  dragMomentum = false,
}) => {
  const ref = useRef(null);
  const [isHover, setIsHover] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rotateZ = useMotionValue(0);
  const scale = useMotionValue(1);

  const rx = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const ry = useSpring(rotateY, { stiffness: 300, damping: 30 });
  const rz = useSpring(rotateZ, { stiffness: 300, damping: 30 });
  const sc = useSpring(scale, { stiffness: 300, damping: 30 });

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 -> 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateMax = 18;
    rotateY.set(px * rotateMax);
    rotateX.set(-py * rotateMax);
    rotateZ.set(px * rotateMax * 0.08);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
    rotateZ.set(0);
    scale.set(1);
    setIsHover(false);
  }

  function handleEnter() {
    scale.set(1.06);
    setIsHover(true);
  }

  return image && !text ? (
    <motion.img
      ref={ref}
      className={`absolute flex items-center justify-center text-base text-center rounded-full cursor-grab ${className} ${imageClassName}`}
      src={image}
      style={{
        ...style,
        rotateX: rx,
        rotateY: ry,
        rotateZ: rz,
        scale: sc,
        transformStyle: 'preserve-3d',
      }}
      drag
      dragConstraints={dragConstraints}
      dragElastic={dragElastic}
      dragMomentum={dragMomentum}
      animate={floatKeyframes}
      transition={floatTransition}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
    />
  ) : (
    <motion.div
      ref={ref}
      className={`absolute px-1 py-4 w-48 text-xl text-center rounded-full ring ring-gray-500 font-extralight bg-storm cursor-grab ${className}`}
      style={{
        ...style,
        rotateX: rx,
        rotateY: ry,
        rotateZ: rz,
        scale: sc,
        transformStyle: 'preserve-3d',
      }}
      drag
      dragConstraints={dragConstraints}
      dragElastic={dragElastic}
      dragMomentum={dragMomentum}
      animate={floatKeyframes}
      transition={floatTransition}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
    >
      {text}
    </motion.div>
  );
};

export default Card
