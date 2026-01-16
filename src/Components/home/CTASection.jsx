import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/Components/portfolio/LanguageContext';
import { ArrowRight, Sparkles, Zap, Calculator, Users, Grid3X3, ClipboardCheck } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const tools = [
    { icon: Calculator, page: 'ROICalculator', label: t.tools.cta.toolLabels.roi },
    { icon: Users, page: 'BuyerPersona', label: t.tools.cta.toolLabels.persona },
    { icon: Grid3X3, page: 'PriorityMatrix', label: t.tools.cta.toolLabels.matrix },
    { icon: ClipboardCheck, page: 'StrategyQuiz', label: t.tools.cta.toolLabels.quiz },
  ];

  const handleScrollToTools = () => {
    const toolsSection = document.getElementById('herramientas');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[150px]"
        />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-cyan-600/20 rounded-3xl blur-2xl" />
          
          {/* Main card */}
          <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-800 p-8 md:p-12 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-300">{t.tools.cta.badge}</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            >
              {t.tools.cta.title}
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                {t.tools.cta.titleHighlight}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto mb-10"
            >
              {t.tools.cta.subtitle}
            </motion.p>

            {/* Tool quick access */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              {tools.map((tool, index) => (
                <Link key={tool.page} to={createPageUrl(tool.page)}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/50 transition-colors cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-violet-500/30 transition-shadow">
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      {tool.label}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            {/* Main CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={handleScrollToTools}
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="group px-10 py-5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl text-white font-semibold text-lg flex items-center gap-3 mx-auto shadow-lg shadow-violet-500/30 transition-all duration-500"
              >
                <Zap className="w-5 h-5" />
                {t.tools.cta.button}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-8 text-sm text-slate-500"
            >
              {t.tools.cta.trustBadges}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}