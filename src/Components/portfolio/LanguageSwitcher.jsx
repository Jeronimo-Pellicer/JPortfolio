import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export default function LanguageSwitcher() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="fixed top-24 right-6 z-50">
            <div className="flex items-center gap-3 bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800/50 rounded-2xl p-2 shadow-lg">
                <motion.button
                    onClick={() => language !== 'es' && toggleLanguage()}
                    whileHover={{ scale: language === 'es' ? 1.2 : 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative cursor-pointer transition-all duration-300"
                    style={{
                        transform: `scale(${language === 'es' ? 1.2 : 0.9})`,
                        opacity: language === 'es' ? 1 : 0.5
                    }}
                >
                    <img 
                        src="https://flagcdn.com/es.svg"
                        alt="Spanish Flag"
                        className="w-8 h-8 rounded-lg object-cover"
                    />
                </motion.button>
                
                <motion.button
                    onClick={() => language !== 'en' && toggleLanguage()}
                    whileHover={{ scale: language === 'en' ? 1.2 : 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative cursor-pointer transition-all duration-300"
                    style={{
                        transform: `scale(${language === 'en' ? 1.2 : 0.9})`,
                        opacity: language === 'en' ? 1 : 0.5
                    }}
                >
                    <img 
                        src="https://flagcdn.com/us.svg"
                        alt="US Flag"
                        className="w-8 h-8 rounded-lg object-cover"
                    />
                </motion.button>
            </div>
        </div>
    );
}
