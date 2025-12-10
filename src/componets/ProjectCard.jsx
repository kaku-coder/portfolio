import React, { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// ProjectCard: mouse-tilt 3D card with popout image
const ProjectCard = ({ project }) => {
  const cardRef = useRef(null)
  const [isHover, setIsHover] = useState(false)

  // motion values for rotation
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const rotateZ = useMotionValue(0)
  const scale = useMotionValue(1)

  // spring for smoothness
  const rx = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const ry = useSpring(rotateY, { stiffness: 300, damping: 30 })
  const rz = useSpring(rotateZ, { stiffness: 300, damping: 30 })
  const sc = useSpring(scale, { stiffness: 300, damping: 30 })

  function handleMove(e) {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = (x / rect.width) - 0.5 // -0.5 -> 0.5
    const py = (y / rect.height) - 0.5

    const rotateMax = 20 // degrees (increased for stronger 3D)
    rotateY.set(px * rotateMax)
    rotateX.set(-py * rotateMax)
    // small Z rotation for extra dynamism
    rotateZ.set(px * rotateMax * 0.12)
  }

  function handleLeave() {
    rotateX.set(0)
    rotateY.set(0)
    rotateZ.set(0)
    scale.set(1)
    setIsHover(false)
  }

  function handleEnter() {
    scale.set(1.08)
    setIsHover(true)
  }

  return (
    <motion.div
      ref={cardRef}
      className="bg-navy p-6 rounded-lg shadow-lg overflow-hidden will-change-transform"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
      style={{ perspective: 1000 }}
    >
      {/* Outer animated wrapper: rotates the whole card in 3D */}
      <motion.div
        className="transform-style-3d"
        style={{
          rotateX: rx,
          rotateY: ry,
          rotateZ: rz,
          scale: sc,
          transformStyle: 'preserve-3d',
          boxShadow: isHover ? '0 40px 80px rgba(0,0,0,0.55), 0 8px 30px rgba(100,62,208,0.06)' : '0 8px 20px rgba(0,0,0,0.25)',
          borderRadius: 12,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Image layer (front) */}
        <div className="rounded-md overflow-hidden mb-4" style={{ transformStyle: 'preserve-3d' }}>
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
            style={{
              transformStyle: 'preserve-3d',
              translateZ: isHover ? 100 : 0,
            }}
            draggable={false}
          />
        </div>

        {/* Title — slightly forward */}
        <motion.h3
          className="text-xl font-bold mb-2 text-white"
          style={{ translateZ: isHover ? 60 : 0, transformStyle: 'preserve-3d' }}
        >
          {project.title}
        </motion.h3>

        {/* Description — mid layer */}
        <motion.p className="text-gray-300 mb-4" style={{ translateZ: isHover ? 45 : 0 }}>
          {project.description}
        </motion.p>

        {/* Tags — slightly above base */}
        <motion.div className="flex flex-wrap gap-2 mb-4" style={{ translateZ: isHover ? 30 : 0 }}>
          {project.tag?.map((tag, index) => (
            <span key={index} className="bg-storm text-white text-sm px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Buttons — topmost interactive layer */}
        <motion.div className="flex gap-4 p-4 border-0 relative z-50" style={{ translateZ: isHover ? 70 : 0 }}>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-md transition-all duration-300 hover:scale-105"
            >
              Live Demo
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-md transition-all duration-300 hover:scale-105"
          >
            View Code
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard
