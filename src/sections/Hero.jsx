import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaAws } from 'react-icons/fa';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, 
  SiJavascript, SiMongodb, SiDocker
} from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      
      <div className="hero-top">
        <div className="hero-title-group">
          <h1>
            <span className="text-white">DEVELOPER</span><br/>
            <span className="text-gradient-hero">PORTFOLIO</span>
          </h1>
          <p className="hero-tagline">CODE. BUILD. DEPLOY. IMPACT.</p>
        </div>
        
        <div className="profile-card-top">
          <div className="profile-avatar-wrapper">
            <img src={profileImg} alt={personalInfo.name} className="profile-avatar" />
          </div>
          <div className="profile-info-top">
            <h3>Full-Stack Developer</h3>
            <p className="profile-desc-1">Problem Solver | Tech Enthusiast</p>
            <p className="profile-desc-2">Building scalable web apps and<br/>AI-powered solutions.</p>
            <div className="profile-socials">
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href={personalInfo.socials.email}><Mail /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="monitors-wrapper">
        {/* Left Monitor */}
        <div className="monitor left-monitor">
          <div className="monitor-inner code-screen">
            <div className="code-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="filename">App.jsx</span>
            </div>
            <div className="code-content">
              <pre>
                <code>
                  <span className="keyword">import</span> React <span className="keyword">from</span> <span className="string">'react'</span>;<br/>
                  <span className="keyword">import</span> {'{'} motion {'}'} <span className="keyword">from</span> <span className="string">'framer-motion'</span>;<br/><br/>
                  <span className="keyword">const</span> <span className="function">Developer</span> = () =&gt; {'{'}<br/>
                  &nbsp;&nbsp;<span className="keyword">return</span> (<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="tag">div</span> className=<span className="string">"portfolio"</span>&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="tag">h1</span>&gt;Building scalable solutions&lt;/<span className="tag">h1</span>&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="tag">p</span>&gt;Let's collaborate!&lt;/<span className="tag">p</span>&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="tag">div</span>&gt;<br/>
                  &nbsp;&nbsp;);<br/>
                  {'}'};<br/><br/>
                  <span className="keyword">export default</span> Developer;
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Center Monitor */}
        <div className="monitor center-monitor">
          <div className="monitor-inner main-screen">
             <div className="main-nav">
               <span>Home</span><span>About</span><span>Projects</span><span>Skills</span><span>Blog</span><span>Contact</span>
             </div>
             <div className="main-content">
               <h2>Hi, I'm a <br/><span className="text-gradient-hero">Full-Stack Developer</span></h2>
               <p>I build scalable web applications<br/>and AI-powered solutions.</p>
               <div className="main-actions">
                 <a href="#projects" className="btn-gradient">View Projects</a>
                 <a href="#contact" className="btn-outline-dark">Contact Me</a>
               </div>
             </div>
             <div className="main-tech-stack">
               <SiReact className="tech-icon react" />
               <SiNextdotjs className="tech-icon next" />
               <SiTypescript className="tech-icon ts" />
               <SiNodedotjs className="tech-icon node" />
               <SiJavascript className="tech-icon js" />
               <SiMongodb className="tech-icon mongo" />
               <SiDocker className="tech-icon docker" />
               <FaAws className="tech-icon aws" />
             </div>
          </div>
        </div>

        {/* Right Monitor */}
        <div className="monitor right-monitor">
          <div className="monitor-inner analytics-screen">
            <h4>Analytics Overview</h4>
            <div className="stats-grid">
              <div className="stat-box">
                <span className="stat-label">Visitors</span>
                <span className="stat-value">12.4K</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Page Views</span>
                <span className="stat-value">28.7K</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Projects</span>
                <span className="stat-value">24</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Downloads</span>
                <span className="stat-value">1.2K</span>
              </div>
            </div>
            <div className="chart-placeholder">
               <svg viewBox="0 0 100 30" className="line-chart">
                 <path d="M0 25 L10 20 L20 22 L30 15 L40 18 L50 10 L60 12 L70 5 L80 15 L90 8 L100 2" fill="none" stroke="#3b82f6" strokeWidth="1.5"/>
                 <path d="M0 28 L10 25 L20 27 L30 22 L40 25 L50 18 L60 22 L70 15 L80 20 L90 12 L100 10" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
               </svg>
            </div>
            <div className="bottom-stats">
              <div className="tech-bars">
                 <p>Top Technologies</p>
                 <div className="bar-row"><span className="bar-label">JavaScript</span><div className="bar-bg"><div className="bar-fill js" style={{width: '65%'}}></div></div></div>
                 <div className="bar-row"><span className="bar-label">React.js</span><div className="bar-bg"><div className="bar-fill react" style={{width: '85%'}}></div></div></div>
                 <div className="bar-row"><span className="bar-label">Node.js</span><div className="bar-bg"><div className="bar-fill node" style={{width: '70%'}}></div></div></div>
              </div>
              <div className="donut-chart">
                <div className="donut"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desk glow effect */}
      <div className="desk-glow"></div>
    </section>
  );
};

export default Hero;
