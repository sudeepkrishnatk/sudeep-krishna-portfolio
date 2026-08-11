import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import './GithubSection.css';

const GithubSection = () => {
  // Generate a static mock contribution graph
  const generateContributionGraph = () => {
    const cols = 52;
    const rows = 7;
    const graph = [];
    
    for (let c = 0; c < cols; c++) {
      const col = [];
      for (let r = 0; r < rows; r++) {
        // Randomly assign a contribution level (0-4) for the visual effect
        // 0: none, 1: light, 2: medium, 3: high, 4: very high
        let level = 0;
        if (Math.random() > 0.6) {
          level = Math.floor(Math.random() * 4) + 1;
        }
        col.push(level);
      }
      graph.push(col);
    }
    
    return graph;
  };

  const contributionGraph = generateContributionGraph();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Mon', 'Wed', 'Fri'];

  return (
    <section className="section github-section" id="github">
      <div className="container">
        <motion.div 
          className="github-container card interactive"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="github-info">
            <div className="github-header">
              <span className="section-number">GITHUB & LEARNING</span>
            </div>
            
            <div className="github-logo-container">
              <div className="github-logo-bg">
                <FaGithub size={40} className="text-primary" />
              </div>
            </div>
            
            <h3 className="github-heading h3">
              Clean code.<br />
              Real projects.<br />
              Continuous learning.
            </h3>
            
            <p className="github-description text-muted">
              Explore my projects, experiments and development work on GitHub.
            </p>
            
            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline github-btn interactive"
            >
              Visit GitHub Profile <ExternalLink size={16} />
            </a>
          </div>
          
          <div className="github-stats">
            <div className="stats-header">
              <div className="stat-item">
                <span className="stat-label">Total Contributions</span>
                <span className="stat-value text-accent">150+</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Repositories</span>
                <span className="stat-value text-accent">20+</span>
              </div>
            </div>
            
            <div className="contribution-graph-container">
              <div className="graph-months">
                {months.map((month, i) => (
                  <span key={i} className="month-label">{month}</span>
                ))}
              </div>
              
              <div className="graph-body">
                <div className="graph-days">
                  {days.map((day, i) => (
                    <span key={i} className="day-label">{day}</span>
                  ))}
                </div>
                
                <div className="graph-grid">
                  {contributionGraph.map((col, cIndex) => (
                    <div key={cIndex} className="graph-col">
                      {col.map((level, rIndex) => (
                        <div 
                          key={`${cIndex}-${rIndex}`} 
                          className={`graph-cell level-${level}`}
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="graph-footer">
                <span className="text-muted" style={{ fontSize: '0.75rem' }}>Consistency is the key to growth.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubSection;
