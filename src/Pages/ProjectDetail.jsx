import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/Components/portfolio/LanguageContext';
import { findProjectBySlug, createProjectSlug } from '../utils/projectUtils';

// Esta función debe ser la misma que en Projects.jsx para mantener consistencia
function getAllProjects(t) {
    return [
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
}

function ProjectDetailContent() {
    const { projectId } = useParams();
    const { t } = useLanguage();
    const navigate = useNavigate();
    
    const allProjects = getAllProjects(t);
    const project = findProjectBySlug(allProjects, projectId);

    if (!project) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">{t.projectDetail.notFound}</h1>
                    <p className="text-slate-600 mb-8">{t.projectDetail.notFoundMessage}</p>
                    <Link 
                        to="/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        {t.projectDetail.backToProjects}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="pt-32 pb-8 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <Link 
                            to="/projects"
                            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            {t.projectDetail.backToProjects}
                        </Link>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                            {project.title}
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Project Image */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="aspect-video overflow-hidden rounded-2xl bg-slate-100"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-12 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white rounded-2xl p-8 border border-slate-200"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t.projectDetail.overview}</h2>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                {project.description}
                            </p>
                            
                            <div className="border-t border-slate-200 pt-8">
                                <h3 className="text-xl font-semibold text-slate-900 mb-4">{t.projectDetail.technologies}</h3>
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        {t.projects.liveDemo || 'View Live Demo'}
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                        {t.projects.source || 'View Source Code'}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default function ProjectDetail() {
    return (
        <LanguageProvider>
            <ProjectDetailContent />
        </LanguageProvider>
    );
}


