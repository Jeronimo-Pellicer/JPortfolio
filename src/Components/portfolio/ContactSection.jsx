import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function ContactSection() {
    const { t } = useLanguage();
    
    // Simplificamos la info para mostrarla en rejilla de texto
    const contactInfo = [
        { label: t.contact.info.phone, value: '+54 9 11 2362 9722', href: 'tel:+5491123629722' },
        { label: t.contact.info.location, value: t.contact.info.locationValue, href: null },
        { label: t.contact.info.email, value: 'pellicerjeronimo@gmail.com', href: 'http://mail.google.com/mail/u/0/?to=pellicerjeronimo@gmail.com&su=Knowing+More&body=Hi,+I+am+talking+in+representation+of+X,+I+would+like+to+know+more+about+the+services+you+offer.&fs=1&tf=cm' },
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
        <section id="contact" className="py-20 lg:py-32 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    
                    {/* --- COLUMNA IZQUIERDA (Texto Oscuro) --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        <div>
                            <span className="text-zinc-500 text-sm font-medium tracking-wider uppercase mb-4 block">/ {t.contact.title} /</span>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                                {t.contact.heading}
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                                {t.contact.description}
                            </p>
                        </div>

                        {/* Grid de información de contacto (Estilo limpio sin tarjetas) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {contactInfo.map((item) => (
                                <div key={item.label} className="space-y-2">
                                    <h4 className="text-white font-semibold text-lg">{item.label}</h4>
                                    {item.href ? (
                                        <a href={item.href} className="block text-zinc-400 hover:text-emerald-400 transition-colors">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-zinc-400">{item.value}</p>
                                    )}
                                </div>
                            ))}
                            
                            {/* Redes Sociales */}
                            <div className="space-y-4">
                                <h4 className="text-white font-semibold text-lg">{t.contact.social}</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((item) => (
                                        <a 
                                            key={item.label}
                                            href={item.href}
                                            className="text-zinc-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                                        >
                                            <item.icon className="w-6 h-6" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- COLUMNA DERECHA (Tarjeta Blanca con Formulario) --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-14 shadow-2xl relative"
                    >
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
                                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-10 h-10" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-zinc-900 mb-2">{t.contact.form.success}</h3>
                                    <p className="text-zinc-500">{t.contact.form.successMessage}</p>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="mb-10">
                                    <h3 className="text-3xl font-bold text-zinc-900 mb-3">Contact</h3>
                                    <p className="text-zinc-500">
                                        Identify your key objectives and explore the opportunities where our expertise can enhance your results.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* Input Name */}
                                    <div className="relative">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder={t.contact.form.namePlaceholder}
                                            className="w-full bg-transparent border-b border-zinc-200 py-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors text-lg"
                                            required
                                        />
                                        <label htmlFor="name" className="absolute top-0 left-0 text-xs font-semibold text-zinc-400 uppercase tracking-wide -translate-y-4">
                                            {t.contact.form.name}
                                        </label>
                                    </div>

                                    {/* Input Email */}
                                    <div className="relative mt-8">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder={t.contact.form.emailPlaceholder}
                                            className="w-full bg-transparent border-b border-zinc-200 py-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors text-lg"
                                            required
                                        />
                                        <label htmlFor="email" className="absolute top-0 left-0 text-xs font-semibold text-zinc-400 uppercase tracking-wide -translate-y-4">
                                            {t.contact.form.email}
                                        </label>
                                    </div>

                                    {/* Input Subject */}
                                    <div className="relative mt-8">
                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder={t.contact.form.subjectPlaceholder}
                                            className="w-full bg-transparent border-b border-zinc-200 py-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors text-lg"
                                            required
                                        />
                                        <label htmlFor="subject" className="absolute top-0 left-0 text-xs font-semibold text-zinc-400 uppercase tracking-wide -translate-y-4">
                                            {t.contact.form.subject}
                                        </label>
                                    </div>

                                    {/* Textarea Message */}
                                    <div className="relative mt-8">
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder={t.contact.form.messagePlaceholder}
                                            rows={3}
                                            className="w-full bg-transparent border-b border-zinc-200 py-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors resize-none text-lg"
                                            required
                                        />
                                        <label htmlFor="message" className="absolute top-0 left-0 text-xs font-semibold text-zinc-400 uppercase tracking-wide -translate-y-4">
                                            {t.contact.form.message}
                                        </label>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-full transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 group"
                                        >
                                            {isSubmitting ? (
                                                t.contact.form.sending
                                            ) : (
                                                <>
                                                    {t.contact.form.send}
                                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}