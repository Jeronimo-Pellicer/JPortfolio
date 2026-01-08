import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Mail, CreditCard, FileDown, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../Components/portfolio/LanguageContext';
import LanguageSwitcher from '../Components/portfolio/LanguageSwitcher';

export default function Recursos() {
    const { t } = useLanguage();
    const [email, setEmail] = useState('');
    const [showPaywall, setShowPaywall] = useState(null);

    const handlePaywall = (itemName) => {
        const paypalEmail = 'jerohpellibj@gmail.com';
        const paypalUsername = '@jeropellicer';
        const emailToSend = 'pellicerjeronimo@gmail.com';
        
        setShowPaywall({
            itemName,
            paypalEmail,
            paypalUsername,
            emailToSend,
        });
    };

    const handleEmailSubmit = (itemName, requiresEmail) => {
        if (requiresEmail && !email) {
            alert('Por favor ingresa tu email');
            return;
        }
        // Direct download for free items
        if (!requiresEmail) {
            downloadResource(itemName);
            return;
        }
        // In a real implementation, this would send email and provide download
        alert(`Gracias! El recurso "${itemName}" será enviado a ${email || 'tu email registrado'}`);
        setEmail('');
    };

    const downloadResource = (itemName) => {
        // Generate a generic download (this is a placeholder - in real app you'd have actual files)
        const link = document.createElement('a');
        link.href = '#'; // You would replace this with actual file URLs
        link.download = `${itemName}.xlsx`; // Adjust extension based on resource type
        // In production, you would fetch the actual file URL from your server
        alert(`Descargando: ${itemName}`);
    };

    const templates = [
        {
            name: 'Template de Customer Journey Map',
            format: 'Excel/Google Sheets',
            free: true,
            icon: FileText,
        },
        {
            name: 'Kit completo de Análisis FODA',
            format: 'Excel con instrucciones',
            free: true,
            icon: FileText,
        },
        {
            name: 'Template de Calendario de Contenidos para RRSS',
            format: 'Excel/Sheets',
            free: false,
            icon: FileText,
        },
        {
            name: 'Plantilla para medir NPS y Satisfacción del Cliente',
            format: 'Excel con fórmulas',
            free: false,
            icon: FileText,
        },
        {
            name: 'Template de Estrategia de Contenido',
            format: 'Google Docs',
            free: false,
            icon: FileText,
        },
    ];

    const guides = [
        {
            name: 'Cómo crear un Customer Journey Map en 5 pasos',
            pages: '4-6 páginas',
            free: true,
            icon: FileDown,
        },
        {
            name: 'Guía de SEO local para negocios de servicios',
            pages: '6-8 páginas',
            free: true,
            icon: FileDown,
        },
        {
            name: 'Estrategia de contenido en LinkedIn para profesionales',
            pages: 'PDF',
            free: true,
            icon: FileDown,
        },
        {
            name: '10 métricas clave de experiencia del cliente y cómo interpretarlas',
            pages: 'PDF',
            free: false,
            icon: FileDown,
        },
    ];

    const infographics = [
        {
            name: 'Anatomía de un buen post en LinkedIn/Instagram',
            icon: ImageIcon,
        },
        {
            name: 'Proceso de optimización de atención al cliente en 6 etapas',
            icon: ImageIcon,
        },
        {
            name: 'Palabras clave: cómo encontrarlas y usarlas',
            icon: ImageIcon,
        },
        {
            name: 'Elementos clave de una landing page que convierte',
            icon: ImageIcon,
        },
    ];

    return (
        <div className="min-h-screen bg-zinc-950 relative">
            <LanguageSwitcher />
            
            <div className="container mx-auto px-6 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            {t.resources?.heading || 'RECURSOS'}
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                            {t.resources?.description || 'Templates, guías e infografías para potenciar tu estrategia digital.'}
                        </p>
                    </div>

                    {/* Templates Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                            <FileText className="w-8 h-8 text-emerald-400" />
                            {t.resources?.templates || 'TEMPLATES'}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {templates.map((template, index) => (
                                <motion.div
                                    key={template.name}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-6 hover:border-emerald-500/50 transition-all duration-500"
                                >
                                    <template.icon className="w-10 h-10 text-emerald-400 mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">{template.name}</h3>
                                    <p className="text-zinc-400 text-sm mb-4">{template.format}</p>
                                    {template.free ? (
                                        <button
                                            onClick={() => downloadResource(template.name)}
                                            className="w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-xl hover:from-emerald-400 hover:to-teal-400 transition-all flex items-center justify-center gap-2"
                                        >
                                            <Download className="w-4 h-4" />
                                            Descargar Gratis
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handlePaywall(template.name)}
                                            className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 text-white font-medium rounded-xl hover:border-emerald-500/50 transition-all flex items-center justify-center gap-2"
                                        >
                                            <CreditCard className="w-4 h-4" />
                                            Ver Precio
                                        </button>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Guides Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                            <FileDown className="w-8 h-8 text-emerald-400" />
                            {t.resources?.guides || 'GUÍAS EN PDF'}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {guides.map((guide, index) => (
                                <motion.div
                                    key={guide.name}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-6 hover:border-emerald-500/50 transition-all duration-500"
                                >
                                    <guide.icon className="w-10 h-10 text-emerald-400 mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">{guide.name}</h3>
                                    <p className="text-zinc-400 text-sm mb-4">{guide.pages}</p>
                                    {guide.free ? (
                                        <button
                                            onClick={() => downloadResource(guide.name)}
                                            className="w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-xl hover:from-emerald-400 hover:to-teal-400 transition-all flex items-center justify-center gap-2"
                                        >
                                            <Download className="w-4 h-4" />
                                            Descargar Gratis
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handlePaywall(guide.name)}
                                            className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 text-white font-medium rounded-xl hover:border-emerald-500/50 transition-all flex items-center justify-center gap-2"
                                        >
                                            <CreditCard className="w-4 h-4" />
                                            Ver Precio
                                        </button>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Infographics Section */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                            <ImageIcon className="w-8 h-8 text-emerald-400" />
                            {t.resources?.infographics || 'INFOGRAFÍAS'}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {infographics.map((infographic, index) => (
                                <motion.div
                                    key={infographic.name}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-6 hover:border-emerald-500/50 transition-all duration-500"
                                >
                                    <infographic.icon className="w-10 h-10 text-emerald-400 mb-4" />
                                    <h3 className="text-lg font-bold text-white mb-4">{infographic.name}</h3>
                                    <button
                                        onClick={() => handleEmailSubmit(infographic.name, false)}
                                        className="w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-xl hover:from-emerald-400 hover:to-teal-400 transition-all flex items-center justify-center gap-2"
                                    >
                                        <Download className="w-4 h-4" />
                                        Descargar
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Paywall Modal */}
                    {showPaywall && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                            onClick={() => setShowPaywall(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 max-w-md w-full"
                            >
                                <h3 className="text-2xl font-bold text-white mb-4">{showPaywall.itemName}</h3>
                                <div className="space-y-4 text-zinc-400 mb-6">
                                    <p>Para acceder a este recurso premium:</p>
                                    <div className="bg-zinc-800/50 rounded-xl p-4">
                                        <p className="text-white font-semibold mb-2">PayPal:</p>
                                        <p>{showPaywall.paypalEmail}</p>
                                        <p>{showPaywall.paypalUsername}</p>
                                    </div>
                                    <p>Luego envía la captura de la transferencia a:</p>
                                    <p className="text-emerald-400">{showPaywall.emailToSend}</p>
                                </div>
                                <button
                                    onClick={() => setShowPaywall(null)}
                                    className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-xl hover:from-emerald-400 hover:to-teal-400 transition-all"
                                >
                                    Entendido
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
