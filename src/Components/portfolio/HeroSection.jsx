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
            {/* Animated Background - Optimized for mobile performance */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-0 md:opacity-100 transition-opacity duration-300">
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
                    style={{ willChange: 'transform', transform: 'translateZ(0) translate3d(0,0,0)', backfaceVisibility: 'hidden' }}
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
                    style={{ willChange: 'transform', transform: 'translateZ(0) translate3d(0,0,0)', backfaceVisibility: 'hidden' }}
                />
            </div>
            
            {/* Hero Section - Minimalist Style */}
            <section className="relative -mt-5 pb-8 md:pb-12">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                        className="max-w-5xl mx-auto text-center flex flex-col items-center"
                    >
                        <motion.h1 
                            initial={{ opacity: 1, x: 0 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-7xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-teal-400 mb-4 tracking-tight leading-none"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.05em' }}
                        >
                            {t.hero.greeting.toUpperCase()} JERÓNIMO
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 1, x: 0 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-sm md:text-base lg:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-6"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        >
                            {language === 'es' ? (
                                <>Acelera tu crecimiento profesional con recursos y herramientas digitales premium. Soluciones prácticas y listas para usar que te ayudarán a resolver desafíos técnicos y creativos en minutos, no en horas.</>
                            ) : (
                                <>Accelerate your professional growth with premium digital resources and tools. Practical, ready-to-use solutions to help you solve technical and creative challenges in minutes, not hours.</>
                            )}
                        </motion.p>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100px' }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8 rounded-full"
                        />

                        <div className="md:flex md:flex-col">
                            {/* CTA Section - Redesigned */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                                className="flex flex-col items-center justify-center w-full mb-10 md:mb-14 mt-2 md:order-2"
                            >
                                {/* Microcopy */}
                                <p className="text-zinc-500 text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold mb-5">
                                    {language === 'es' ? '¿Por dónde empezar?' : 'Where to start?'}
                                </p>

                                {/* Main CTAs */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-5 px-4 sm:px-0">
                                    {/* Primary CTA: Ver mi trabajo */}
                                    <Link to="/projects" className="w-full sm:w-auto">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full sm:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 group"
                                        >
                                            {language === 'es' ? 'Ver mi trabajo' : 'View my work'}
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                        </motion.button>
                                    </Link>

                                    {/* Secondary CTA: Explorar productos */}
                                    <Link to="/herramientas" className="w-full sm:w-auto">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full sm:w-auto px-6 py-3.5 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <span className="text-lg leading-none">📦</span> {language === 'es' ? 'Explorar productos' : 'Explore products'}
                                        </motion.button>
                                    </Link>
                                </div>

                                {/* Tertiary Links: Recursos & Contact */}
                                <div className="flex items-center justify-center gap-4 text-sm mb-8 text-zinc-400">
                                    <Link to="/recursos" className="hover:text-emerald-400 transition-colors border-b border-transparent hover:border-emerald-400/50 pb-0.5">
                                        {language === 'es' ? 'Recursos gratuitos' : 'Free resources'}
                                    </Link>
                                    <span className="text-zinc-700 text-xs">•</span>
                                    <button 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className="hover:text-emerald-400 transition-colors border-b border-transparent hover:border-emerald-400/50 pb-0.5 cursor-pointer"
                                    >
                                        {language === 'es' ? 'Contactar' : 'Contact'}
                                    </button>
                                </div>

                                {/* Social Proof */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-2">
                                    {/* Avatars */}
                                    <div className="flex -space-x-2">
                                        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white border-2 border-zinc-950 z-30 shadow-sm">A</div>
                                        <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center text-[10px] font-bold text-white border-2 border-zinc-950 z-20 shadow-sm">M</div>
                                        <div className="w-7 h-7 rounded-full bg-orange-600 flex items-center justify-center text-[10px] font-bold text-white border-2 border-zinc-950 z-10 shadow-sm">R</div>
                                        <div className="w-7 h-7 rounded-full bg-emerald-900 flex items-center justify-center text-[12px] font-bold text-emerald-400 border-2 border-zinc-950 z-0 relative overflow-hidden group/pulse shadow-sm">
                                            <div className="absolute inset-0 bg-emerald-500/20 animate-pulse"></div>
                                            <span className="relative z-10 leading-none mb-0.5">+</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                        {/* Stars */}
                                        <div className="flex text-yellow-500 text-xs tracking-widest">
                                            ★★★★★
                                        </div>
                                        {/* Text */}
                                        <span className="text-xs text-zinc-400 font-medium">
                                            {language === 'es' ? 'Usado por +50 profesionales este mes' : 'Used by 50+ professionals this month'}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                        {/* KPI Cards - Below buttons on mobile */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 md:order-1 max-w-4xl mx-auto w-full">
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
                        </div>
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
                    className="p-1 md:p-2 text-zinc-500 hover:text-emerald-400 transition-colors bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-full cursor-pointer"
                    aria-label="Scroll down"
                >
                    <ArrowDown className="w-2.5 h-2.5 md:w-4 md:h-4" />
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
            className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-lg md:rounded-xl p-3 md:p-4 group hover:border-emerald-500/30 transition-all duration-300 text-center flex flex-col justify-center"
        >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-teal-400 mb-1 font-variant-numeric tabular-nums" style={{ letterSpacing: '-0.02em' }}>
                {value}
            </h3>
            <p className="text-zinc-400 text-[10px] md:text-xs leading-tight font-medium">{label}</p>
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
            className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-lg md:rounded-xl p-3 md:p-4 group hover:border-emerald-500/30 transition-all duration-300 text-center flex flex-col justify-center"
        >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-teal-400 mb-1 font-variant-numeric tabular-nums" style={{ letterSpacing: '-0.02em' }}>
                {displayValue}{suffix}
            </h3>
            <p className="text-zinc-400 text-[10px] md:text-xs leading-tight font-medium">{label}</p>
        </motion.div>
    );
}
