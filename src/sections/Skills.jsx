import React from 'react';
import { motion } from 'framer-motion';
import { FileCode2, LayoutTemplate, Server, Database, Wrench, Lightbulb } from 'lucide-react';
import { skills } from '../data/portfolioData';
import './Skills.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
  hover: {
    scale: 1.05,
    rotateX: 2,
    rotateY: -2,
    boxShadow: "0 20px 40px rgba(56, 189, 248, 0.15)",
    borderColor: "var(--accent-secondary)",
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

const Skills = () => {
  const categories = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: <LayoutTemplate size={32} className="skill-category-icon text-blue" />,
      items: skills.frontend
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: <Server size={32} className="skill-category-icon text-green" />,
      items: skills.backend
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: <Database size={32} className="skill-category-icon text-purple" />,
      items: skills.databases
    },
    {
      id: 'programming',
      title: 'Programming',
      icon: <FileCode2 size={32} className="skill-category-icon text-yellow" />,
      items: skills.programming
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      icon: <Wrench size={32} className="skill-category-icon text-red" />,
      items: skills.tools
    },
    {
      id: 'development',
      title: 'Development',
      icon: <Lightbulb size={32} className="skill-category-icon text-orange" />,
      items: skills.development.map(name => ({ name }))
    }
  ];

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">02</span>
          <h2 className="h2">TECHNICAL SKILLS</h2>
        </motion.div>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((category) => (
            <motion.div 
              key={category.id} 
              className="skill-card card interactive"
              variants={cardVariants}
              whileHover="hover"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="skill-card-header">
                {category.icon}
                <h3 className="skill-card-title">{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.items.map((item, index) => (
                  <li key={index} className="skill-item">
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
