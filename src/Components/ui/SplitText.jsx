import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplitText = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = [0.22, 1, 0.36, 1], // cubic-bezier easing
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'h1',
  onLetterAnimationComplete
}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  const chars = text.split('');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  const charVariants = {
    hidden: from,
    visible: {
      ...to,
      transition: { duration, ease }
    },
  };

  const renderTag = () => {
    const style = {
      textAlign,
      display: 'inline-block',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
    };

    const content = (
      <motion.span
        ref={ref}
        style={style}
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        onAnimationComplete={onLetterAnimationComplete}
      >
        {chars.map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    );

    switch (tag) {
      case 'h1':
        return <h1 style={style} className={className}>{content}</h1>;
      case 'h2':
        return <h2 style={style} className={className}>{content}</h2>;
      case 'h3':
        return <h3 style={style} className={className}>{content}</h3>;
      case 'h4':
        return <h4 style={style} className={className}>{content}</h4>;
      case 'h5':
        return <h5 style={style} className={className}>{content}</h5>;
      case 'h6':
        return <h6 style={style} className={className}>{content}</h6>;
      default:
        return <p style={style} className={className}>{content}</p>;
    }
  };

  return renderTag();
};

export default SplitText;
