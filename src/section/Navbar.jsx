import React, { useState } from "react";
import menuIcon from "../assets/menu.svg";
import { motion, AnimatePresence } from "framer-motion";

// Staggered Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1 // Delay between each child animation
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20 // Slide from left
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

function Navigation({ isMobile = false }) {
  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
    { href: "#footer", label: "Footer" }
  ];

  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`nav-ul ${isMobile ? 'text-center space-y-4 p-4' : 'flex space-x-4'}`}
    >
      {navItems.map((item, index) => (
        <motion.li
          key={item.href}
          variants={itemVariants}
          className="nav-li"
        >
          <a
            className={`nav-link transition-all duration-300 ${isMobile
                ? 'block text-xl py-2 hover:bg-white/10 rounded'
                : 'hover:text-white text-neutral-400'
              }`}
            href={item.href}
          >
            {item.label}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed inset-x-0 z-50 w-full bg-black/30 text-white backdrop-blur-md">
      <div className="mx-auto c-space max-w-8xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          {/* Logo */}
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            href="/"
          >
            Prakash
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="sm:hidden flex items-center justify-center w-10 h-10 focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            <motion.img
              initial={{ rotate: 0 }}
              animate={{
                rotate: isOpen ? 90 : 0,
                transition: { duration: 0.3 }
              }}
              src={menuIcon}
              alt="Menu"
              className="w-6 h-6 text-neutral-400 hover:text-white"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                transition: {
                  duration: 0.3,
                  ease: "easeInOut"
                }
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeInOut"
                }
              }}
              className="sm:hidden"
            >
              <nav className="">
                <Navigation isMobile={true} />
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
