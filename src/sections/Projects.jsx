import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { projects } from '../data/portfolioData';
import './Projects.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">04</span>
          <h2 className="h2">FEATURED PROJECTS</h2>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Tilt 
                tiltMaxAngleX={7}
                tiltMaxAngleY={7}
                scale={1.02}
                transitionSpeed={2500}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="bottom"
                tiltReverse={true}
                className="project-tilt-wrapper"
              >
                <div className="project-card card interactive" style={{ height: '100%', transformStyle: 'preserve-3d' }}>
                  <div className="project-image-container" style={{ transform: 'translateZ(30px)' }}>
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="project-image" />
                    ) : (
                      <div className="project-image-placeholder">
                        {project.title.substring(0, 2)}
                      </div>
                    )}
                  </div>
                  
                  <div className="project-content" style={{ transform: 'translateZ(40px)' }}>
                    <h3 className="project-title h3">{project.title}</h3>
                    <p className="project-description text-muted">
                      {project.description}
                    </p>
                    
                    <ul className="project-features" style={{ marginBottom: '1.5rem', paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                      {project.features.slice(0, 4).map((feature, i) => (
                        <li key={i} style={{ marginBottom: '0.25rem', listStyleType: 'disc' }}>{feature}</li>
                      ))}
                      {project.features.length > 4 && <li>And more...</li>}
                    </ul>
                    
                    <div className="project-tech" style={{ transform: 'translateZ(20px)' }}>
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    
                    <div className="project-links" style={{ transform: 'translateZ(50px)' }}>
                      {project.github && (
                        <a 
                          href={project.github} 
                          className="btn btn-outline interactive" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <FaGithub size={16} />
                          View on GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          className="btn btn-primary interactive" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
