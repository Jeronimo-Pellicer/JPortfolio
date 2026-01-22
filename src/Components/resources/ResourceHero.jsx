import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Download, BookOpen, FileImage } from 'lucide-react';
import BlurText from '../ui/BlurText';
import { useLanguage } from '../portfolio/LanguageContext';

export default function ResourceHero() {
    const { t } = useLanguage();
    const stats = [
        { icon: Download, label: t.resources.hero.templates, count: '5+' },
        { icon: BookOpen, label: t.resources.hero.guides, count: '4+' },
        { icon: FileImage, label: t.resources.hero.infographics, count: '4+' },
    ];

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
    const cardRefs = useRef([]);

    const handleMouseMove = (e, index) => {
        const rect = cardRefs.current[index]?.getBoundingClientRect();
        if (!rect) return;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = (e.clientY - centerY) * 0.1;
        const rotateY = (e.clientX - centerX) * -0.1;

        setMousePosition({ rotateX, rotateY, index });
    };

    const handleMouseLeave = () => {
        setMousePosition({ rotateX: 0, rotateY: 0 });
        setHoveredCardIndex(null);
    };

    const handleMouseEnter = (index) => {
        setHoveredCardIndex(index);
    };

    const handleAnimationComplete = () => {
        console.log('Hero title animation completed!');
    };

    // Container variants for staggered entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.8,
            },
        },
    };

    // Card entrance animation with spring
    const cardEntranceVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            rotateX: -20,
            rotateZ: 2,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            rotateZ: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                mass: 1,
                duration: 0.8,
            },
        },
    };

    // Continuous floating animation
    const floatingVariants = {
        floating: {
            y: [0, -12, 0],
            transition: {
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <section className="w-full relative overflow-hidden bg-transparent pt-30 pb-12 sm:pb-16 lg:pb-24 xl:pb-32">


            <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-7xl flex flex-col items-center text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8"
                    >
                        <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-violet-400" />
                        <span className="text-xs sm:text-sm font-medium text-white/90">
                            {t.resources.hero.title}
                        </span>
                    </motion.div>

                    {/* Main heading - Responsive text with clamp() via Tailwind */}
                    <div className="w-full mb-6 sm:mb-8 flex justify-center">
                        <BlurText
                            text={t.resources.hero.subtitle}
                            delay={400}
                            animateBy="words"
                            direction="top"
                            onAnimationComplete={handleAnimationComplete}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white text-center leading-tight px-4"
                        />
                    </div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-10 sm:mb-12 lg:mb-16 px-4"
                    >
                        {t.resources.hero.description}
                    </motion.p>

                    {/* Stats Cards with Advanced Animations - Responsive grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={containerVariants}
                        className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                ref={(el) => (cardRefs.current[index] = el)}
                                variants={cardEntranceVariants}
                                whileHover={{ scale: 1.08 }}
                                onMouseMove={(e) => handleMouseMove(e, index)}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                animate={
                                    hoveredCardIndex === index
                                        ? {
                                            rotateX: mousePosition.rotateX || 0,
                                            rotateY: mousePosition.rotateY || 0,
                                            z: 50,
                                        }
                                        : {
                                            y: [0, -12, 0],
                                            transition: {
                                                duration: 3.5,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            },
                                        }
                                }
                                style={{
                                    perspective: '1000px',
                                    transformStyle: 'preserve-3d',
                                }}
                                className="relative w-full sm:w-auto flex items-center gap-3 px-6 py-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl shadow-lg shadow-black/20 border border-white/15 hover:border-white/30 transition-colors cursor-pointer"
                            >
                                {/* Glow effect on hover */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/10 blur-xl opacity-0"
                                    animate={{
                                        opacity: hoveredCardIndex === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    style={{ zIndex: -1 }}
                                />

                                <motion.div
                                    className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl shadow-lg"
                                    animate={{
                                        scale: hoveredCardIndex === index ? 1.15 : 1,
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 120,
                                        damping: 12,
                                    }}
                                >
                                    <stat.icon className="w-6 h-6 text-white" />
                                </motion.div>

                                <div className="text-left">
                                    <motion.p
                                        className="text-2xl font-bold text-white"
                                        animate={{
                                            scale: hoveredCardIndex === index ? 1.1 : 1,
                                        }}
                                    >
                                        {stat.count}
                                    </motion.p>
                                    <p className="text-sm text-slate-300">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Scroll indicator removed per request */}
                </div>
            </div>
        </section>
    );
}