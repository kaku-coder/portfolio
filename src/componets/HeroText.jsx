import React from "react";
import { FlipWords } from "./FlipWord";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Web Developer", "Student", "Coder", "Designer"];  
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* desktopview  */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1 className="text-4xl font-medium"
          variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay:1}}
        >Hi I'm Prakash</motion.h1>
        < motion.div className="flex flex-col items-start">
          <motion.p className="text-5xl font-medium text-neutral-300"
          variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}>
            {" "}
           < motion.span >I am a </motion.span>
              <FlipWords words={words} />
            <br />
            <motion.span className="text-2xl mt-1 block"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.5 }}>
              I build modern web interfaces and apps.
     
            </motion.span>
          </motion.p >
    
          {/* <div>flep text accuratly </div> */}
          <motion.p className="text-2xl font-medium text-neutral-300 " 
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}> Always excited to learn new technologies.</motion.p>
        </motion.div>
      </div>
      {/* mobileview */}
      < motion.div className="flex flex-col space-y-6 md:hidden">
        <motion.p className="text-4xl font-medium "
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}> Hi,I'm Prakash </motion.p>

        <motion.div variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}>

          <FlipWords words={words} className="text-2xl text-center -mt-3 font-black"
  />
        </motion.div>
        <motion.div>
          <motion.p className="text-5xl font-black -mt-2.5"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}>Building</motion.p>
        </motion.div>
        <motion.p className="text-xl text-center -mt-2.5 font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8}}>
          Modern Web Interfaces & Apps.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroText;
