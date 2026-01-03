import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Heart, Star } from 'lucide-react';

export default function MiniGame() {
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [score, setScore] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const icons = [Sparkles, Zap, Heart, Star];
    const [currentIcon, setCurrentIcon] = useState(0);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        // Make the dot "run away" from cursor
        const centerX = 50;
        const centerY = 50;
        const dx = x - position.x;
        const dy = y - position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 30 && !isDragging) {
            const escapeX = position.x - dx * 0.8;
            const escapeY = position.y - dy * 0.8;
            setPosition({
                x: Math.max(10, Math.min(90, escapeX)),
                y: Math.max(10, Math.min(90, escapeY))
            });
        }
    };

    const handleDotClick = () => {
        setScore(score + 1);
        setCurrentIcon((currentIcon + 1) % icons.length);
        
        // Random new position
        setPosition({
            x: Math.random() * 80 + 10,
            y: Math.random() * 80 + 10
        });
    };

    const Icon = icons[currentIcon];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-full h-full bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl overflow-hidden group hover:border-zinc-700/50 transition-all duration-500"
            onMouseMove={handleMouseMove}
        >
            {/* Background grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                    backgroundImage: 'linear-gradient(#00ffcc 1px, transparent 1px), linear-gradient(90deg, #00ffcc 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }} />
            </div>

            {/* Score display */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-4 left-4 bg-zinc-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/30"
            >
                <span className="text-emerald-400 font-bold text-sm">Score: {score}</span>
            </motion.div>

            {/* Instructions */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute top-4 right-4 bg-zinc-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/30"
            >
                <span className="text-zinc-400 text-xs">Catch me if you can!</span>
            </motion.div>

            {/* Dopamine dot */}
            <motion.button
                className="absolute w-16 h-16 cursor-pointer"
                style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    transform: 'translate(-50%, -50%)'
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 360]
                }}
                transition={{
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" }
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleDotClick}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
            >
                <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,255,204,0.6)] border-2 border-emerald-400">
                    <Icon className="w-8 h-8 text-white" />
                </div>
            </motion.button>

            {/* Floating particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Bottom text */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="inline-flex items-center gap-2 bg-zinc-800/80 backdrop-blur-sm px-6 py-3 rounded-full border border-zinc-700/50"
                >
                    <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span className="text-white text-sm font-medium">Dopamine Remedies</span>
                    <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                </motion.div>
            </div>
        </motion.div>
    );
}
