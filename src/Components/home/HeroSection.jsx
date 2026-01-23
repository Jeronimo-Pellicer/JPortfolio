import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Magnet from '@/Components/ui/Magnet';
import BlurTextAnimated from '@/Components/ui/BlurTextAnimated';
import { useLanguage } from '@/Components/portfolio/LanguageContext';

export default function HeroSection() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [showToolsDropdown, setShowToolsDropdown] = useState(false);

  const tools = [
    { name: t.tools.roi.title, page: 'ROICalculator', id: 'roi' },
    { name: t.tools.persona.title, page: 'BuyerPersona', id: 'persona' },
    { name: t.tools.matrix.title, page: 'PriorityMatrix', id: 'matrix' },
    { name: t.tools.quiz.title, page: 'StrategyQuiz', id: 'quiz' },
  ];

  const handleScrollToTools = () => {
    const toolsSection = document.getElementById('herramientas');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToTool = (toolId) => {
    const toolsSection = document.getElementById('herramientas');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const tool = document.getElementById(toolId);
        if (tool) {
          tool.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
    setShowToolsDropdown(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712]" style={{ contain: 'layout paint' }}>
      {/* Gradual blur overlay at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #030712)'
        }}
      />

      {/* Animated gradient background */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#030712] to-slate-950" />
        
        {/* Mesh gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
            willChange: 'transform',
            contain: 'layout style'
          }}
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)',
            filter: 'blur(100px)',
            willChange: 'transform',
            contain: 'layout style'
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[30%] w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
            willChange: 'transform',
            contain: 'layout style'
          }}
        />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <header className="py-6 flex justify-between items-start">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
            <span className="text-sm text-slate-400 font-medium">{t.tools.hero.badge}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:block max-w-sm text-right mt-4"
          >
            <p className="text-sm text-slate-500">
              {t.tools.hero.tagline}
            </p>
          </motion.div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 py-0">
          {/* Left - Title */}
          <div className="flex-1 flex flex-col items-center lg:items-start justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <BlurTextAnimated
                text={t.tools.hero.title}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
                color="rgb(249, 115, 22)"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-400 text-lg max-w-xl text-center lg:text-left mb-8"
            >
              {t.tools.hero.subtitle}
            </motion.p>

            {/* CTA with Magnet effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Magnet padding={150} magnetStrength={3}>
                <button
                  onClick={handleScrollToTools}
                  className="group px-8 py-4 text-white font-semibold text-lg flex items-center gap-3 rounded-xl bg-orange-500/80 hover:bg-orange-500 transition-colors shadow-lg shadow-orange-500/30"
                >
                  {t.tools.hero.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Magnet>
            </motion.div>
          </div>

          {/* Right - Tools Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full sm:w-auto"
          >
            <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden w-full sm:w-[320px]">
              {/* Header */}
              <div className="p-5 border-b border-white/10">
                <h3 className="text-white font-semibold mb-1">{t.tools.hero.exploreTools}</h3>
                <p className="text-sm text-slate-500">{t.tools.hero.freeAndNoRegistration}</p>
              </div>

              {/* Tools list */}
              <div className="divide-y divide-white/5">
                {tools.map((tool, index) => (
                  <Link key={tool.page} to={createPageUrl(tool.page)}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ backgroundColor: 'rgba(249, 115, 22, 0.1)', x: 4 }}
                      className="flex items-center justify-between py-4 px-5 cursor-pointer group transition-all duration-200"
                    >
                      <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">
                        {tool.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Footer stats */}
              <div className="p-5 bg-white/[0.02] border-t border-white/5">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>{t.tools.hero.stats.tools}</span>
                  <span>{t.tools.hero.stats.uses}</span>
                  <span>{t.tools.hero.stats.cost}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="pb-8 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border border-slate-700 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1 bg-orange-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}