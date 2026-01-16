import React from 'react';
import { motion } from 'framer-motion';
import ResourceCard from './ResourceCard';

export default function ResourceSection({ title, subtitle, icon: Icon, resources, onPreview, onPurchase, onReadArticle, id }) {
    if (resources.length === 0) return null;

    return (
        <section id={id} className="scroll-mt-20">
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <div className="flex items-center gap-3 mb-3">
                    {Icon && (
                        <div className="p-2.5 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl shadow-lg shadow-violet-500/20">
                            <Icon className="w-5 h-5 text-white" />
                        </div>
                    )}
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                        {title}
                    </h2>
                </div>
                {subtitle && (
                    <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </motion.div>

            {/* Grid - Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {resources.map((resource, index) => (
                    <ResourceCard
                        key={`${resource.id}`}
                        resource={resource}
                        index={index}
                        onPreview={onPreview}
                        onPurchase={onPurchase}
                        onReadArticle={onReadArticle}
                    />
                ))}
            </div>
        </section>
    );
}