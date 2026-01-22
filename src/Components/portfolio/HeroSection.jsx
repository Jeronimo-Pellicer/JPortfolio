import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function HeroSection() {
    const { t, language } = useLanguage();
    
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-[80vh] md:min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-black pt-6">
            {/* Animated Background - Disabled on mobile for performance */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none hidden md:block">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
                    style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1
                    }}
                    className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
                    style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                />
            </div>
            
            {/* Hero Section - Minimalist Style */}
            <section className="relative -mt-5 pb-8 md:pb-12">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-teal-400 mb-3 tracking-tight leading-none"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.05em' }}
                        >
                            {t.hero.greeting.toUpperCase()} JERÓNIMO
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-sm md:text-base lg:text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-3"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        >
                            {language === 'es' ? (
                                <>Plataforma exclusiva para estudiantes y apasionados del negocio digital: Accede a productos y recursos digitales premium de manera asequible, diseñados para resolver desafíos laborales y educativos con eficiencia y resultados inmediatos.</>
                            ) : (
                                <>Exclusive platform for students and digital business enthusiasts: Access premium digital products and resources affordably, designed to efficiently solve professional and educational challenges with immediate results.</>
                            )}
                        </motion.p>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100px' }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6 rounded-full"
                        />

                        {/* KPI Cards - Minimalist, below title */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-3">
                            {/* 2+ Years */}
                            <KPICard
                                value="2+"
                                label={t.hero.yearsExperience}
                                delay={0.9}
                            />
                            
                            {/* 10+ Projects */}
                            <KPICard
                                value="10+"
                                label={t.hero.projectsCompleted}
                                delay={1.0}
                            />
                            
                            {/* 12% Drop-off Rate */}
                            <AnimatedKPICard
                                target={12}
                                suffix="%"
                                label={t.hero.dropOffRate || "Tasa de Abandono"}
                                delay={1.1}
                            />
                            
                            {/* 93% CSAT */}
                            <AnimatedKPICard
                                target={93}
                                suffix="%"
                                label={t.hero.csat || "Satisfacción CSAT"}
                                delay={1.2}
                            />
                        </div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.3, duration: 0.8 }}
                            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-4 opacity-30"
                        >
                            <Link to="/herramientas">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 md:px-8 md:py-4 bg-orange-500/10 border border-orange-500/30 text-white font-medium rounded-lg md:rounded-xl hover:bg-orange-500/20 hover:border-orange-400/50 transition-all duration-300 shadow-lg shadow-orange-500/10 hover:shadow-xl hover:shadow-orange-500/20 cursor-pointer"
                                >
                                    {language === 'es' ? 'Productos' : 'Products'}
                                </motion.button>
                            </Link>
                            <Link to="/recursos">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 md:px-8 md:py-4 bg-violet-500/10 border border-violet-500/30 text-white font-medium rounded-lg md:rounded-xl hover:bg-violet-500/20 hover:border-violet-400/50 transition-all duration-300 shadow-lg shadow-violet-500/10 hover:shadow-xl hover:shadow-violet-500/20 cursor-pointer"
                                >
                                    {language === 'es' ? 'Recursos' : 'Resources'}
                                </motion.button>
                            </Link>
                            <Link to="/projects">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 md:px-8 md:py-4 bg-emerald-500/10 border border-emerald-500/30 text-white font-medium rounded-lg md:rounded-xl hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 shadow-lg shadow-emerald-500/10 hover:shadow-xl hover:shadow-emerald-500/20 cursor-pointer"
                                >
                                    {t.hero.viewWork}
                                </motion.button>
                            </Link>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('contact')}
                                className="px-6 py-3 md:px-8 md:py-4 bg-zinc-900/20 backdrop-blur-sm text-white font-medium rounded-lg md:rounded-xl border border-zinc-800/30 hover:bg-zinc-900/30 hover:border-emerald-500/30 transition-all duration-300 cursor-pointer"
                            >
                                {t.hero.getInTouch}
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.button
                    onClick={() => scrollToSection('about')}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="p-2 md:p-3 text-zinc-500 hover:text-emerald-400 transition-colors bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-full cursor-pointer"
                    aria-label="Scroll down"
                >
                    <ArrowDown className="w-4 h-4 md:w-5 md:h-5" />
                </motion.button>
            </motion.div>
        </section>
    );
}

// KPI Card Component - Minimalist Style
function KPICard({ value, label, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-xl md:rounded-2xl p-4 md:p-6 group hover:border-emerald-500/30 transition-all duration-300 text-center"
        >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-teal-400 mb-2 md:mb-3 font-variant-numeric tabular-nums" style={{ letterSpacing: '-0.02em' }}>
                {value}
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{label}</p>
        </motion.div>
    );
}

// Animated KPI Card Component - Smaller
function AnimatedKPICard({ target, suffix, label, delay }) {
    const [displayValue, setDisplayValue] = React.useState(0);
    const [hasAnimated, setHasAnimated] = React.useState(false);
    const cardRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateValue(0, target, 5000); // Slower animation - 5 seconds instead of 2
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, [target, hasAnimated]);

    const animateValue = (start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setDisplayValue(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-xl md:rounded-2xl p-4 md:p-6 group hover:border-emerald-500/30 transition-all duration-300 text-center"
        >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-teal-400 mb-2 md:mb-3 font-variant-numeric tabular-nums" style={{ letterSpacing: '-0.02em' }}>
                {displayValue}{suffix}
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{label}</p>
        </motion.div>
    );
}
