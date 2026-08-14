import React from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { education, certifications } from '../data/portfolioData';
import './Education.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const Education = () => {
  return (
    <section className="section education-certs" id="education">
      <div className="container">
        <div className="edu-cert-container">
          {/* Education Column */}
          <div className="edu-column">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-number">05</span>
              <h2 className="h2">EDUCATION</h2>
            </motion.div>
            
            <motion.div 
              className="edu-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {education.map((edu, index) => (
                <motion.div key={index} className="edu-card card interactive" variants={itemVariants}>
                  <div className="edu-icon-container">
                    <GraduationCap size={32} className="text-accent" />
                  </div>
                  <div className="edu-content">
                    <h3 className="edu-degree h3">{edu.degree}</h3>
                    <p className="edu-institution text-accent">{edu.institution}</p>
                    <div className="edu-meta text-muted">
                      <span>{edu.location}</span>
                      <span className="meta-separator">•</span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Certifications Column */}
          <div className="cert-column">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-number">06</span>
              <h2 className="h2">CERTIFICATIONS</h2>
            </motion.div>
            
            <motion.div 
              className="cert-list card interactive"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  <div className="cert-icon-container">
                    <Award size={20} className="text-accent" />
                  </div>
                  <div className="cert-content">
                    <h4 className="cert-name" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {cert.name}
                      {cert.link && (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-accent" style={{ display: 'flex', alignItems: 'center' }} title="View Certificate">
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </h4>
                    <p className="cert-issuer text-muted">
                      {cert.issuer} <span className="meta-separator">•</span> {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
