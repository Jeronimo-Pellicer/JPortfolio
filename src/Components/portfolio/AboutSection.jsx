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
        <section id="about" className="py-32 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black relative overflow-hidden">
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
                            whileHover={{ scale: 1.02 }}
                            className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 cursor-default"
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
                            className="leading-tight"
                        />
                    </motion.div>

                    {/* Why Trust Me Section - Asymmetric, Minimalist Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 text-center">
                            {t.about.whyTrustMe || 'Por qué confiar en mí?'}
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                            {[
                                {
                                    title: t.about.trust1?.title || 'Excelencia académica y liderazgo en iniciativas globales',
                                    description: t.about.trust1?.description || 'Licenciatura en Administración en Internet en UEAN, con promedio de +8,66. Liderando un Proyecto facultativo de Finanzas Internacionales e inserción de Green Bonds en Argentina, con proyección a varios congresos.',
                                    bgStyle: 'bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10',
                                    borderStyle: 'border-l-4 border-emerald-400',
                                    position: 'md:col-span-1',
                                    rotation: 'rotate-1',
                                },
                                {
                                    title: t.about.trust2?.title || 'Certificación internacional, estrategias locales',
                                    description: t.about.trust2?.description || 'Con certificaciones en Marketing Digital de The University of Manchester, combino habilidades analíticas con pensamiento estratégico. Me especializo en SEO, marketing de contenido, estrategias en redes sociales y analítica, todo enfocado en impulsar el éxito empresarial.',
                                    bgStyle: 'bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10',
                                    borderStyle: 'border-t-4 border-blue-400',
                                    position: 'md:col-span-1',
                                    rotation: '-rotate-1',
                                },
                                {
                                    title: t.about.trust3?.title || 'Innovación de vanguardia aplicada a tu negocio',
                                    description: t.about.trust3?.description || 'Me capacito de manera permanente en nuevas tecnologías, inteligencia artificial y herramientas digitales, con foco en su aplicación práctica para la mejora de procesos, el análisis estratégico y la generación de valor en organizaciones.',
                                    bgStyle: 'bg-gradient-to-bl from-yellow-500/10 via-orange-500/10 to-red-500/10',
                                    borderStyle: 'border-r-4 border-yellow-400',
                                    position: 'md:col-span-2',
                                    rotation: 'rotate-0.5',
                                },
                                {
                                    title: t.about.trust4?.title || 'Resiliencia profesional y resultados medibles',
                                    description: t.about.trust4?.description || 'Me adapto fácilmente a entornos dinámicos con metas claras y objetivos precisos. Busco activamente desafíos que representen oportunidades de crecimiento profesional, ya sea mediante análisis de datos, optimización de procesos o iniciativas de marketing digital.',
                                    bgStyle: 'bg-gradient-to-tl from-cyan-500/10 via-indigo-500/10 to-violet-500/10',
                                    borderStyle: 'border-b-4 border-cyan-400',
                                    position: 'md:col-span-1 md:row-span-2',
                                    rotation: '-rotate-0.5',
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className={`${item.position} ${item.bgStyle} ${item.borderStyle} ${item.rotation} backdrop-blur-xl rounded-3xl p-8 lg:p-12 group hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 border border-zinc-800/30`}
                                >
                                    <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors leading-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technologies card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 group hover:border-zinc-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5 mb-16"
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
