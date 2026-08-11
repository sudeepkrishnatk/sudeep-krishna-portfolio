import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experience } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">03</span>
          <h2 className="h2">WORK EXPERIENCE</h2>
        </motion.div>
        
        <div className="timeline-container" ref={containerRef} style={{ position: 'relative' }}>
          {/* Animated Timeline Line */}
          <motion.div 
            className="timeline-progress-line"
            style={{
              position: 'absolute',
              left: '19px', // Adjust based on CSS
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'var(--accent-secondary)',
              height: lineHeight,
              transformOrigin: 'top',
              zIndex: 1
            }}
          />

          {experience.map((job, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-date-container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="timeline-dot"></div>
                <div className="timeline-date">{job.period}</div>
              </div>
              
              <div className="timeline-content card interactive">
                <h3 className="timeline-role h3">{job.role}</h3>
                <div className="timeline-company-info">
                  <span className="timeline-company text-accent">{job.company}</span>
                  <span className="timeline-separator">•</span>
                  <span className="timeline-location">{job.location}</span>
                </div>
                
                <ul className="timeline-responsibilities">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
