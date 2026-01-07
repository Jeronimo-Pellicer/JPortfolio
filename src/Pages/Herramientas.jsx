import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, User, Grid3x3, HelpCircle, Download, Mail, CreditCard } from 'lucide-react';
import { useLanguage } from '../Components/portfolio/LanguageContext';
import LanguageSwitcher from '../Components/portfolio/LanguageSwitcher';

export default function Herramientas() {
    const { t } = useLanguage();
    
    // ROI Calculator State
    const [roiData, setRoiData] = useState({
        investment: '',
        conversions: '',
        valuePerConversion: '',
    });
    const [roiResults, setRoiResults] = useState(null);

    // Buyer Persona State
    const [personaData, setPersonaData] = useState({
        name: '',
        age: '',
        profession: '',
        goals: '',
        challenges: '',
        preferences: '',
    });

    // Prioritization Matrix State
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Task 1', impact: 3, effort: 2, x: 50, y: 50 },
    ]);

    // Quiz State
    const [quizAnswers, setQuizAnswers] = useState({});
    const [quizScore, setQuizScore] = useState(null);

    const calculateROI = () => {
        const inv = parseFloat(roiData.investment);
        const conv = parseFloat(roiData.conversions);
        const val = parseFloat(roiData.valuePerConversion);
        
        if (inv && conv && val) {
            const revenue = conv * val;
            const roi = ((revenue - inv) / inv) * 100;
            const cpa = inv / conv;
            const projection = revenue * 1.2; // 20% growth projection
            
            setRoiResults({ roi, cpa, projection, revenue });
        }
    };

    const generatePersonaPDF = () => {
        // In a real implementation, this would generate a PDF
        alert('PDF generation would be implemented here. For now, please send an email to pellicerjeronimo@gmail.com');
    };

    const handlePaywall = (itemName) => {
        const paypalEmail = 'jerohpellibj@gmail.com';
        const paypalUsername = '@jeropellicer';
        const emailToSend = 'pellicerjeronimo@gmail.com';
        
        alert(`${itemName}\n\nPara acceder, envía una transferencia a:\nPayPal: ${paypalEmail} ${paypalUsername}\n\nLuego envía la captura de la transferencia a: ${emailToSend}`);
    };

    const tools = [
        {
            id: 'roi',
            icon: Calculator,
            title: t.tools?.roi?.title || 'Calculadora de ROI para Campañas Digitales',
            description: t.tools?.roi?.description || 'Calcula el retorno de inversión, CPA y proyecciones para tus campañas digitales.',
        },
        {
            id: 'persona',
            icon: User,
            title: t.tools?.persona?.title || 'Generador de Buyer Persona',
            description: t.tools?.persona?.description || 'Crea perfiles detallados de buyer persona y genera PDFs descargables.',
        },
        {
            id: 'matrix',
            icon: Grid3x3,
            title: t.tools?.matrix?.title || 'Matriz de Priorización (Impacto vs Esfuerzo)',
            description: t.tools?.matrix?.description || 'Organiza tareas en una matriz visual de impacto vs esfuerzo.',
        },
        {
            id: 'quiz',
            icon: HelpCircle,
            title: t.tools?.quiz?.title || 'Quiz: ¿Qué tan optimizada está tu estrategia digital?',
            description: t.tools?.quiz?.description || 'Evalúa tu estrategia digital con 8-10 preguntas y obtén recomendaciones personalizadas.',
        },
    ];

    const [activeTool, setActiveTool] = useState(null);

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
                            {t.tools?.heading || 'HERRAMIENTAS'}
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                            {t.tools?.description || 'Herramientas profesionales para optimizar tus estrategias digitales y de marketing.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                onClick={() => setActiveTool(activeTool === tool.id ? null : tool.id)}
                                className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 cursor-pointer hover:border-emerald-500/50 transition-all duration-500"
                            >
                                <tool.icon className="w-12 h-12 text-emerald-400 mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-3">{tool.title}</h3>
                                <p className="text-zinc-400">{tool.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* ROI Calculator */}
                    {activeTool === 'roi' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 mb-8"
                        >
                            <h3 className="text-3xl font-bold text-white mb-6">Calculadora de ROI</h3>
                            <div className="grid md:grid-cols-3 gap-6 mb-6">
                                <div>
                                    <label className="block text-zinc-400 mb-2">Inversión</label>
                                    <input
                                        type="number"
                                        value={roiData.investment}
                                        onChange={(e) => setRoiData({ ...roiData, investment: e.target.value })}
                                        className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                        placeholder="$0.00"
                                    />
                                </div>
                                <div>
                                    <label className="block text-zinc-400 mb-2">Conversiones</label>
                                    <input
                                        type="number"
                                        value={roiData.conversions}
                                        onChange={(e) => setRoiData({ ...roiData, conversions: e.target.value })}
                                        className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                        placeholder="0"
                                    />
                                </div>
                                <div>
                                    <label className="block text-zinc-400 mb-2">Valor por Conversión</label>
                                    <input
                                        type="number"
                                        value={roiData.valuePerConversion}
                                        onChange={(e) => setRoiData({ ...roiData, valuePerConversion: e.target.value })}
                                        className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                        placeholder="$0.00"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={calculateROI}
                                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-xl hover:from-emerald-400 hover:to-teal-400 transition-all"
                            >
                                Calcular ROI
                            </button>
                            
                            {roiResults && (
                                <div className="mt-8 grid md:grid-cols-3 gap-6">
                                    <div className="bg-zinc-800/50 rounded-xl p-6">
                                        <p className="text-zinc-400 mb-2">ROI</p>
                                        <p className="text-3xl font-bold text-emerald-400">{roiResults.roi.toFixed(2)}%</p>
                                    </div>
                                    <div className="bg-zinc-800/50 rounded-xl p-6">
                                        <p className="text-zinc-400 mb-2">CPA</p>
                                        <p className="text-3xl font-bold text-emerald-400">${roiResults.cpa.toFixed(2)}</p>
                                    </div>
                                    <div className="bg-zinc-800/50 rounded-xl p-6">
                                        <p className="text-zinc-400 mb-2">Proyección</p>
                                        <p className="text-3xl font-bold text-emerald-400">${roiResults.projection.toFixed(2)}</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}

                    {/* Buyer Persona Generator */}
                    {activeTool === 'persona' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 mb-8"
                        >
                            <h3 className="text-3xl font-bold text-white mb-6">Generador de Buyer Persona</h3>
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                {Object.keys(personaData).map((key) => (
                                    <div key={key}>
                                        <label className="block text-zinc-400 mb-2 capitalize">{key}</label>
                                        <input
                                            type="text"
                                            value={personaData[key]}
                                            onChange={(e) => setPersonaData({ ...personaData, [key]: e.target.value })}
                                            className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                        />
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={generatePersonaPDF}
                                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-xl hover:from-emerald-400 hover:to-teal-400 transition-all flex items-center gap-2"
                            >
                                <Download className="w-5 h-5" />
                                Generar PDF
                            </button>
                        </motion.div>
                    )}

                    {/* Prioritization Matrix */}
                    {activeTool === 'matrix' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 mb-8"
                        >
                            <h3 className="text-3xl font-bold text-white mb-6">Matriz de Priorización</h3>
                            <div className="bg-zinc-800/50 rounded-xl p-8 h-96 relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <p className="text-zinc-400">Matriz interactiva con drag & drop (implementación completa requeriría librerías adicionales)</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Quiz */}
                    {activeTool === 'quiz' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 mb-8"
                        >
                            <h3 className="text-3xl font-bold text-white mb-6">Quiz de Estrategia Digital</h3>
                            <p className="text-zinc-400 mb-6">8-10 preguntas para evaluar tu estrategia digital</p>
                            <button
                                onClick={() => setQuizScore(Math.floor(Math.random() * 40) + 60)}
                                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-xl hover:from-emerald-400 hover:to-teal-400 transition-all"
                            >
                                Comenzar Quiz
                            </button>
                            {quizScore && (
                                <div className="mt-8">
                                    <p className="text-2xl font-bold text-white mb-4">Tu Score: {quizScore}%</p>
                                    <p className="text-zinc-400">Recomendaciones personalizadas basadas en tus respuestas.</p>
                                </div>
                            )}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
