import React from 'react';
import { Mail, MapPin, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        
        {/* Resume CTA */}
        <motion.div 
          className="resume-cta card interactive"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h2 className="h2 cta-heading">Let's build something meaningful.</h2>
            <p className="cta-text text-muted">
              Interested in working together or discussing an opportunity?
            </p>
          </div>
          <div className="cta-actions">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline interactive">
              <Download size={18} />
              DOWNLOAD RESUME
            </a>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-primary interactive">
              CONTACT ME
            </a>
          </div>
        </motion.div>

        {/* Contact Section */}
        <div className="contact-container" id="contact-form">
          <motion.div 
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="section-header">
              <span className="section-number">07</span>
              <h2 className="h2">LET'S CONNECT</h2>
            </div>
            
            <h3 className="contact-heading h3">Let's Build Something Together</h3>
            <p className="contact-description text-muted">
              I'm always interested in learning, building meaningful products, and connecting with people working on interesting technology.
            </p>
            
            <div className="contact-details">
              <a href={`mailto:${personalInfo.email}`} className="contact-item interactive card" style={{ padding: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                <div className="contact-icon-bg">
                  <Mail size={20} className="text-accent" />
                </div>
                <div className="contact-text">
                  <span style={{ color: 'var(--text-primary)' }}>{personalInfo.email}</span>
                </div>
              </a>
              
              <div className="contact-item card" style={{ padding: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="contact-icon-bg">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div className="contact-text">
                  <span style={{ color: 'var(--text-primary)' }}>{personalInfo.location}</span>
                </div>
              </div>
            </div>
            
            <div className="contact-socials" style={{ marginTop: '2rem' }}>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link-btn interactive">
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="social-link-btn interactive">
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
