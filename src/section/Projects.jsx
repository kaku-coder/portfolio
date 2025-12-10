   import { motion } from 'framer-motion';

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
          <h2 className='text-4xl font-bold mb-4 text-white'>My Projects</h2>
          <div className='w-24 h-1 bg-coral mx-auto'></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover="hover"
              className='bg-navy p-6 rounded-lg shadow-lg overflow-hidden'
            >
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className='overflow-hidden rounded-md mb-4'
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className='w-full h-48 object-cover transition-transform duration-300'
                />
              </motion.div>
              <h3 className='text-xl font-bold mb-2 text-white'>{project.title}</h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tag?.map((tag, index) => (
                  <span key={index} className='bg-storm text-white text-sm px-3 py-1 rounded-full'>
                    {tag}
                  </span>
                ))}
              </div>
              <div className='flex gap-4'>
                {project.demoUrl && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-coral text-white px-4 py-2 rounded-md'
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    Live Demo
                  </motion.a>
                )}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border border-coral text-coral px-4 py-2 rounded-md'
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                  }}
                >
                  View Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;