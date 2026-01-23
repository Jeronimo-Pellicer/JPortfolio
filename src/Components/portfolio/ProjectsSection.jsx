import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export default function ProjectsSection() {
    const { language } = useLanguage();
    
    const projects = [
        {
            title: 'Kiddo Franchising Strategy',
            description: {
                en: 'Development of a commercial expansion strategy and franchising model for a gastronomic brand, focusing on scalability and business modeling.',
                es: 'Desarrollo de estrategia de expansión comercial y modelo de franquicias para marca gastronómica, enfocado en escalabilidad y modelado de negocio.'
            },
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
            tags: ['Business Strategy', 'Franchising', 'Commercial'],
        },
        {
            title: 'Topper Mobile-First Plan',
            description: {
                en: 'Creation of a comprehensive digital marketing brief and paid media campaign planning for a leading apparel brand, specifically optimized for mobile user acquisition.',
                es: 'Creación de brief de marketing digital integral y planificación de campañas de medios pagos para marca líder de indumentaria, optimizado para adquisición móvil.'
            },
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
            tags: ['Marketing Strategy', 'Mobile Growth', 'Paid Media'],
        },
        {
            title: 'EasyTrack Financial Report',
            description: {
                en: 'Paid Media performance analysis for a personal finance (fintech) application, optimizing campaign ROI and user tracking.',
                es: 'Análisis de rendimiento de Paid Media para aplicación de finanzas personales (fintech), optimizando ROI de campañas y seguimiento de usuarios.'
            },
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
            tags: ['Fintech', 'Data Analysis', 'Performance Marketing'],
        },
        {
            title: 'Lisicki Litvin Corp Metrics',
            description: {
                en: 'Design of executive KPI Monthly Presentations and dashboards for a top-tier accounting firm to visualize operational efficiency and service metrics.',
                es: 'Diseño de presentaciones mensuales de KPIs ejecutivos y dashboards para firma de contabilidad de primer nivel para visualizar eficiencia operativa y métricas de servicio.'
            },
            image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
            tags: ['Data Visualization', 'Corporate Reporting', 'KPIs'],
        },
        {
            title: 'Stiberman Law SEO/SEM',
            description: {
                en: 'Strategic Digital Marketing Brief focused on SEO and SEM positioning for a US-based Bankruptcy Law Firm.',
                es: 'Brief estratégico de Marketing Digital enfocado en posicionamiento SEO y SEM para firma legal de Bancarrota en Estados Unidos.'
            },
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
            tags: ['SEO/SEM', 'Legal Marketing', 'Digital Strategy'],
        },
    ];

    return (
        <section id="projects" className="py-32 bg-zinc-950 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
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
                        <span className="text-emerald-400 font-medium tracking-wide text-sm uppercase">
                            {language === 'en' ? 'My Work' : 'Mi Trabajo'}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
                            {language === 'en' ? 'Featured Projects' : 'Proyectos Destacados'}
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                            {language === 'en' 
                                ? 'A selection of projects that showcase my skills and passion for creating impactful digital solutions.' 
                                : 'Una selección de proyectos que muestran mis habilidades y pasión por crear soluciones digitales impactantes.'}
                        </p>
                        
                        {/* Beta Message */}
                        <div className="mt-8 max-w-3xl mx-auto bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-sm">
                            <div className="flex items-start gap-3">
                                <span className="px-3 py-1 bg-emerald-500 text-black text-xs font-bold rounded-lg uppercase tracking-wider">
                                    Beta
                                </span>
                                <p className="text-zinc-300 text-sm leading-relaxed flex-1">
                                    {language === 'en' 
                                        ? 'Project viewing is temporarily limited. This section is currently in beta and under optimization to deliver a more complete and intuitive experience. For more information, please get in touch through the available contact channel.' 
                                        : 'La visualización de los proyectos se encuentra temporalmente limitada. Esta sección está en fase beta y en proceso de optimización para brindar una experiencia más completa e intuitiva. Para más información, podés comunicarte a través del contacto disponible.'}
                                </p>
                            </div>
                        </div>
                        
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mt-6" 
                        />
                    </motion.div>

                    {/* Projects grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.15,
                                    ease: [0.6, 0.05, 0.01, 0.9]
                                }}
                                className="group bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl overflow-hidden transition-all duration-300 relative opacity-60 cursor-not-allowed"
                            >
                                {/* Beta Badge */}
                                <div className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-emerald-500 text-black text-xs font-bold rounded-lg uppercase tracking-wider shadow-lg">
                                    Beta
                                </div>
                                
                                {/* Image */}
                                <div className="aspect-[4/3] overflow-hidden relative bg-zinc-800/50">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        width="800"
                                        height="600"
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover"
                                        style={{ aspectRatio: '4/3' }}
                                    />
                                </div>
                                
                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                                        {project.description[language]}
                                    </p>
                                    
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-lg border border-emerald-500/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
