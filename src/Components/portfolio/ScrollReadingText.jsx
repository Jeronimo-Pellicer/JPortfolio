import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export default function ScrollReadingText({ text, className = "" }) {
    const { language } = useLanguage();
    
    // Use text prop if provided, otherwise use translations
    const displayText = text || (language === 'es' 
        ? "Diseño experiencias de usuario basadas en datos que transforman cómo las empresas se conectan con sus audiencias. Desde la optimización de UX hasta campañas de marketing enfocadas en conversión, ayudo a las marcas a crecer con propósito y precisión."
        : "I design data-driven user experiences that transform how businesses connect with their audiences. From UX optimization to conversion-focused marketing campaigns, I help brands grow with purpose and precision."
    );
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.8", "end 0.2"]
    });

    // Split text into words
    const words = displayText.split(' ');

    return (
        <div ref={ref} className={`relative ${className}`}>
            <p className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                {words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + (1 / words.length);
                    
                    return (
                        <Word 
                            key={i} 
                            progress={scrollYProgress} 
                            range={[start, end]}
                        >
                            {word}
                        </Word>
                    );
                })}
            </p>
        </div>
    );
}

function Word({ children, progress, range }) {
    const opacity = useTransform(progress, range, [0.2, 1]);
    const color = useTransform(
        progress,
        range,
        ["#404040", "#00ffcc"]
    );

    return (
        <motion.span
            style={{ opacity, color }}
            className="inline-block mr-2 md:mr-3 transition-all duration-200"
        >
            {children}
        </motion.span>
    );
}
