import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import GithubSection from './sections/GithubSection';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const heroAboutRef = useRef(null);
  const videoRef = useRef(null);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (videoRef.current) {
      videoRef.current.preload = "auto";
      videoRef.current.pause();
    }
  }, []);

  useEffect(() => {
    const updateVideoTime = () => {
      if (videoRef.current && videoRef.current.duration) {
        const container = heroAboutRef.current;
        if (!container) return;
        
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const totalScrollableDistance = rect.height - windowHeight;
        
        let progress = 0;
        if (rect.top <= 0 && totalScrollableDistance > 0) {
          progress = Math.abs(rect.top) / totalScrollableDistance;
          progress = Math.max(0, Math.min(1, progress));
        } else if (rect.top > 0) {
          progress = 0;
        } else if (rect.top <= -totalScrollableDistance) {
          progress = 1;
        }

        const duration = videoRef.current.duration;
        targetTimeRef.current = progress * duration;

        const diff = targetTimeRef.current - currentTimeRef.current;
        currentTimeRef.current += diff * 0.08;

        if (Math.abs(diff) > 0.001) {
          videoRef.current.currentTime = currentTimeRef.current;
        }
      }
      animationFrameRef.current = requestAnimationFrame(updateVideoTime);
    };

    animationFrameRef.current = requestAnimationFrame(updateVideoTime);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="app">
      <CustomCursor />
      <ScrollProgress />
      
      <AnimatePresence>
        {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      
      {/* Fixed Background Video */}
      <video 
        ref={videoRef}
        className="global-video-bg"
        src="/Man_adjusting_tie_no_watermark.mp4"
        muted
        playsInline
        preload="auto"
      ></video>
      <div className="global-video-overlay"></div>

      <main>
        <div ref={heroAboutRef} className="transparent-sections">
          <Hero />
          <About />
        </div>
        
        <div className="solid-sections">
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <GithubSection />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
