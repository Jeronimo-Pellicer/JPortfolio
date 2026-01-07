import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/Components/portfolio/LanguageContext';
import LanguageSwitcher from '@/Components/portfolio/LanguageSwitcher';
import { createProjectSlug } from '../utils/projectUtils';

function Projects() {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('all');

    const allProjects = [
        {
            title: t.projects.project1.title,
            description: t.projects.project1.description,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
            tags: ['Business Strategy', 'Franchising', 'Commercial'],
            category: 'strategy',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: t.projects.project2.title,
            description: t.projects.project2.description,
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop',
            tags: ['Marketing Strategy', 'Mobile Growth', 'Paid Media'],
            category: 'marketing',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: t.projects.project3.title,
            description: t.projects.project3.description,
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
            tags: ['Fintech', 'Data Analysis', 'Performance Marketing'],
            category: 'analytics',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: t.projects.project4.title,
            description: t.projects.project4.description,
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
            tags: ['Data Visualization', 'Corporate Reporting', 'KPIs'],
            category: 'analytics',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: t.projects.project5.title,
            description: t.projects.project5.description,
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop',
            tags: ['SEO/SEM', 'Legal Marketing', 'Digital Strategy'],
            category: 'marketing',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: t.projects.project6.title,
            description: t.projects.project6.description,
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop',
            tags: ['Social Media', 'Content Strategy', 'Analytics'],
            category: 'marketing',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'E-Commerce Platform Redesign',
            description: 'Complete UX/UI redesign and conversion optimization for an online retail platform, increasing conversion rates by 40%.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
            tags: ['UX Design', 'Conversion Optimization', 'E-Commerce'],
            category: 'design',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Customer Journey Mapping',
            description: 'Comprehensive customer journey analysis and touchpoint optimization for B2B SaaS company, reducing churn by 25%.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
            tags: ['CX Strategy', 'Journey Mapping', 'B2B'],
            category: 'strategy',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Brand Identity System',
            description: 'Complete brand identity development including logo, color palette, typography, and brand guidelines for startup.',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
            tags: ['Branding', 'Visual Identity', 'Design System'],
            category: 'design',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Marketing Automation Setup',
            description: 'Implementation of marketing automation workflows and email campaigns, increasing engagement by 60%.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
            tags: ['Marketing Automation', 'Email Marketing', 'CRM'],
            category: 'marketing',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Data-Driven Growth Strategy',
            description: 'Development of growth strategy based on data analysis, identifying key opportunities and optimizing user acquisition channels.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
            tags: ['Growth Strategy', 'Data Analysis', 'User Acquisition'],
            category: 'strategy',
            liveUrl: '#',
            githubUrl: '#',
        },
    ];

    const filters = [
        { key: 'all', label: t.projects.filter.all },
        { key: 'strategy', label: t.projects.filter.strategy },
        { key: 'marketing', label: t.projects.filter.marketing },
        { key: 'analytics', label: t.projects.filter.analytics },
        { key: 'design', label: t.projects.filter.design },
    ];

    const filteredProjects = activeFilter === 'all' 
        ? allProjects 
        : allProjects.filter(project => project.category === activeFilter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black relative overflow-hidden">
            <LanguageSwitcher />
            
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1
                    }}
                    className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
                />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-block mb-6"
                        >
                            <Sparkles className="w-12 h-12 text-emerald-400" />
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-teal-400 mb-6 tracking-tight leading-none"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.05em' }}
                        >
                            {t.projects.title.toUpperCase()}
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        >
                            {t.projects.description}
                        </motion.p>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100px' }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-8 rounded-full"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="sticky top-20 z-40 py-6 mb-12">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="flex items-center justify-center gap-3 flex-wrap bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4">
                            <Filter className="w-5 h-5 text-emerald-400" />
                            {filters.map((filter) => (
                                <motion.button
                                    key={filter.key}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveFilter(filter.key)}
                                    className={`
                                        px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300
                                        ${activeFilter === filter.key 
                                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/50' 
                                            : 'bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-700/50'
                                        }
                                    `}
                                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                                >
                                    {filter.label}
                                </motion.button>
                            ))}
                        </div>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center mt-4 text-zinc-500 text-sm"
                        >
                            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="relative pb-32">
                <div className="container mx-auto px-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                        >
                            {filteredProjects.map((project, index) => {
                                const projectSlug = createProjectSlug(project.title);
                                return (
                                    <motion.div
                                        key={project.title}
                                        variants={itemVariants}
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        className="group relative"
                                    >
                                        <Link to={`/projects/${projectSlug}`}>
                                            <div className="relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 shadow-2xl">
                                                {/* Project Image */}
                                                <div className="relative h-64 overflow-hidden">
                                                    <motion.img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover"
                                                        whileHover={{ scale: 1.1 }}
                                                        transition={{ duration: 0.5 }}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                                                    
                                                    {/* Overlay on hover */}
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        whileHover={{ opacity: 1 }}
                                                        className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm flex items-center justify-center"
                                                    >
                                                        <motion.div
                                                            initial={{ scale: 0 }}
                                                            whileHover={{ scale: 1 }}
                                                            className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
                                                        >
                                                            <span className="text-white font-semibold flex items-center gap-2">
                                                                {t.projects.viewDetails}
                                                                <ArrowRight className="w-5 h-5" />
                                                            </span>
                                                        </motion.div>
                                                    </motion.div>
                                                </div>

                                                {/* Project Content */}
                                                <div className="p-6 space-y-4">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors"
                                                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}
                                                        >
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-zinc-400 leading-relaxed text-sm"
                                                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                                                        >
                                                            {project.description}
                                                        </p>
                                                    </div>
                                                    
                                                    {/* Tags */}
                                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
                                                        {project.tags.map((tag, tagIndex) => (
                                                            <motion.span
                                                                key={tag}
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ delay: index * 0.05 + tagIndex * 0.03 }}
                                                                className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-lg"
                                                            >
                                                                {tag}
                                                            </motion.span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Shine effect */}
                                                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20"
                        >
                            <p className="text-zinc-500 text-lg">No projects found in this category.</p>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Projects;
