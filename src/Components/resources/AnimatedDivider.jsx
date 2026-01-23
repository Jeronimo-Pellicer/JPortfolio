import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedDivider() {
    return (
        <div className="w-full flex justify-center py-12">
            <motion.div
                className="relative w-[80%] max-w-4xl h-[2px] overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3 }}
            >
                {/* Gradient line that draws from left to right */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/60 to-transparent"
                    style={{
                        boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
                    }}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeOut',
                        delay: 0.1,
                    }}
                />
                
                {/* Additional glow effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent blur-sm"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeOut',
                        delay: 0.1,
                    }}
                />
            </motion.div>
        </div>
    );
}
