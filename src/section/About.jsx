import React, {useRef, useState } from 'react'
import { motion } from 'framer-motion' // Ensure framer-motion is installed
import codingPovImage from '../assets/coding-pov.png'
import Card from '../componets/Card'
import csimage from '../logos/icons8-c++-48.png'
import react from '../logos/react-icon_svgstack_com_29171765189836.png'
import { GlobeDemo } from '../componets/GlobeDemo'
import ComponetEmail from '../componets/ComponetEmail'; // Note the typo in "Componet"
// import Framwork from '../componets/Frameworks'
import {Frameworks} from '../componets/Frameworks'
// import { CompareDemo } from '../componets/CompareDemo'

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const dragZoneRef = useRef(null);

  return (
    <section className='c-space selection-spacing min-h-screen' id="about">
      <h2 className='text-heading text-white mt-4 mb-8 text-center'> <span className=''>About</span> <span className='text-[#643ed0] pl-2'>Me</span></h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[14rem] mt-8'>
        {/* Grid 1 - Top Left */}
        <motion.div
          // Hover animation
          whileHover={{
            scale: 1.05,  // Slightly increase size
            y: -15,       // Move up by 15 pixels
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 10
            }
          }}
          className='
            relative 
            grid-default-color 
            grid-1 
            md:col-span-2 
            md:row-span-2 
            overflow-hidden
          '
          style={{
            width: '100%',
            height: '100%',
            minHeight: '12rem',
            position: 'relative'
          }}
        >
          <img
            src={codingPovImage}
            alt="Coding Perspective"
            onLoad={() => {
              console.log('Image loaded successfully')
              setImageLoaded(true)
            }}
            onError={(e) => {
              console.error('Image load error:', e)
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
              objectPosition: 'center'
            }}
            className={`
              absolute 
              inset-0 
              w-full 
              h-full 
              object-cover 
              ${imageLoaded ? 'opacity-100' : 'opacity-0'}
            `}
          />

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-end justify-start p-4 text-white bg-black/30">
            <div>
              <h3 className="text-lg font-extrabold">Hi, I am Prakash</h3>
              <p className='text-sm'>
                A creative frontend developer focused on simple, modern dev  and responsive UI. <br />
                I love coding and building projects that help me grow.
              </p>
            </div>
          </div>

          {/* Gradient Overlay */}
          <div
            className='
              absolute 
              inset-x-0 
              -bottom-4 
              h-1/2 
              sm:h-1/3 
              bg-gradient-to-top 
              from-indigo-900/70 
              to-transparent 
              pointer-events-none
            '
          />

          {/* Loading State */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center text-white bg-gray-800">
              Loading image...
            </div>
          )}
        </motion.div>

        {/* Grid 2 - Top Right */}
        <motion.div className='grid-default-color grid-2'>
          <div ref={dragZoneRef} className=" relative  w-full h-[10rem]" >
            <p className='absolute inset-x-0 top-4 text-center text-5xl text-gray-500 pointer-events-none'>DRAG IT ANYWHERE</p>

            <Card style={{rotate:"75deg",top:"30%",left:"20%"}} text="THREE JS"
              dragConstraints={dragZoneRef}
            z-10
            />
            <Card style={{ rotate: "30deg", top: "60%", left: "45%" }} text="ANIMATION"
                  dragConstraints={dragZoneRef}
                  z-10
/>
            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="MOTION"
                  dragConstraints={dragZoneRef}
                  z-10
/>
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="UI/UX"
                  // className="z-10"
                  dragConstraints={dragZoneRef}
/>
<Card
  style={{ rotate: "-45deg", top: "40%", left: "0%" }}
  image={csimage}
  imageClassName="w-15 h-16 rounded-2xl object-cover"
  className="z-10"
  dragConstraints={dragZoneRef}
/>

<Card
  style={{ rotate: "20deg", top: "10%", left: "38%" }}
  text="REACT JS"
  className="z-10"
  dragConstraints={dragZoneRef}
/>
            <Card style={{ rotate: "10deg", top: "10%", left: "80%" }} image={react}
              imageClassName="w-15 h-16 rounded-2xl" 
                    dragConstraints={dragZoneRef}
                    z-10
 />
            <Card style={{ rotate: "-35deg", top: "50%", left: "70%" }} text="GSAP" 
                  dragConstraints={dragZoneRef}
                  z-10
/>
          </div>
          {/* Content for second grid item */}
        </motion.div>

        {/* Grid 3 - Middle Left */}
        <div className='grid-black-color grid-3 md:col-span-2 md:row-span-1 relative overflow-hidden'>
          <div className="absolute top-4 left-0 right-0 z-20 text-lef">
            <p className="headText">TimeZone</p>
            <p className='subtext'>
              I'm based in Mars, and open <br /> to remote work worldwide
            </p>
          </div>
          <div className='absolute inset-0 w-full h-full z-10'>
<GlobeDemo scale={[0.3, 0.3, 0.3]} />
          </div>
        </div>

        {/* Grid 4 - Middle Right */}
   <div className='grid-special-color grid-4 md:col-span-4 md:row-span-1'>
    <div className='flex flex-col items-center justify-center gap-4 size-full'>
        <p className='text-center headtext'>Do you want to start a project together?</p>
        <ComponetEmail />
    </div>
</div>

        {/* Grid 5 - Bottom Full Width */}
        <div className='flex items-end grid-default-color grid-5 md:col-span-6 md:row-span-1'>
          <div className='z-10 w-[50%]'>
            <p className='headText'>Technical Skills</p>
            <p className='subtext'>I specialize in modern programming languages and frameworks, enabling me to create fast, reliable, and scalable web applications.</p>
          </div>
          <div className='absolute inset-y-0 left-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'>
          <Frameworks/>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About

// Add these to your Tailwind CSS file or global styles
// This ensures consistent grid sizing and responsiveness
const gridStyles = `
  .grid-default-color {
    @apply bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:scale-105;
  }

  .grid-black-color {
    @apply bg-black rounded-lg p-6 transition-all duration-300 hover:scale-105;
  }

  .grid-special-color {
    @apply bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:scale-105;
  }

  /* Responsive grid layout */
  @media (min-width: 768px) {
    .grid-1 { grid-column: span 2; grid-row: span 2; }
    .grid-2 { grid-column: span 4; }
    .grid-3 { grid-column: span 2; }
    .grid-4 { grid-column: span 4; }
    .grid-5 { grid-column: span 6; }
  }
`
