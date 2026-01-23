import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/Components/portfolio/LanguageContext';
import { 
  Calculator, Users, Grid3X3, ClipboardCheck, 
  ArrowRight, TrendingUp, Target, BarChart3, 
  DollarSign, UserCheck, Layers, Award,
  CheckCircle, Zap, Clock, Shield
} from 'lucide-react';

export default function ToolsSection() {
  const { t } = useLanguage();

  const tools = [
    {
      id: 'roi',
      page: 'ROICalculator',
      icon: Calculator,
      title: t.tools.roi.title,
      subtitle: t.tools.roi.subtitle,
      description: t.tools.roi.description,
      gradient: 'from-violet-600 to-purple-600',
      lightGradient: 'from-violet-500/20 to-purple-500/20',
      features: [
        { icon: DollarSign, text: t.tools.roi.features.realTime },
        { icon: Target, text: t.tools.roi.features.cpa },
        { icon: TrendingUp, text: t.tools.roi.features.projections },
        { icon: BarChart3, text: t.tools.roi.features.detailedMetrics },
      ],
      benefits: [
        t.tools.roi.benefits.items[0],
        t.tools.roi.benefits.items[1],
        t.tools.roi.benefits.items[2],
        t.tools.roi.benefits.items[3]
      ],
      stats: { users: t.tools.roi.stats.users, rating: t.tools.roi.stats.rating, time: t.tools.roi.stats.time },
      ctaText: t.tools.roi.cta,
      benefitsTitle: t.tools.roi.benefits.title,
      freeBadge: t.tools.roi.badge
    },
    {
      id: 'persona',
      page: 'BuyerPersona',
      icon: Users,
      title: t.tools.persona.title,
      subtitle: t.tools.persona.subtitle,
      description: t.tools.persona.description,
      gradient: 'from-blue-600 to-cyan-600',
      lightGradient: 'from-blue-500/20 to-cyan-500/20',
      features: [
        { icon: UserCheck, text: t.tools.persona.features.demographicProfiles },
        { icon: Target, text: t.tools.persona.features.goalsMotivations },
        { icon: Shield, text: t.tools.persona.features.painPoints },
        { icon: Layers, text: t.tools.persona.features.communicationChannels },
      ],
      benefits: [
        t.tools.persona.benefits.items[0],
        t.tools.persona.benefits.items[1],
        t.tools.persona.benefits.items[2],
        t.tools.persona.benefits.items[3]
      ],
      stats: { users: t.tools.persona.stats.users, rating: t.tools.persona.stats.rating, time: t.tools.persona.stats.time },
      ctaText: t.tools.persona.cta,
      benefitsTitle: t.tools.persona.benefits.title,
      freeBadge: t.tools.persona.badge
    },
    {
      id: 'matrix',
      page: 'PriorityMatrix',
      icon: Grid3X3,
      title: t.tools.matrix.title,
      subtitle: t.tools.matrix.subtitle,
      description: t.tools.matrix.description,
      gradient: 'from-emerald-600 to-teal-600',
      lightGradient: 'from-emerald-500/20 to-teal-500/20',
      features: [
        { icon: Zap, text: t.tools.matrix.features.quickWins },
        { icon: Layers, text: t.tools.matrix.features.dragDrop },
        { icon: Target, text: t.tools.matrix.features.quadrants },
        { icon: Clock, text: t.tools.matrix.features.visualPrioritization },
      ],
      benefits: [
        t.tools.matrix.benefits.items[0],
        t.tools.matrix.benefits.items[1],
        t.tools.matrix.benefits.items[2],
        t.tools.matrix.benefits.items[3]
      ],
      stats: { users: t.tools.matrix.stats.users, rating: t.tools.matrix.stats.rating, time: t.tools.matrix.stats.time },
      ctaText: t.tools.matrix.cta,
      benefitsTitle: t.tools.matrix.benefits.title,
      freeBadge: t.tools.matrix.badge
    },
    {
      id: 'quiz',
      page: 'StrategyQuiz',
      icon: ClipboardCheck,
      title: t.tools.quiz.title,
      subtitle: t.tools.quiz.subtitle,
      description: t.tools.quiz.description,
      gradient: 'from-orange-600 to-rose-600',
      lightGradient: 'from-orange-500/20 to-rose-500/20',
      features: [
        { icon: Award, text: t.tools.quiz.features.strategicQuestions },
        { icon: BarChart3, text: t.tools.quiz.features.detailedScore },
        { icon: CheckCircle, text: t.tools.quiz.features.personalizedRecommendations },
        { icon: TrendingUp, text: t.tools.quiz.features.improvementPlan },
      ],
      benefits: [
        t.tools.quiz.benefits.items[0],
        t.tools.quiz.benefits.items[1],
        t.tools.quiz.benefits.items[2],
        t.tools.quiz.benefits.items[3]
      ],
      stats: { users: t.tools.quiz.stats.users, rating: t.tools.quiz.stats.rating, time: t.tools.quiz.stats.time },
      ctaText: t.tools.quiz.cta,
      benefitsTitle: t.tools.quiz.benefits.title,
      freeBadge: t.tools.quiz.badge
    }
  ];

  return (
    <section id="herramientas" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
            {t.tools.section.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {t.tools.section.title}
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {t.tools.section.titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            {t.tools.section.subtitle}
          </p>
        </motion.div>

        {/* Tools grid - 2x2 on mobile, alternating on desktop */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {tools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>
        
        <div className="hidden lg:block space-y-32">
          {tools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} isDesktop />
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolCard({ tool, index, isDesktop = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;
  const navigate = useNavigate();

  const handleUseTool = () => {
    navigate(createPageUrl(tool.page));
  };

  return (
    <motion.div
      ref={ref}
      id={tool.id}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={isDesktop ? `grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}` : 'flex flex-col'}
    >
      {/* Content */}
      <div className={isDesktop ? (isEven ? '' : 'lg:col-start-2') : ''}>
        <motion.div
          initial={{ opacity: 0, x: isDesktop ? (isEven ? -30 : 30) : -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Icon and title */}
          <div className={`flex items-center ${isDesktop ? 'gap-4 mb-4' : 'gap-2 mb-2'}`}>
            <div className={`${isDesktop ? 'w-14 h-14' : 'w-10 h-10'} rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center shadow-lg`}>
              <tool.icon className={`${isDesktop ? 'w-7 h-7' : 'w-5 h-5'} text-white`} />
            </div>
            <div>
              <h3 className={`${isDesktop ? 'text-2xl sm:text-3xl' : 'text-sm'} font-bold text-white leading-tight`}>{tool.title}</h3>
              <p className={`${isDesktop ? 'text-slate-400' : 'text-[10px] text-slate-500'} leading-tight`}>{tool.subtitle}</p>
            </div>
          </div>

          {/* Description */}
          <p className={`${isDesktop ? 'text-lg mb-6' : 'text-[10px] mb-3'} text-slate-300 leading-relaxed`}>
            {tool.description}
          </p>

          {/* Features grid */}
          <div className={`grid grid-cols-${isDesktop ? '2' : '1'} ${isDesktop ? 'gap-4 mb-6' : 'gap-2 mb-3'}`}>
            {tool.features.slice(0, isDesktop ? 4 : 2).map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`flex items-center ${isDesktop ? 'gap-3 p-3' : 'gap-1.5 p-1.5'} rounded-xl bg-slate-800/50 border border-slate-700/50`}
              >
                <feature.icon className={`${isDesktop ? 'w-5 h-5' : 'w-3 h-3'} text-transparent bg-gradient-to-r ${tool.gradient} bg-clip-text`} style={{ color: index === 0 ? '#8b5cf6' : index === 1 ? '#3b82f6' : index === 2 ? '#10b981' : '#f97316' }} />
                <span className={`${isDesktop ? 'text-sm' : 'text-[9px]'} text-slate-300`}>{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Benefits - Only on desktop */}
          {isDesktop && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">{tool.benefitsTitle || 'Key Benefits'}</h4>
            <ul className="space-y-2">
              {tool.benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          )}

          {/* Stats and CTA */}
          <div className={`flex ${isDesktop ? 'flex-wrap items-center gap-6' : 'flex-col gap-2'}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleUseTool}
              className={`group ${isDesktop ? 'px-6 py-3' : 'px-3 py-1.5'} rounded-xl bg-gradient-to-r ${tool.gradient} text-white font-semibold flex items-center ${isDesktop ? 'gap-2' : 'gap-1'} shadow-lg ${isDesktop ? 'text-base' : 'text-[10px]'}`}
            >
              {tool.ctaText || 'Use Tool'}
              <ArrowRight className={`${isDesktop ? 'w-5 h-5' : 'w-3 h-3'} group-hover:translate-x-1 transition-transform`} />
            </motion.button>
            {isDesktop && (
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {tool.stats.users}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {tool.stats.time}
              </span>
            </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Visual - Only on desktop */}
      {isDesktop && (
        <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: isEven ? 30 : -30 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${tool.lightGradient} rounded-3xl blur-3xl opacity-50`} />
          
          {/* Card preview */}
          <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-800 p-8 shadow-2xl">
            {/* Mock UI */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center`}>
                    <tool.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="h-4 w-32 bg-slate-700 rounded" />
                    <div className="h-3 w-24 bg-slate-800 rounded mt-2" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-800" />
                  <div className="w-8 h-8 rounded-lg bg-slate-800" />
                </div>
              </div>

              {/* Content mockup */}
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50"
                  >
                    <div className="h-3 w-16 bg-slate-700 rounded mb-2" />
                    <div className="h-6 w-20 bg-gradient-to-r from-slate-700 to-slate-600 rounded" />
                  </motion.div>
                ))}
              </div>

              {/* Chart mockup */}
              <div className="h-32 rounded-xl bg-slate-800/50 border border-slate-700/50 p-4 flex items-end gap-2">
                {[40, 65, 45, 80, 55, 70, 85, 60].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${height}%` } : {}}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.5 }}
                    className={`flex-1 rounded-t bg-gradient-to-t ${tool.gradient} opacity-80`}
                  />
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <div className={`h-10 flex-1 rounded-xl bg-gradient-to-r ${tool.gradient} opacity-80`} />
                <div className="h-10 w-10 rounded-xl bg-slate-800 border border-slate-700" />
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30 flex items-center justify-center"
          >
            <Zap className="w-8 h-8 text-white" />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-sm"
          >
            <span className="text-emerald-400 text-sm font-medium">{tool.freeBadge || '✓ 100% Free'}</span>
          </motion.div>
        </motion.div>
        </div>
      )}
    </motion.div>
  );
}