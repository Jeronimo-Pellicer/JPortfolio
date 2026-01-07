import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function HeroSection() {
    const { t } = useLanguage();
    
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-black pt-24">
            {/* Animated Background - Same as Projects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
                />
            </div>
            
            {/* Hero Section - Minimalist Style */}
            <section className="relative pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-block mb-6"
                        >
                            <Sparkles className="w-12 h-12 text-emerald-400" />
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-teal-400 mb-6 tracking-tight leading-none"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.05em' }}
                        >
                            {t.hero.greeting.toUpperCase()} JERÓNIMO
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-8"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        >
                            {t.hero.subtitle} <span className="text-white font-medium">{t.hero.role}</span> {t.hero.description}
                        </motion.p>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100px' }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-12 rounded-full"
                        />

                        {/* KPI Cards - Minimalist, below title */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
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
                            className="flex flex-wrap items-center justify-center gap-4 mt-12"
                        >
                            <Link to="/projects">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-xl hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 cursor-pointer"
                                >
                                    {t.hero.viewWork}
                                </motion.button>
                            </Link>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('contact')}
                                className="px-8 py-4 bg-zinc-900/50 backdrop-blur-sm text-white font-medium rounded-xl border border-zinc-800/50 hover:bg-zinc-800 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
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
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.button
                    onClick={() => scrollToSection('about')}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="p-3 text-zinc-500 hover:text-emerald-400 transition-colors bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-full cursor-pointer"
                    aria-label="Scroll down"
                >
                    <ArrowDown className="w-5 h-5" />
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
            className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-6 group hover:border-emerald-500/30 transition-all duration-300 text-center"
        >
            <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-teal-400 mb-3 font-variant-numeric tabular-nums" style={{ letterSpacing: '-0.02em' }}>
                {value}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{label}</p>
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
            className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-6 group hover:border-emerald-500/30 transition-all duration-300 text-center"
        >
            <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-teal-400 mb-3 font-variant-numeric tabular-nums" style={{ letterSpacing: '-0.02em' }}>
                {displayValue}{suffix}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{label}</p>
        </motion.div>
    );
}
