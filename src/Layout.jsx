import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LanguageProvider, useLanguage } from './Components/portfolio/LanguageContext';
import LanguageSwitcher from './Components/portfolio/LanguageSwitcher';

function LayoutContent({ children, currentPageName }) {
    const { t, language } = useLanguage();
    
    const navItems = [
        { label: 'ABOUT ME', href: '#about', type: 'scroll' },
        { label: 'PROJECTS', href: '#projects', type: 'scroll' },
    ];

const handleResumeClick = () => {
    const link = document.createElement('a');

    // Si el idioma es español ('es'), baja el CV en español
    if (language === 'es') {
        link.href = '/assets/cv-es.pdf';
        link.download = 'CV-Jeronimo-Pellicer-ES.pdf';
    } else {
        // Si no, baja el CV en inglés
        link.href = '/assets/cv-en.pdf';
        link.download = 'CV-Jeronimo-Pellicer-EN.pdf';
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
    };
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-zinc-950 relative">
            <LanguageSwitcher />
            {/* Noise Texture Overlay */}
            <div 
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
                    opacity: 0.05
                }}
            />
            {/* Navigation - Glassmorphism */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
                    isScrolled 
                        ? 'bg-zinc-900/40 backdrop-blur-2xl border border-zinc-800/50' 
                        : 'bg-zinc-900/20 backdrop-blur-xl border border-zinc-800/30'
                } rounded-2xl`}
            >
                <nav className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <motion.button
                            onClick={() => scrollToSection('#home')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-xl font-bold text-white tracking-tight relative group"
                        >
                            Jerónimo
                            <span className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full ml-1 group-hover:animate-pulse"></span>
                        </motion.button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-2">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.label}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection(item.href)}
                                    className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/50 transition-all duration-300"
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleResumeClick}
                                className="ml-2 px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-[0_10px_30px_rgba(52,211,153,0.4)] hover:shadow-[0_15px_40px_rgba(52,211,153,0.5)] cursor-pointer"
                            >
                                RESUME
                            </motion.button>
                        </div>

                        {/* Mobile menu button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="md:hidden bg-zinc-900/60 backdrop-blur-2xl border-t border-zinc-800/50 overflow-hidden rounded-b-2xl"
                          >
                            <div className="container mx-auto px-6 py-6 space-y-2">
                                {navItems.map((item) => (
                                    <button
                                        key={item.label}
                                        onClick={() => scrollToSection(item.href)}
                                        className="block w-full text-left px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors font-medium rounded-lg"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                                <button
                                    onClick={handleResumeClick}
                                    className="w-full mt-4 px-6 py-3 text-center font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg transition-colors"
                                >
                                    RESUME
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Main content */}
            <main>
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-zinc-950 border-t border-zinc-800/50 text-white py-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <p className="text-2xl font-bold mb-2">
                                Jerónimo<span className="text-emerald-400">.</span>
                            </p>
                            <p className="text-zinc-500 text-sm">
                                Digital Business & UX Professional
                            </p>
                        </div>
                        <div className="flex items-center gap-6">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-sm text-zinc-500 hover:text-emerald-400 transition-colors"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="border-t border-zinc-800/50 mt-10 pt-8 text-center">
                        <p className="text-zinc-600 text-sm">
                            © {new Date().getFullYear()} Jerónimo Pellicer. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default function Layout({ children, currentPageName }) {
    return (
        <LanguageProvider>
            <LayoutContent currentPageName={currentPageName}>{children}</LayoutContent>
        </LanguageProvider>
    );
}
