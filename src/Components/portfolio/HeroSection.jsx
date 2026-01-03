import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import MiniGame from './MiniGame';

export default function HeroSection() {
    const { t } = useLanguage();
    
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-950 pt-24">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" />
            <div className="absolute inset-0">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" 
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" 
                />
            </div>
            
            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Bento Grid Layout */}
                    <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
                        {/* Main Content Card - Takes 7 columns */}
                        <motion.div
                            initial={{ opacity: 0, y: 60, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
                            className="lg:col-span-7 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 lg:p-12 group hover:border-zinc-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5 relative overflow-visible"
                        >
                            <div className="flex flex-wrap gap-3 mb-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 0.3, duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
                                >
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                                    <span className="text-sm font-medium text-emerald-400">Available for Opportunities</span>
                                </motion.div>
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 0.4, duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full"
                                >
                                    <span className="text-sm">📍</span>
                                    <span className="text-sm font-medium text-zinc-400">Buenos Aires, AR (GMT-3)</span>
                                    <span className="text-zinc-600">•</span>
                                    <span className="text-sm font-medium text-zinc-400">Open to Work</span>
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                                className="mb-6 relative"
                            >
                                {/* Handwritten text breaking out to the left */}
                                <motion.span 
                                    initial={{ opacity: 0, x: -50, rotate: -5 }}
                                    animate={{ opacity: 1, x: 0, rotate: -5 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                    className="absolute -left-10 -top-6 text-5xl md:text-6xl text-emerald-400 whitespace-nowrap"
                                    style={{ 
                                        fontFamily: "'Caveat', cursive",
                                        transformOrigin: 'left center',
                                    }}
                                >
                                    Hello, my name is
                                </motion.span>
                                
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mt-16">
                                    Jerónimo
                                </h1>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                                className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-2xl"
                            >
                                I'm a <span className="text-white font-medium">Digital Business Student & UX Analyst</span> passionate about data-driven user experience optimization, SEO, and digital marketing strategies.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1, duration: 0.8 }}
                                className="flex flex-wrap items-center gap-4"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection('projects')}
                                    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-2xl hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-[0_10px_40px_rgba(52,211,153,0.4)] hover:shadow-[0_20px_50px_rgba(52,211,153,0.5)] cursor-pointer"
                                >
                                    View My Work
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection('contact')}
                                    className="px-8 py-4 bg-zinc-800/50 backdrop-blur-sm text-white font-medium rounded-2xl border border-zinc-700/50 hover:bg-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(52,211,153,0.2)] cursor-pointer"
                                >
                                    Get In Touch
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Mini Game Card - Takes 5 columns */}
                        <div className="lg:col-span-5 h-[500px] lg:h-full">
                            <MiniGame />
                        </div>

                        {/* Stats Cards Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 1.3, duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }}
                            className="lg:col-span-4 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-6 group hover:border-zinc-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5"
                        >
                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <h3 className="text-4xl font-bold text-white mb-2">2+</h3>
                                    <p className="text-zinc-500 text-sm">Years of Experience</p>
                                </div>
                                <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 1.5, duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }}
                            className="lg:col-span-4 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-6 group hover:border-zinc-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5"
                        >
                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <h3 className="text-4xl font-bold text-white mb-2">10+</h3>
                                    <p className="text-zinc-500 text-sm">Projects Completed</p>
                                </div>
                                <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                            </div>
                        </motion.div>

                        {/* Social Links Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 1.7, duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }}
                            className="lg:col-span-4 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-6 group hover:border-zinc-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5"
                        >
                            <p className="text-zinc-500 text-sm mb-4">Connect with me</p>
                            <div className="flex items-center gap-3">
                                {[
                                    { icon: Github, href: 'https://github.com/Jeronimo-Pellicer', label: 'GitHub' },
                                    { icon: Linkedin, href: 'https://www.linkedin.com/in/jeronimopellicer/', label: 'LinkedIn' },
                                    { icon: Mail, href: 'https://mail.google.com/mail/u/0/?to=pellicerjeronimo@gmail.com&su=Knowing+More&body=Hi,+I+am+talking+in+representation+of+X,+I+would+like+to+know+more+about+the+services+you+offer.&fs=1&tf=cm', label: 'Email' },
                                ].map(({ icon: Icon, href, label }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 bg-zinc-800/50 backdrop-blur-sm text-zinc-400 hover:text-emerald-400 rounded-xl hover:bg-zinc-800 border border-zinc-700/50 hover:border-emerald-500/30 transition-all duration-300"
                                        aria-label={label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.button
                    onClick={() => scrollToSection('about')}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="p-3 text-zinc-500 hover:text-emerald-400 transition-colors bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-full"
                >
                    <ArrowDown className="w-5 h-5" />
                </motion.button>
            </motion.div>
        </section>
    );
}
