import React from 'react';
import { Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import InteractiveBackground from '../components/InteractiveBackground';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const Hero = () => {
  return (
    <section className="hero" id="hero" style={{ position: 'relative' }}>
      <InteractiveBackground />
      
      <div className="container hero-container premium-centered">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="hero-greeting text-accent">
            {personalInfo.shortIntro}
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="hero-name h1">
            {personalInfo.name}
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="hero-title text-accent h3">
            {personalInfo.title}
          </motion.h2>
          
          <motion.p variants={itemVariants} className="hero-description text-muted">
            {personalInfo.description}
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-actions">
            <a href="#projects" className="btn btn-primary interactive">
              View My Projects
            </a>
            <a href="/resume.pdf" className="btn btn-outline interactive" target="_blank" rel="noopener noreferrer">
              <Download size={18} />
              Download Resume
            </a>
            
            <div className="hero-socials">
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon interactive">
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="social-icon interactive">
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
              <a href={personalInfo.socials.email} className="social-icon interactive">
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
