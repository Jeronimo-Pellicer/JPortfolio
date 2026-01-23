import React, { useState, useRef, useEffect, memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../portfolio/LanguageContext';
import { 
    LayoutGrid, 
    FileSpreadsheet, 
    FileText, 
    Image,
} from 'lucide-react';

export default function ResourceFilter({ activeFilter, onFilterChange }) {
    const { t } = useLanguage();
    
    const filters = [
        { id: 'all', label: t.resources.filters.all, icon: LayoutGrid },
        { id: 'template', label: t.resources.filters.template, icon: FileSpreadsheet },
        { id: 'guide', label: t.resources.filters.guide, icon: FileText },
        { id: 'infographic', label: t.resources.filters.infographic, icon: Image },
    ];
    const [hoveredFilter, setHoveredFilter] = useState(null);
    const [magnetPos, setMagnetPos] = useState({});
    const [bubbleStyle, setBubbleStyle] = useState({ width: 0, left: 0 });
    const containerRef = useRef(null);
    const itemRefs = useRef([]);

    // Calculate bubble position and size
    useEffect(() => {
        const activeIndex = filters.findIndex(f => f.id === activeFilter);
        const activeElement = itemRefs.current[activeIndex];
        
        if (activeElement && containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const activeRect = activeElement.getBoundingClientRect();
            
            setBubbleStyle({
                width: activeRect.width,
                left: activeRect.left - containerRect.left,
            });
        }
    }, [activeFilter]);

    const handleMouseMove = (e, filterId) => {
        const element = itemRefs.current[filters.findIndex(f => f.id === filterId)];
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);
        const magnetRange = 60;

        if (distance < magnetRange) {
            const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
            const magnetStrength = (magnetRange - distance) / magnetRange;
            const magnetX = Math.cos(angle) * magnetStrength * 4;
            const magnetY = Math.sin(angle) * magnetStrength * 4;

            setMagnetPos(prev => ({
                ...prev,
                [filterId]: { x: magnetX, y: magnetY }
            }));
        } else {
            setMagnetPos(prev => ({
                ...prev,
                [filterId]: { x: 0, y: 0 }
            }));
        }
    };

    const handleMouseLeave = (filterId) => {
        setMagnetPos(prev => ({
            ...prev,
            [filterId]: { x: 0, y: 0 }
        }));
        setHoveredFilter(null);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-8 sm:mb-12 px-4"
        >
            {/* Glassmorphic Container - Scroll horizontal en mobile si es necesario */}
            <div 
                ref={containerRef}
                className="relative inline-flex items-center gap-1 p-1.5 sm:p-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 overflow-x-auto max-w-full"
                style={{
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
                    contain: 'layout paint',
                    willChange: 'auto',
                }}
            >
                {/* Floating Elastic Bubble Background */}
                <motion.div
                    className="absolute rounded-full bg-gradient-to-r from-violet-500 to-purple-600"
                    style={{
                        height: 'calc(100% - 16px)',
                        top: '8px',
                        boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
                        willChange: 'width, left',
                        contain: 'layout paint',
                    }}
                    animate={{
                        width: bubbleStyle.width,
                        left: bubbleStyle.left,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 250,
                        damping: 30,
                        mass: 0.5,
                    }}
                />

                {/* Filter Items */}
                {filters.map((filter, index) => {
                    const isActive = activeFilter === filter.id;
                    const Icon = filter.icon;
                    const magnet = magnetPos[filter.id] || { x: 0, y: 0 };
                    
                    return (
                        <motion.button
                            key={filter.id}
                            ref={(el) => (itemRefs.current[index] = el)}
                            onClick={() => onFilterChange(filter.id)}
                            onMouseMove={(e) => handleMouseMove(e, filter.id)}
                            onMouseEnter={() => setHoveredFilter(filter.id)}
                            onMouseLeave={() => handleMouseLeave(filter.id)}
                            className="relative z-10 px-3 sm:px-5 py-2 sm:py-2.5 flex items-center gap-1.5 sm:gap-2 rounded-full cursor-pointer transition-all whitespace-nowrap"
                            style={{
                                color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                                willChange: 'transform',
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Magnetic Text & Icon */}
                            <motion.div
                                className="flex items-center gap-1.5 sm:gap-2"
                                animate={{
                                    x: magnet.x,
                                    y: magnet.y,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 200,
                                    damping: 20,
                                }}
                                style={{ willChange: 'transform' }}
                            >
                                <Icon 
                                    className="w-3.5 sm:w-4 h-3.5 sm:h-4" 
                                    style={{
                                        filter: isActive ? 'drop-shadow(0 0 3px rgba(139, 92, 246, 0.6))' : 'none'
                                    }}
                                />
                                <span 
                                    className={`text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                                        isActive ? 'text-white' : 'text-white/70'
                                    }`}
                                    style={{
                                        textShadow: isActive ? '0 0 4px rgba(139, 92, 246, 0.3)' : 'none',
                                        fontWeight: isActive ? 700 : 600,
                                    }}
                                >
                                    {filter.label}
                                </span>
                            </motion.div>

                            {/* Hover Glow Effect */}
                            {hoveredFilter === filter.id && !isActive && (
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-white/10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                />
                            )}
                        </motion.button>
                    );
                })}
            </div>
        </motion.div>
    );
}