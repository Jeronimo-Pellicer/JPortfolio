import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileSpreadsheet, FileText, Image } from 'lucide-react';
import { useLanguage } from '../Components/portfolio/LanguageContext';
import { useSearchParams } from 'react-router-dom';

import Prism from '../Components/resources/Prism';
import ResourceHero from '../Components/resources/ResourceHero';
import ResourceFilter from '../Components/resources/ResourceFilter';
import ResourceSection from '../Components/resources/ResourceSection';
import ResourcePreviewModal from '../Components/resources/ResourcePreviewModal';
import PaymentModal from '../Components/resources/PaymentModal';
import ResourceCTA from '../Components/resources/ResourceCTA';
import ResourceFAQ from '../Components/resources/ResourceFAQ';
import ResourceArticle from '../Components/resources/ResourceArticle';
import AnimatedDivider from '../Components/resources/AnimatedDivider';
import { resourcesData } from '../data/resourcesData';


export default function Resources() {
    const { t, language } = useLanguage();
    const [searchParams] = useSearchParams();
    const [activeFilter, setActiveFilter] = useState('all');

    const [selectedResource, setSelectedResource] = useState(null);

    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const [isPaymentOpen, setIsPaymentOpen] = useState(false);

    const [selectedArticleId, setSelectedArticleId] = useState(null);

    // Handle direct navigation from menu links
    useEffect(() => {
        const articleParam = searchParams.get('article');
        const filterParam = searchParams.get('filter');
        
        if (articleParam) {
            setSelectedArticleId(articleParam);
        }
        
        if (filterParam && ['template', 'guide', 'infographic', 'all'].includes(filterParam)) {
            setActiveFilter(filterParam);
        }
    }, [searchParams]);

    const filteredResources = useMemo(() => {

        if (activeFilter === 'all') return resourcesData;

        return resourcesData.filter(r => r.type === activeFilter);

    }, [activeFilter, language]);



    const templates = filteredResources.filter(r => r.type === 'template');
    const guides = filteredResources.filter(r => r.type === 'guide');
    const infographics = filteredResources.filter(r => r.type === 'infographic');

    const handlePreview = (resource) => {

        setSelectedResource(resource);

        setIsPreviewOpen(true);

    };



    const handlePurchase = (resource) => {

        setSelectedResource(resource);

        setIsPaymentOpen(true);

    };



    const handleReadArticle = (resource) => {

        setSelectedArticleId(resource.id);

        window.scrollTo({ top: 0, behavior: 'smooth' });

    };



    const handleBackToResources = () => {

        setSelectedArticleId(null);

    };



    return (

        <div className="bg-slate-950 relative overflow-x-hidden">

            {/* Prism Background - Fixed */}

            <div className="fixed inset-0 z-0 pointer-events-none">

                <Prism

                    height={3.5}

                    baseWidth={5.5}

                    animationType="rotate"

                    glow={0.8}

                    noise={0.3}

                    transparent={true}

                    scale={3.6}

                    hueShift={0.5}

                    colorFrequency={1}

                    bloom={0.8}

                    timeScale={0.3}

                />

                {/* Overlay para mejorar legibilidad */}

                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/90" />

            </div>

            

            {/* Content */}

            <div className="relative z-10">

                <AnimatePresence mode="wait">

                    {selectedArticleId ? (

                        <motion.div

                            key="article"

                            initial={{ opacity: 0, y: 20 }}

                            animate={{ opacity: 1, y: 0 }}

                            exit={{ opacity: 0, y: -20 }}

                            className="py-12"

                        >

                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                                <ResourceArticle

                                    resourceId={selectedArticleId}

                                    onBack={handleBackToResources}

                                />

                            </div>

                        </motion.div>

                    ) : (

                        <motion.div

                            key="resources"

                            initial={{ opacity: 0 }}

                            animate={{ opacity: 1 }}

                            exit={{ opacity: 0 }}

                        >

                            {/* Hero Section */}

                            <ResourceHero key={`hero-${language}`} />

                            {/* Animated Divider */}
                            <AnimatedDivider />

                            {/* Main Content - Max-width 1200px centrado */}

                            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">

                                {/* Filters */}

                                <ResourceFilter 

                                    key={`filter-${language}`}

                                    activeFilter={activeFilter} 

                                    onFilterChange={setActiveFilter} 

                                />



                                {/* Resources Sections */}

                                <div className="space-y-12 sm:space-y-16 lg:space-y-20">

                                    {templates.length > 0 && (

                                        <ResourceSection

                                            key={`templates-${language}`}

                                            id="templates"

                                            title={t.resources.sections.templates.title}

                                            subtitle={t.resources.sections.templates.subtitle}

                                            icon={FileSpreadsheet}

                                            resources={templates}

                                            onPreview={handlePreview}

                                            onPurchase={handlePurchase}

                                            onReadArticle={handleReadArticle}

                                        />

                                    )}



                                    {guides.length > 0 && (

                                        <ResourceSection

                                            key={`guides-${language}`}

                                            id="guides"

                                            title={t.resources.sections.guides.title}

                                            subtitle={t.resources.sections.guides.subtitle}

                                            icon={FileText}

                                            resources={guides}

                                            onPreview={handlePreview}

                                            onPurchase={handlePurchase}

                                            onReadArticle={handleReadArticle}

                                        />

                                    )}



                                    {infographics.length > 0 && (

                                        <ResourceSection

                                            key={`infographics-${language}`}

                                            id="infographics"

                                            title={t.resources.sections.infographics.title}

                                            subtitle={t.resources.sections.infographics.subtitle}

                                            icon={Image}

                                            resources={infographics}

                                            onPreview={handlePreview}

                                            onPurchase={handlePurchase}

                                            onReadArticle={handleReadArticle}

                                        />

                                    )}

                                </div>

                            </main>



                            {/* FAQ Section */}

                            <ResourceFAQ />



                            {/* CTA Section */}

                            <ResourceCTA />

                        </motion.div>

                    )}

                </AnimatePresence>

            </div>



            {/* Preview Modal */}

            <ResourcePreviewModal

                resource={selectedResource}

                isOpen={isPreviewOpen}

                onClose={() => {

                    setIsPreviewOpen(false);

                    setSelectedResource(null);

                }}

            />



            {/* Payment Modal */}

            <PaymentModal

                resource={selectedResource}

                isOpen={isPaymentOpen}

                onClose={() => {

                    setIsPaymentOpen(false);

                    setSelectedResource(null);

                }}

            />

        </div>

    );

}




