import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">01</span>
          <h2 className="h2">ABOUT ME</h2>
        </motion.div>
        
        <div className="about-container">
          <div className="about-heading-container">
            <h3 className="about-heading h3">
              {personalInfo.aboutHeading.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}<br />
                </React.Fragment>
              ))}
            </h3>
          </div>
          
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {personalInfo.aboutText.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </motion.div>
            
            <motion.div 
              className="about-info-cards"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="info-card">
                <MapPin className="info-icon" size={24} />
                <div className="info-details">
                  <span className="info-label">LOCATION</span>
                  <span className="info-value">{personalInfo.location}</span>
                </div>
              </div>
              
              <div className="info-card">
                <Briefcase className="info-icon" size={24} />
                <div className="info-details">
                  <span className="info-label">EXPERIENCE</span>
                  <span className="info-value">{personalInfo.experienceLevel}</span>
                </div>
              </div>
              
              <div className="info-card">
                <Code2 className="info-icon" size={24} />
                <div className="info-details">
                  <span className="info-label">FOCUS</span>
                  <span className="info-value">{personalInfo.focus}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
