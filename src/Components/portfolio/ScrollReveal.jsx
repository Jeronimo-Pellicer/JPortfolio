import { useEffect, useRef, useMemo, useState } from 'react';

import './ScrollReveal.css';

// Lazy load GSAP only when needed (for scroll animations)
let gsap = null;
let ScrollTrigger = null;

const loadGSAP = async () => {
  if (gsap !== null) return gsap;
  const gsapModule = await import('gsap');
  gsap = gsapModule.default;
  ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
  gsap.registerPlugin(ScrollTrigger);
  return gsap;
};

const ScrollReveal = ({
  text = '',
  splitBy = 'word',
  baseRotation = -5,
  baseOpacity = 0.3,
  rotationEnd = '200px',
  wordAnimationEnd = '150px',
  enableBlur = true,
  blurStrength = 10,
  containerClassName = '',
  textClassName = '',
  scrollContainerRef = null
}) => {
  const containerRef = useRef(null);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  const splitText = useMemo(() => {
    if (!text) return '';
    if (splitBy === 'word') {
      return text.split(' ').map((word, i) => (
        <span key={i} className="word">{word}</span>
      )).reduce((acc, el, i, arr) => (
        i < arr.length - 1 ? [...acc, el, ' '] : [...acc, el]
      ), []);
    }
    return text;
  }, [text, splitBy]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let wordElements = [];
    // Group DOM reads
    wordElements = Array.from(el.querySelectorAll('.word'));

    // Load GSAP dynamically only when component mounts
    loadGSAP().then(() => {
      setGsapLoaded(true);
      const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

      // Rotation animation
      gsap.fromTo(
        el,
        { transformOrigin: '0% 50%', rotate: baseRotation },
        {
          ease: 'none',
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom',
            end: rotationEnd,
            scrub: true
          }
        }
      );

      // Opacity animation with will-change only during animation
      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity },
        {
          ease: 'none',
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true,
            onUpdate: self => {
              wordElements.forEach(w => w.style.willChange = 'opacity');
            },
            onLeave: self => {
              wordElements.forEach(w => w.style.willChange = '');
            },
            onLeaveBack: self => {
              wordElements.forEach(w => w.style.willChange = '');
            }
          }
        }
      );

      // Blur animation
      if (enableBlur) {
        gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            ease: 'none',
            filter: 'blur(0px)',
            stagger: 0.05,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top bottom-=20%',
              end: wordAnimationEnd,
              scrub: true
            }
          }
        );
      }
    });

    // Cleanup triggers on unmount
    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
