import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../portfolio/LanguageContext';
import { Button } from "../ui/button";
import { ArrowRight, MessageCircle, Mail, Sparkles } from 'lucide-react';

export default function ResourceCTA() {
    const { t } = useLanguage();
    const navigate = useNavigate();

    const handleContact = (e) => {
        e.preventDefault();
        // Navegar al home con el hash de contacto usando React Router
        navigate('/#contact');
        // Dar tiempo para que la navegación complete antes de hacer scroll
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <section className="relative py-20 overflow-hidden z-20">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700" />
            
            {/* Animated shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/2 -left-1/4 w-full h-full opacity-10"
                    style={{
                        background: 'radial-gradient(circle, white 0%, transparent 60%)'
                    }}
                />
                <motion.div
                    animate={{ 
                        y: [0, -30, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                        <Sparkles className="w-4 h-4 text-amber-300" />
                        <span className="text-sm font-medium text-white/90">
                            {t.resources.cta.title}
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {t.resources.cta.subtitle}
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                        <Button
                            onClick={handleContact}
                            size="lg"
                            className="bg-white text-violet-700 hover:bg-violet-50 shadow-xl py-6 px-8 text-lg group"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            {t.resources.cta.buttonCustom}
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            onClick={handleContact}
                            variant="outline"
                            size="lg"
                            className="border-white/30 text-white hover:bg-white/10 py-6 px-8 text-lg"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            {t.resources.cta.buttonContact}
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}