import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../portfolio/LanguageContext';
import { Button } from "../ui/button";
import {
    X,
    Clock,
    Mail,
    CreditCard,
    CheckCircle2,
    Shield,
    Zap,
    ExternalLink
} from 'lucide-react';

const PAYPAL_EMAIL = "jerohpellibj@gmail.com";
const PAYPAL_LINK = "https://www.paypal.me/jeropellicer";

export default function PaymentModal({ resource, isOpen, onClose }) {
    const { t } = useLanguage();
    if (!resource) return null;


    const openPayPal = () => {
        window.open(PAYPAL_LINK, '_blank', 'noopener,noreferrer');
    };

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
                        className="fixed inset-0 bg-slate-900/70 backdrop-blur-md z-50"
                    />

                    {/* Modal (centered with fixed flex container) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4"
                    >
                        <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">
                        {/* Header gradient */}
                        <div className="relative h-32 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 overflow-visible">
                            {/* Premium/Exclusive badge */}
                            <div className="absolute top-3 left-3 z-10">
                                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-semibold px-2.5 py-1 shadow-md">Premium</span>
                            </div>
                            {/* Animated pattern */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 opacity-20"
                                style={{
                                    background: 'radial-gradient(circle at 50% 50%, white 0%, transparent 50%)'
                                }}
                            />
                            
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>

                            {/* Icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl"
                                >
                                    <CreditCard className="w-10 h-10 text-white" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {/* Product info */}
                            <div className="text-center mb-6">
                                <h2 className="text-xl font-bold text-slate-900 mb-2">
                                    Acceso Exclusivo: Plantilla Pro de RRSS
                                </h2>
                                <div className="inline-flex items-baseline gap-1 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                                    <span className="text-4xl font-bold">
                                        ${resource.price.toFixed(2)}
                                    </span>
                                    <span className="text-lg">USD</span>
                                </div>
                            </div>

                            {/* PayPal section */}
                            <div className="bg-slate-50 rounded-2xl p-5 mb-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-100 rounded-xl">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#003087">
                                            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.641.641 0 0 1 .633-.548h7.394c2.36 0 4.104.667 5.183 1.981.508.614.84 1.313.992 2.082.157.793.15 1.738-.02 2.81l-.008.044v.038c-.314 2.04-1.297 3.631-2.924 4.732-1.575 1.065-3.63 1.605-6.11 1.605h-1.48a.8.8 0 0 0-.79.676l-.92 5.836a.641.641 0 0 1-.633.548h-1.18z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Pago via PayPal</p>
                                        <p className="text-sm text-slate-500">Rápido y seguro</p>
                                    </div>
                                </div>

                                <Button
                                    onClick={openPayPal}
                                    className="w-full text-white py-5 md:py-6 text-base md:text-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg shadow-emerald-200/40"
                                >
                                    <ExternalLink className="w-5 h-5 mr-2" />
                                    {t.resources.ctas.obtain}
                                </Button>
                            </div>

                            {/* Delivery time notice */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 mb-6"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-amber-100 rounded-xl">
                                        <Clock className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-amber-800 mb-1">
                                            Entrega en menos de 59 minutos
                                        </p>
                                        <p className="text-sm text-amber-700">
                                            Una vez realizado el pago, comunícate con nosotros y 
                                            recibirás el recurso en tu casilla de correo electrónico 
                                            en los próximos <span className="font-bold">59 minutos</span>.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Instructions */}
                            <div className="space-y-3 mb-6">
                                <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    Pasos para obtener tu recurso:
                                </h3>
                                <ol className="space-y-2 text-sm text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <span className="flex-shrink-0 w-6 h-6 bg-violet-100 text-violet-700 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                                        <span>Paga con PayPal</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="flex-shrink-0 w-6 h-6 bg-violet-100 text-violet-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                                        <span>Envía confirmación</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="flex-shrink-0 w-6 h-6 bg-violet-100 text-violet-700 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                                        <span>Recibe tu archivo</span>
                                    </li>
                                </ol>
                            </div>

                            {/* Trust badges */}
                            <div className="flex justify-center gap-6 pt-4 border-t border-slate-100">
                                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                    <Shield className="w-4 h-4 text-emerald-500" />
                                    <span>Pago seguro</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                    <Zap className="w-4 h-4 text-amber-500" />
                                    <span>Entrega rápida</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                    <Mail className="w-4 h-4 text-violet-500" />
                                    <span>Soporte incluido</span>
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