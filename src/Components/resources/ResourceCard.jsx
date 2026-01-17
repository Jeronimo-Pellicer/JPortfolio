import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../portfolio/LanguageContext';
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { 
    Eye, 
    FileSpreadsheet, 
    FileText, 
    Image,
    CheckCircle2,
    Sparkles,
    Star
} from 'lucide-react';
import DownloadButton from './DownloadButton';

const typeIcons = {
    template: FileSpreadsheet,
    guide: FileText,
    infographic: Image
};

const typeColors = {
    template: 'from-emerald-500 to-teal-600',
    guide: 'from-blue-500 to-indigo-600',
    infographic: 'from-pink-500 to-rose-600'
};

const typeBadgeColors = {
    template: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    guide: 'bg-blue-100 text-blue-700 border-blue-200',
    infographic: 'bg-pink-100 text-pink-700 border-pink-200'
};

export default function ResourceCard({ resource, index, onPreview, onPurchase, onReadArticle }) {
    const { t, language } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);
    const Icon = typeIcons[resource.type] || FileText;
    const isTemplate = resource.type === 'template';
    const isFree = resource.price === 0;
    const isPremium = resource.price > 0;

    // Use English title if available and language is English
    const displayTitle = language === 'en' && resource.titleEn ? resource.titleEn : resource.title;
    const displayDescription = language === 'en' && resource.descriptionEn ? resource.descriptionEn : resource.description;
    const displayBenefits = language === 'en' && resource.benefitsEn ? resource.benefitsEn : resource.benefits;
    const displaySeoReason = language === 'en' && resource.seoReasonEn ? resource.seoReasonEn : resource.seoReason;

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative h-full"
        >
            <div className="relative h-full bg-white rounded-3xl border border-slate-200/80 overflow-hidden transition-all duration-500 hover:border-violet-200 hover:shadow-2xl hover:shadow-violet-100/50">
                {/* Premium indicator removed (will show centered badge in header) */}

                {/* Header gradient */}
                <div className={`relative h-32 bg-gradient-to-br ${typeColors[resource.type]} overflow-hidden`}>
                    <motion.div 
                        className="absolute inset-0 bg-black/10"
                        animate={{ opacity: isHovered ? 0 : 0.1 }}
                    />
                    
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-20">
                        <motion.div
                            animate={{ 
                                backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%'
                            }}
                            transition={{ duration: 3, ease: "linear" }}
                            className="w-full h-full"
                            style={{
                                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                                backgroundSize: '20px 20px'
                            }}
                        />
                    </div>

                    {/* Premium badge - Top Right Corner */}
                    {isPremium && (
                        <div className="absolute top-3 right-4 z-10">
                            <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 shadow-xl px-3 py-1">
                                <Star className="w-3 h-3 mr-1 fill-white" />
                                {t.resources.badges.premium}
                            </Badge>
                        </div>
                    )}

                    {/* Centered icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            animate={{ 
                                scale: isHovered ? 1.1 : 1,
                                y: isHovered ? -5 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl"
                        >
                            <Icon className="w-10 h-10 text-white" />
                        </motion.div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-[calc(100%-8rem)]">
                    {/* Type badge */}
                    <Badge className={`w-fit mb-3 ${typeBadgeColors[resource.type]} border text-xs`}>
                        {resource.type === 'template' && (language === 'en' ? 'Template' : 'Template')}
                        {resource.type === 'guide' && (language === 'en' ? 'Guide' : 'Guía')}
                        {resource.type === 'infographic' && (language === 'en' ? 'Infographic' : 'Infografía')}
                    </Badge>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 line-clamp-2 group-hover:text-violet-700 transition-colors">
                        {displayTitle}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 line-clamp-3 flex-grow">
                        {displayDescription}
                    </p>

                    {/* Benefits */}
                    {displayBenefits && displayBenefits.length > 0 && (
                        <div className="mb-5 space-y-2">
                            {displayBenefits.slice(0, 3).map((benefit, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex items-start gap-2"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs text-slate-600">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* SEO reason */}
                    {displaySeoReason && (
                        <div className="mb-5 p-3 bg-violet-50/50 rounded-xl border border-violet-100">
                            <div className="flex items-start gap-2">
                                <Sparkles className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-xs font-medium text-violet-700 mb-1">{t.resources.labels.whyNeedIt}</p>
                                    <p className="text-xs text-slate-600 leading-relaxed">{displaySeoReason}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer */}
                    <div className="mt-auto pt-4 border-t border-slate-100">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            {/* Price */}
                            <div>
                                {isFree ? (
                                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold">
                                        <span className="text-lg">{t.resources.labels.free}</span>
                                    </span>
                                ) : (
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl font-bold text-slate-900">
                                            ${resource.price.toFixed(2)}
                                        </span>
                                        <span className="text-xs text-slate-500">USD</span>
                                    </div>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto sm:justify-end">
                                {isTemplate ? (
                                    isPremium ? (
                                        <>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => onPreview(resource)}
                                                className="text-violet-600 hover:text-violet-700 hover:bg-violet-50 w-full sm:w-auto min-h-[44px]"
                                            >
                                                <Eye className="w-4 h-4 mr-1.5" />
                                                {t.resources.ctas.preview}
                                            </Button>
                                            <DownloadButton 
                                                resource={resource} 
                                                onPurchase={onPurchase}
                                                size="sm"
                                                className="w-full sm:w-auto min-h-[44px]"
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <DownloadButton 
                                                resource={resource} 
                                                onPurchase={onPurchase}
                                                size="sm"
                                                labelFree={t.resources.ctas.getFree}
                                                className="w-full sm:w-auto min-h-[44px]"
                                            />
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => onPreview && onPreview(resource)}
                                                className="border-emerald-100 text-emerald-700 hover:bg-emerald-50 w-full sm:w-auto min-h-[44px]"
                                            >
                                                <Eye className="w-4 h-4 mr-1.5" />
                                                {t.resources.ctas.viewDetails}
                                            </Button>
                                        </>
                                    )
                                ) : (
                                    <>
                                        {isPremium && (
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => onPreview(resource)}
                                                className="text-violet-600 hover:text-violet-700 hover:bg-violet-50 w-full sm:w-auto min-h-[44px]"
                                            >
                                                <Eye className="w-4 h-4 mr-1.5" />
                                                {t.resources.ctas.preview}
                                            </Button>
                                        )}
                                        {isFree ? (
                                            <Button
                                                size="sm"
                                                onClick={() => onReadArticle && onReadArticle(resource)}
                                                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg w-full sm:w-auto min-h-[44px]"
                                            >
                                                {resource.type === 'infographic' ? t.resources.ctas.readInfographic : t.resources.ctas.readArticle}
                                            </Button>
                                        ) : (
                                            <DownloadButton 
                                                resource={resource} 
                                                onPurchase={onPurchase}
                                                size="sm"
                                                className="w-full sm:w-auto min-h-[44px]"
                                            />
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                        boxShadow: isHovered 
                            ? 'inset 0 0 60px rgba(139, 92, 246, 0.05)' 
                            : 'inset 0 0 0 rgba(139, 92, 246, 0)'
                    }}
                />
            </div>
        </motion.article>
    );
}
