import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <motion.div 
        className="container footer-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-left">
          <div className="footer-logo">{personalInfo.initials}</div>
          <div className="footer-name">{personalInfo.name}</div>
        </div>
        
        <div className="footer-right">
          <div className="footer-socials">
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="interactive">
              <FaLinkedin size={20} />
            </a>
            <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="interactive">
              <FaGithub size={20} />
            </a>
            <a href={personalInfo.socials.email} aria-label="Email" className="interactive">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </motion.div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
