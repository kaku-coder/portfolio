
import React from 'react'
import { motion } from "framer-motion";

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
  return image && !text ? (
    <motion.img
      className={`absolute flex items-center justify-center text-base text-center rounded-full cursor-grab ${className} ${imageClassName}`}
      src={image}
      style={style}
      drag
      dragConstraints={dragConstraints}
      dragElastic={dragElastic}
      dragMomentum={dragMomentum}
      animate={floatKeyframes}
      transition={floatTransition}
    />
  ) : (
    <motion.div
      className={`absolute px-1 py-4 w-48 text-xl text-center rounded-full ring ring-gray-500 font-extralight bg-storm cursor-grab ${className}`}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={dragConstraints}
      dragElastic={dragElastic}
      dragMomentum={dragMomentum}
      animate={floatKeyframes}
      transition={floatTransition}
    >
      {text}
    </motion.div>
  );
};

export default Card
