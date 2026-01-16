import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../portfolio/LanguageContext';
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
    X,
    Lock,
    CheckCircle2,
    Star,
    ArrowRight,
    FileSpreadsheet,
    FileText,
    Image,
    Sparkles,
    Shield,
    Zap,
    Target,
    Share2,
    Download
} from 'lucide-react';

const typeIcons = {
    template: FileSpreadsheet,
    guide: FileText,
    infographic: Image
};

export default function ResourcePreviewModal({ resource, isOpen, onClose }) {
    const { t, language } = useLanguage();
    if (!resource) return null;
    
    const Icon = typeIcons[resource.type] || FileText;
    
    // Use English content when available and language is English
    const displayTitle = language === 'en' && resource.titleEn ? resource.titleEn : resource.title;
    const displayDescription = language === 'en' && resource.descriptionEn ? resource.descriptionEn : resource.description;
    const displayBenefits = language === 'en' && resource.benefitsEn ? resource.benefitsEn : resource.benefits;
    const displayPreviewContent = language === 'en' && resource.previewContentEn ? resource.previewContentEn : resource.previewContent;

    const handlePurchase = () => {
        window.open('https://www.paypal.me/jeropellicer', '_blank', 'noopener,noreferrer');
    };

    // Share functionality for guides and infographics
    const handleShare = async () => {
        const shareData = {
            title: displayTitle,
            text: displayDescription,
            url: window.location.href
        };

        if (navigator.share && (resource.type === 'guide' || resource.type === 'infographic')) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                // Fallback to clipboard
                copyToClipboard(window.location.href);
            }
        } else {
            // Fallback to clipboard
            copyToClipboard(window.location.href);
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert(language === 'en' ? 'Link copied to clipboard!' : '¡Enlace copiado al portapapeles!');
        });
    };

    // Save functionality for guides and infographics (downloads as bookmark)
    const handleSave = () => {
        const fileName = displayTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const bookmarkContent = `[InternetShortcut]\nURL=${window.location.href}\n`;
        const blob = new Blob([bookmarkContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${fileName}_bookmark.url`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const showShareSaveButtons = resource.type === 'guide' || resource.type === 'infographic';

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[59]"
                    />

                    {/* Modal (centered with fixed flex container) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                    >
                        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto relative">
                            {/* Close button - positioned absolutely on modal */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-slate-100 transition-colors shadow-lg cursor-pointer"
                            >
                                <X className="w-5 h-5 text-slate-600" />
                            </button>

                        {/* Header */}
                        <div className="relative h-48 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 overflow-hidden">
                            {/* Animated background */}
                            <div className="absolute inset-0">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -top-1/2 -right-1/2 w-full h-full opacity-20"
                                    style={{
                                        background: 'conic-gradient(from 0deg, transparent, white, transparent)'
                                    }}
                                />
                            </div>

                            {/* Premium badge */}
                            <div className="absolute top-4 left-4">
                                <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 shadow-lg">
                                    <Star className="w-3 h-3 mr-1 fill-white" />
                                    Premium
                                </Badge>
                            </div>

                            {/* Icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="p-6 bg-white/20 backdrop-blur-sm rounded-3xl"
                                >
                                    <Icon className="w-16 h-16 text-white" />
                                </motion.div>
                            </div>

                            {/* Price tag */}
                            <div className="absolute bottom-4 right-4 bg-white rounded-2xl px-4 py-2 shadow-xl">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-slate-900">
                                        ${resource.price.toFixed(2)}
                                    </span>
                                    <span className="text-sm text-slate-500">USD</span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">
                                {displayTitle}
                            </h2>
                            
                            <p className="text-slate-600 leading-relaxed mb-6">
                                {displayDescription}
                            </p>

                            {/* Preview content */}
                            <div className="mb-6">
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 mb-4">
                                    <Sparkles className="w-5 h-5 text-violet-500" />
                                    {language === 'en' ? 'Content Preview' : 'Vista previa del contenido'}
                                </h3>
                                
                                <div className="relative rounded-2xl border border-slate-200 overflow-hidden">
                                    {/* Preview content (blurred) */}
                                    <div className="p-6 bg-slate-50">
                                        {displayPreviewContent && displayPreviewContent.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-start gap-3 mb-3 last:mb-0"
                                            >
                                                <div className="p-1.5 bg-violet-100 rounded-lg">
                                                    <CheckCircle2 className="w-4 h-4 text-violet-600" />
                                                </div>
                                                <span className="text-sm text-slate-700">{item}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Blur overlay for locked content */}
                                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/95 to-transparent flex items-end justify-center pb-4">
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <Lock className="w-4 h-4" />
                                            <span>{language === 'en' ? 'More content available when you purchase' : 'Más contenido disponible al adquirir'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Benefits */}
                            {displayBenefits && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-slate-900 mb-4">
                                        {language === 'en' ? 'What you get' : 'Lo que obtienes'}
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {displayBenefits.map((benefit, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 + i * 0.05 }}
                                                className="flex items-start gap-2 p-3 bg-emerald-50 rounded-xl"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                                <span className="text-sm text-slate-700">{benefit}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Shield className="w-4 h-4 text-emerald-500" />
                                    <span>{language === 'en' ? 'Secure payment' : 'Pago seguro'}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Zap className="w-4 h-4 text-amber-500" />
                                    <span>{language === 'en' ? 'Instant download' : 'Descarga instantánea'}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Target className="w-4 h-4 text-violet-500" />
                                    <span>{language === 'en' ? 'Unlimited use' : 'Uso ilimitado'}</span>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="space-y-3">
                                {/* Share and Save buttons for guides and infographics */}
                                {showShareSaveButtons && (
                                    <div className="flex gap-3 mb-4">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            onClick={handleShare}
                                            className="flex-1 py-6 border-violet-200 hover:border-violet-300 hover:bg-violet-50"
                                        >
                                            <Share2 className="w-5 h-5 mr-2" />
                                            {language === 'en' ? 'Share' : 'Compartir'}
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            onClick={handleSave}
                                            className="flex-1 py-6 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50"
                                        >
                                            <Download className="w-5 h-5 mr-2" />
                                            {language === 'en' ? 'Save' : 'Guardar'}
                                        </Button>
                                    </div>
                                )}
                                
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button
                                        size="lg"
                                        onClick={handlePurchase}
                                        className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-xl shadow-violet-200 py-6 text-lg group cursor-pointer"
                                    >
                                        <Lock className="w-5 h-5 mr-2 group-hover:hidden" />
                                        <ArrowRight className="w-5 h-5 mr-2 hidden group-hover:block" />
                                        {language === 'en' ? `Get for $${resource.price.toFixed(2)}` : `Obtener por $${resource.price.toFixed(2)}`}
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        onClick={onClose}
                                        className="py-6"
                                    >
                                        {language === 'en' ? 'Keep exploring' : 'Seguir explorando'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}