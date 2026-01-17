import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export default function LanguageSwitcher({ className }) {
    const { language, toggleLanguage } = useLanguage();

    // Allow parent to control positioning; default to floating on desktop
    const wrapperClass = className || 'fixed top-28 right-3 sm:top-24 sm:right-6 z-50';

    return (
        <div className={wrapperClass}>
            <div className="flex items-center gap-2 sm:gap-3 bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800/50 rounded-2xl p-1.5 sm:p-2 shadow-lg">
                <motion.button
                    onClick={() => language !== 'es' && toggleLanguage()}
                    whileHover={{ scale: language === 'es' ? 1.15 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative cursor-pointer transition-all duration-300"
                    style={{
                        transform: `scale(${language === 'es' ? 1.1 : 0.95})`,
                        opacity: language === 'es' ? 1 : 0.6
                    }}
                    aria-label="Cambiar a Español"
                >
                    <img 
                        src="https://flagcdn.com/es.svg"
                        alt="Spanish Flag"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-cover"
                    />
                </motion.button>
                
                <motion.button
                    onClick={() => language !== 'en' && toggleLanguage()}
                    whileHover={{ scale: language === 'en' ? 1.15 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative cursor-pointer transition-all duration-300"
                    style={{
                        transform: `scale(${language === 'en' ? 1.1 : 0.95})`,
                        opacity: language === 'en' ? 1 : 0.6
                    }}
                    aria-label="Switch to English"
                >
                    <img 
                        src="https://flagcdn.com/us.svg"
                        alt="US Flag"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-cover"
                    />
                </motion.button>
            </div>
        </div>
    );
}
