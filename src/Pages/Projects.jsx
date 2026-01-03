import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/components/portfolio/LanguageContext';
import LanguageSwitcher from '@/components/portfolio/LanguageSwitcher';
import { Button } from '@/components/ui/button';

function ProjectsPageContent() {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('all');

    const allProjects = [
        {
            title: t.projects.project1.title,
            description: t.projects.project1.description,
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
            tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
            category: 'web',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: t.projects.project2.title,
            description: t.projects.project2.description,
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
            tags: ['Next.js', 'TypeScript', 'MongoDB'],
            category: 'web',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: t.projects.project3.title,
            description: t.projects.project3.description,
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
            tags: ['Python', 'FastAPI', 'React', 'OpenAI'],
            category: 'ai',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: t.projects.project4.title,
            description: t.projects.project4.description,
            image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
            tags: ['React Native', 'Firebase', 'Redux'],
            category: 'mobile',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: t.projects.project5.title,
            description: t.projects.project5.description,
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
            tags: ['Vue.js', 'Django', 'PostgreSQL'],
            category: 'web',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: t.projects.project6.title,
            description: t.projects.project6.description,
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
            tags: ['React', 'GraphQL', 'Node.js'],
            category: 'web',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Weather App',
            description: 'Beautiful weather forecast application with location-based predictions and interactive maps.',
            image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
            tags: ['React', 'Weather API', 'Maps'],
            category: 'web',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Portfolio CMS',
            description: 'Content management system specifically designed for creatives to showcase their work beautifully.',
            image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop',
            tags: ['Next.js', 'Sanity', 'TailwindCSS'],
            category: 'web',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Expense Tracker',
            description: 'Personal finance management app with budget tracking, expense categorization, and visual reports.',
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
            tags: ['Flutter', 'SQLite', 'Charts'],
            category: 'mobile',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Recipe Finder',
            description: 'Discover new recipes based on ingredients you have at home with AI-powered suggestions.',
            image: 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&h=600&fit=crop',
            tags: ['React', 'AI', 'Recipe API'],
            category: 'ai',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Language Learning App',
            description: 'Interactive language learning platform with gamification, progress tracking, and speech recognition.',
            image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop',
            tags: ['React Native', 'Speech API', 'Gamification'],
            category: 'mobile',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Markdown Editor',
            description: 'Clean and distraction-free markdown editor with live preview and export to multiple formats.',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
            tags: ['Electron', 'React', 'Markdown'],
            category: 'other',
            liveUrl: '#',
            githubUrl: '#',
        },
    ];

    const filters = [
        { key: 'all', label: t.projects.filter.all },
        { key: 'web', label: t.projects.filter.web },
        { key: 'mobile', label: t.projects.filter.mobile },
        { key: 'ai', label: t.projects.filter.ai },
        { key: 'other', label: t.projects.filter.other },
    ];

    const filteredProjects = activeFilter === 'all' 
        ? allProjects 
        : allProjects.filter(project => project.category === activeFilter);

    return (
        <div className="min-h-screen bg-white">
            <LanguageSwitcher />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-slate-500 font-medium tracking-wide text-sm uppercase">
                                {t.projects.title}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">
                                {t.projects.filter.all}
                            </h1>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {t.projects.description}
                            </p>
                            <div className="w-20 h-1 bg-slate-900 mx-auto mt-8" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-40">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-center gap-2 flex-wrap">
                            <Filter className="w-4 h-4 text-slate-400 mr-2" />
                            {filters.map((filter) => (
                                <Button
                                    key={filter.key}
                                    onClick={() => setActiveFilter(filter.key)}
                                    variant={activeFilter === filter.key ? 'default' : 'outline'}
                                    className={`
                                        ${activeFilter === filter.key 
                                            ? 'bg-slate-900 text-white hover:bg-slate-800' 
                                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-900'
                                        } transition-all duration-300
                                    `}
                                >
                                    {filter.label}
                                </Button>
                            ))}
                        </div>
                        <div className="text-center mt-4">
                            <p className="text-sm text-slate-500">
                                {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div 
                            layout
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group bg-white border border-slate-200 hover:border-slate-900 transition-all duration-300"
                                >
                                    {/* Project Image */}
                                    <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                            <a
                                                href={project.liveUrl}
                                                onClick={(e) => e.stopPropagation()}
                                                className="p-3 bg-white text-slate-900 hover:bg-slate-100 transition-colors"
                                                aria-label="View live demo"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                onClick={(e) => e.stopPropagation()}
                                                className="p-3 bg-white text-slate-900 hover:bg-slate-100 transition-colors"
                                                aria-label="View source code"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                    
                                    {/* Project Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                            {project.description}
                                        </p>
                                        
                                        {/* Technology Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        {/* Links */}
                                        <div className="flex gap-4 pt-4 border-t border-slate-100">
                                            <a
                                                href={project.liveUrl}
                                                className="flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                {t.projects.liveDemo}
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                className="flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                                {t.projects.source}
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Empty State */}
                        {filteredProjects.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20"
                            >
                                <p className="text-slate-500 text-lg">No projects found in this category.</p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default function Projects() {
    return (
        <LanguageProvider>
            <ProjectsPageContent />
        </LanguageProvider>
    );
}
