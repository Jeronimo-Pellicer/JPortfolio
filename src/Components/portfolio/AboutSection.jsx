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
    
    return (
        <section id="about" className="py-32 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Section header - Smaller and uppercase */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-left mb-24"
                    >
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-white font-bold tracking-wide text-xl uppercase"
                        >
                            {t.about.title}
                        </motion.span>
                    </motion.div>

                    {/* Scroll Reading Effect - Hero Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-32"
                    >
                        <ScrollReadingText 
                            className="leading-tight"
                        />
                    </motion.div>

                    {/* Why Trust Me Section - Left aligned, same font as hero */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20"
                    >
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12 text-left">
                            {t.about.whyTrustMe || 'Por qué confiar en mí?'}
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                            {[
                                {
                                    title: t.about.trust1?.title || 'Excelencia académica y liderazgo en iniciativas globales',
                                    description: t.about.trust1?.description || 'Licenciatura en Administración en Internet en UEAN, con promedio de +8,66. Liderando un Proyecto facultativo de Finanzas Internacionales e inserción de Green Bonds en Argentina, con proyección a varios congresos.',
                                },
                                {
                                    title: t.about.trust2?.title || 'Certificación internacional, estrategias locales',
                                    description: t.about.trust2?.description || 'Con certificaciones en Marketing Digital de The University of Manchester, combino habilidades analíticas con pensamiento estratégico. Me especializo en SEO, marketing de contenido, estrategias en redes sociales y analítica, todo enfocado en impulsar el éxito empresarial.',
                                },
                                {
                                    title: t.about.trust3?.title || 'Innovación de vanguardia aplicada a tu negocio',
                                    description: t.about.trust3?.description || 'Me capacito de manera permanente en nuevas tecnologías, inteligencia artificial y herramientas digitales, con foco en su aplicación práctica para la mejora de procesos, el análisis estratégico y la generación de valor en organizaciones.',
                                },
                                {
                                    title: t.about.trust4?.title || 'Resiliencia profesional y resultados medibles',
                                    description: t.about.trust4?.description || 'Me adapto fácilmente a entornos dinámicos con metas claras y objetivos precisos. Busco activamente desafíos que representen oportunidades de crecimiento profesional, ya sea mediante análisis de datos, optimización de procesos o iniciativas de marketing digital.',
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="backdrop-blur-xl rounded-2xl p-8 lg:p-10 group border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 overflow-hidden"
                                >
                                    <h4 className="text-lg md:text-xl lg:text-xl font-normal text-white mb-4 group-hover:text-emerald-400 transition-colors leading-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-zinc-300 leading-relaxed text-sm md:text-base text-justify">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
