import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter, CheckCircle, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function ContactSection() {
    const { t } = useLanguage();
    
    const contactInfo = [
        { icon: Mail, label: t.contact.info.email, value: 'pellicerjeronimo@gmail.com', href: 'mailto:pellicerjeronimo@gmail.com' },
        { icon: MapPin, label: t.contact.info.location, value: t.contact.info.locationValue, href: null },
        { icon: Phone, label: t.contact.info.phone, value: '+54 9 11 2362 9722', href: 'tel:+5491123629722' },
    ];
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section id="contact" className="py-20 sm:py-32 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* White Card Container */}
                <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.3)] p-8 sm:p-12 lg:p-16">
                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <span className="text-emerald-500 font-semibold tracking-wide text-sm uppercase">{t.contact.title}</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 mt-4 mb-6">
                            {t.contact.heading}
                        </h2>
                        <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
                            {t.contact.description}
                        </p>
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mt-6" 
                        />
                    </motion.div>

                    <div className="grid lg:grid-cols-12 gap-4 sm:gap-6">
                        {/* Contact info sidebar - Bento cards */}
                        <div className="lg:col-span-4 space-y-4 sm:space-y-6">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02, y: -4 }}
                                    className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 group hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(52,211,153,0.15)] cursor-pointer"
                                >
                                    <div className="flex items-start gap-4">
                                        <motion.div 
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                                        >
                                            <item.icon className="w-6 h-6 text-white" />
                                        </motion.div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs text-zinc-500 mb-1 uppercase tracking-wide">{item.label}</p>
                                            {item.href ? (
                                                <a 
                                                    href={item.href}
                                                    className="text-zinc-900 font-medium hover:text-emerald-500 transition-colors break-all text-xs sm:text-sm md:text-base cursor-pointer"
                                                    style={{ wordBreak: 'break-all' }}
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-zinc-900 font-medium break-words text-xs sm:text-sm md:text-base" style={{ wordBreak: 'break-word' }}>{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Social links card */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 group hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(52,211,153,0.15)]"
                            >
                                <p className="text-xs text-zinc-500 mb-4 uppercase tracking-wide">{t.contact.social}</p>
                                <div className="flex gap-3">
                                    {socialLinks.map((item) => (
                                        <motion.a
                                            key={item.label}
                                            href={item.href}
                                            whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-zinc-600 hover:text-white hover:bg-emerald-500 border border-zinc-200 hover:border-emerald-400 transition-all duration-300 shadow-sm hover:shadow-[0_10px_30px_rgba(52,211,153,0.3)] cursor-pointer"
                                            aria-label={item.label}
                                        >
                                            <item.icon className="w-5 h-5" />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Availability card */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl p-6 relative overflow-hidden cursor-pointer hover:shadow-[0_10px_40px_rgba(52,211,153,0.15)] transition-all duration-300"
                            >
                                <Sparkles className="absolute top-4 right-4 w-6 h-6 text-emerald-400 opacity-30" />
                                <p className="text-emerald-600 font-semibold mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                    {t.contact.available}
                                </p>
                                <p className="text-zinc-700 text-sm leading-relaxed">
                                    {t.contact.availableText}
                                </p>
                            </motion.div>
                        </div>

                        {/* Contact form */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-8"
                        >
                            <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 sm:p-8 md:p-10 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(52,211,153,0.15)]">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-16 text-center"
                                    >
                                        <motion.div 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", duration: 0.6 }}
                                            className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mb-6"
                                        >
                                            <CheckCircle className="w-10 h-10 text-white" />
                                        </motion.div>
                                        <h3 className="text-3xl font-semibold text-zinc-900 mb-2">{t.contact.form.success}</h3>
                                        <p className="text-zinc-600">{t.contact.form.successMessage}</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="name" className="text-zinc-700 text-sm font-medium">{t.contact.form.name}</label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder={t.contact.form.namePlaceholder}
                                                    className="bg-white border-zinc-300 focus:border-emerald-500 text-zinc-900 placeholder:text-zinc-400 h-12 rounded-xl hover:border-emerald-400 transition-colors"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-zinc-700 text-sm font-medium">{t.contact.form.email}</label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder={t.contact.form.emailPlaceholder}
                                                    className="bg-white border-zinc-300 focus:border-emerald-500 text-zinc-900 placeholder:text-zinc-400 h-12 rounded-xl hover:border-emerald-400 transition-colors"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-zinc-700 text-sm font-medium">{t.contact.form.subject}</label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder={t.contact.form.subjectPlaceholder}
                                                className="bg-white border-zinc-300 focus:border-emerald-500 text-zinc-900 placeholder:text-zinc-400 h-12 rounded-xl hover:border-emerald-400 transition-colors"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-zinc-700 text-sm font-medium">{t.contact.form.message}</label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder={t.contact.form.messagePlaceholder}
                                                rows={6}
                                                className="bg-white border-zinc-300 focus:border-emerald-500 text-zinc-900 placeholder:text-zinc-400 rounded-xl resize-none hover:border-emerald-400 transition-colors"
                                                required
                                            />
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white py-4 text-base font-medium rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_10px_40px_rgba(52,211,153,0.4)] hover:shadow-[0_20px_50px_rgba(52,211,153,0.5)] cursor-pointer"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <motion.svg 
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                        className="w-5 h-5" 
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </motion.svg>
                                                    {t.contact.form.sending}
                                                </span>
                                            ) : (
                                                <span className="flex items-center justify-center gap-2">
                                                    <Send className="w-5 h-5" />
                                                    {t.contact.form.send}
                                                </span>
                                            )}
                                        </motion.button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
