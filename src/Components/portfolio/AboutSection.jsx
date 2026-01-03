import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Heart, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import ScrollReadingText from './ScrollReadingText';

const technologies = [
    'Power BI', 'Data Analysis', 'SEO', 'Digital Marketing', 'Customer Experience', 
    'Social Media Strategy', 'Content Marketing', 'Analytics', 'Excel', 'Process Optimization'
];

export default function AboutSection() {
    const { t } = useLanguage();
    
    const skills = [
        { icon: Code2, title: t.about.skills.cleanCode.title, description: t.about.skills.cleanCode.description, gradient: 'from-emerald-500 to-teal-500' },
        { icon: Palette, title: t.about.skills.design.title, description: t.about.skills.design.description, gradient: 'from-blue-500 to-cyan-500' },
        { icon: Zap, title: t.about.skills.performance.title, description: t.about.skills.performance.description, gradient: 'from-yellow-500 to-orange-500' },
        { icon: Heart, title: t.about.skills.passion.title, description: t.about.skills.passion.description, gradient: 'from-pink-500 to-rose-500' },
    ];
    
    return (
        <section id="about" className="py-32 bg-zinc-950 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-emerald-400 font-medium tracking-wide text-sm uppercase"
                        >
                            {t.about.title}
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6"
                        >
                            {t.about.heading}
                        </motion.h2>
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" 
                        />
                    </motion.div>

                    {/* Scroll Reading Effect - Hero Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <ScrollReadingText 
                            text="I design data-driven user experiences that transform how businesses connect with their audiences. From UX optimization to conversion-focused marketing campaigns, I help brands grow with purpose and precision."
                            className="leading-tight"
                        />
                    </motion.div>

                    {/* Bento Grid About Content */}
                    <div className="grid lg:grid-cols-12 gap-6 mb-16">
                        {/* Large text card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-8 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 lg:p-12 group hover:border-zinc-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5"
                        >
                            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                                {t.about.subtitle}
                            </h3>
                            <div className="space-y-4 text-zinc-400 leading-relaxed">
                                <p>{t.about.paragraph1}</p>
                                <p>{t.about.paragraph2}</p>
                                <p>{t.about.paragraph3}</p>
                            </div>
                        </motion.div>

                        {/* Profile image card with parallax */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-4 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl overflow-hidden group hover:border-zinc-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5"
                        >
                            <div className="aspect-square relative overflow-hidden">
                                <motion.img 
                                    whileHover={{ scale: 1.1, rotateZ: 2 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/2730eb946_ProfilePhoto.jpg"
                                    alt="Jerónimo Pellicer"
                                    className="w-full h-full object-cover object-top"
                                    style={{ objectPosition: 'center 15%' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
                            </div>
                        </motion.div>

                        {/* Technologies card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="lg:col-span-12 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 group hover:border-zinc-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5"
                        >
                            <p className="text-sm font-medium text-emerald-400 mb-6 uppercase tracking-wide">{t.about.techLabel}</p>
                            <div className="flex flex-wrap gap-3">
                                {technologies.map((tech, index) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.05 * index }}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        className="px-4 py-2 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 text-zinc-300 text-sm font-medium rounded-xl hover:border-emerald-500/30 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 cursor-default"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Skills grid - 4 cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5 relative overflow-hidden"
                            >
                                {/* Gradient accent on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                
                                <motion.div 
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className={`w-14 h-14 bg-gradient-to-br ${skill.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                                >
                                    <skill.icon className="w-7 h-7 text-white" />
                                </motion.div>
                                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">{skill.title}</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed">{skill.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
