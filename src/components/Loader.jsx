import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress (fast)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 300); // Wait a bit at 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 10;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--bg-primary)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <h1 style={{ fontSize: '2rem', letterSpacing: '0.2em', margin: 0, fontWeight: 700, color: 'var(--text-primary)' }}>
          SK
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.5rem', letterSpacing: '0.05em' }}>
          Sudeep Krishna T K
        </p>
      </motion.div>

      <div style={{
        width: '200px',
        height: '2px',
        backgroundColor: 'var(--border-color)',
        marginTop: '2rem',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '2px'
      }}>
        <motion.div
          style={{
            height: '100%',
            backgroundColor: 'var(--accent-secondary)',
            width: `${progress}%`
          }}
          layout
          transition={{ ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;
