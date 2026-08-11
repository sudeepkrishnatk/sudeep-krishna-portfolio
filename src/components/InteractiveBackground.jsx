import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Only enable on desktop
    if (window.innerWidth < 768) return;
    
    const handleMouseMove = (e) => {
      // Normalize mouse position between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: -1
    }}>
      {/* Soft Ambient Light 1 */}
      <motion.div
        animate={{
          x: mousePosition.x * -30,
          y: mousePosition.y * -30,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '20%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
        }}
      />
      
      {/* Soft Ambient Light 2 */}
      <motion.div
        animate={{
          x: mousePosition.x * 40,
          y: mousePosition.y * 40,
        }}
        transition={{ type: "spring", damping: 60, stiffness: 80 }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '10%',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(30, 64, 175, 0.05) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Floating Geometric Objects */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: mousePosition.x * (i * -15 + 20),
            y: mousePosition.y * (i * 15 - 20),
            rotate: mousePosition.x * 20,
          }}
          transition={{ type: "spring", damping: 40 + i * 5, stiffness: 100 - i * 10 }}
          style={{
            position: 'absolute',
            top: `${15 + i * 12}%`,
            left: `${10 + i * 15}%`,
            width: `${10 + i * 2}px`,
            height: `${10 + i * 2}px`,
            border: `1px solid rgba(255, 255, 255, ${0.05 + i * 0.01})`,
            borderRadius: i % 2 === 0 ? '50%' : '4px',
            transform: 'rotate(45deg)',
          }}
        />
      ))}
    </div>
  );
};

export default InteractiveBackground;
