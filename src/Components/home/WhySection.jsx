import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/Components/portfolio/LanguageContext';
import { 
  Zap, Shield, Clock, Sparkles, 
  TrendingUp, Users, Heart, Globe,
  CheckCircle, ArrowRight
} from 'lucide-react';

export default function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const reasons = t.tools.why.features;
  const stats = t.tools.why.stats;

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            {t.tools.why.badge || t.tools.why.title}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {t.tools.why.title}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> {t.tools.why.titleHighlight || ''}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            {t.tools.why.subtitle}
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-12 md:mb-20">
          {reasons.map((reason, index) => {
            const IconComponent = [Zap, Shield, Clock, Sparkles, TrendingUp, Globe][index] || Zap;
            const colorClass = ['from-yellow-500 to-orange-500', 'from-emerald-500 to-teal-500', 'from-blue-500 to-cyan-500', 'from-violet-500 to-purple-500', 'from-rose-500 to-pink-500', 'from-indigo-500 to-blue-500'][index];
            return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl" />
              <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              
              <div className="relative p-3 md:p-6 rounded-2xl border border-slate-800 group-hover:border-slate-700 transition-colors">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-2 md:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-base md:text-xl font-semibold text-white mb-1 md:mb-2">{reason.title}</h3>
                <p className="text-xs md:text-slate-400 text-slate-500 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          )})}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-cyan-600/20 rounded-3xl blur-xl" />
          <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-800 p-4 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {stats.map((stat, index) => {
                const IconComponent = [Zap, Heart, Users, Shield][index] || Zap;
                return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <IconComponent className="w-5 h-5 md:w-8 md:h-8 text-violet-400 mx-auto mb-2 md:mb-3" />
                  <div className="text-xl md:text-4xl font-bold text-white mb-0.5 md:mb-1">{stat.value}</div>
                  <div className="text-[10px] md:text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              )})}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}