import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BlurTextAnimated = ({ text = 'Herramientas Digitales', className = '', color = 'rgb(249, 115, 22)' }) => {
  const words = text.split(' ');
  const [activeIndex, setActiveIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, x: 0, y: 0 });
  const wordRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    const updateDimensions = () => {
      if (wordRefs.current[activeIndex] && containerRef.current) {
        const rect = wordRefs.current[activeIndex].getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        
        setDimensions({
          width: rect.width,
          height: rect.height,
          x: rect.left - containerRect.left,
          y: rect.top - containerRect.top,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="relative inline-flex flex-wrap gap-x-4 gap-y-2">
      {words.map((word, index) => (
        <span
          key={index}
          ref={(el) => (wordRefs.current[index] = el)}
          className={`relative px-2 py-1 cursor-default ${className}`}
          style={{
            filter: activeIndex === index ? 'blur(0px)' : 'blur(6px)',
            transition: 'filter 0.6s',
          }}
        >
          {word}
        </span>
      ))}
      
      <motion.div
        className="absolute pointer-events-none"
        animate={{
          x: dimensions.x,
          y: dimensions.y,
          width: dimensions.width,
          height: dimensions.height,
          opacity: 1,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          boxShadow: `${color.replace('rgb', 'rgba').replace(')', ', 0.5)')} 0px 0px 20px`,
        }}
      >
        <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: color }} />
        <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: color }} />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: color }} />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: color }} />
      </motion.div>
    </div>
  );
};

export default BlurTextAnimated;
