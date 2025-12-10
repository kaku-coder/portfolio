import { motion } from 'framer-motion';
import ProjectCard from '../componets/ProjectCard'

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    transition: { duration: 0.2 }
  }
};

const projects = [
  {
    id: 1,
    title: "Dice Game",
    image: '/Dicegame.png',
    description: "A lightweight Dice Rolling Game application developed with a focus on clean logic, responsive design, and smooth user interaction.",
    tag: ["html", "css"],
    demoUrl: "https://kaku-coder.github.io/dice-role-game/",
    githubUrl: "https://github.com/kaku-coder/dice-role-game"
  },
  {
    id: 2,
    title: "Cross Game", 
    image: "/crossgame.png",
    description: "A cross-platform game built to run smoothly on multiple devices, offering consistent performance across both mobile and desktop.",
    tag: ["html", "css", "javascript"],
    demoUrl: "https://kaku-coder.github.io/tic-tac-toe-/",
    githubUrl: "https://github.com/kaku-coder/tic-tac-toe-"
  },
  {
    id: 3,
    title: "Wanted Website",
    image: '/wanterwebsite.png', 
    description: "A creative Mirinda concept website designed with modern UI styling and powered by GSAP for rich animations.",
    tag: ["html", "css", "javascript", "gsap"],
    demoUrl: "https://kaku-coder.github.io/nikola-mirinda/",
    githubUrl: "https://github.com/kaku-coder/nikola-mirinda"
  },
  {
    id: 4,
    title: "404 Moon",
    image: "/404moon.png",
    description: "A clean and modern 404 error page design created to enhance user experience with smooth visuals.",
    tag: ["html", "css", "javascript"],
    demoUrl: "https://kaku-coder.github.io/404-moon-project/",
    githubUrl: "https://github.com/kaku-coder/404-moon-project"
  }
];

const Project = () => {
  return (
    <section id='projects' className='py-24 px-4 relative bg-primary min-h-screen'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold mb-4 text-white'> <span>My </span> <span className='text-[#643ed0] '>Projects</span></h2>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;