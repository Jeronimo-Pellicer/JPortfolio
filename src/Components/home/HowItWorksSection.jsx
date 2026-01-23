import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/Components/portfolio/LanguageContext';
import { 
  MousePointer, Settings, Download, Repeat,
  CheckCircle2
} from 'lucide-react';

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const steps = t.tools.howItWorks.steps;

  return (
    <section className="py-12 md:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="inline-block px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-medium mb-3 md:mb-6">
            {t.tools.howItWorks.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-6">
            {t.tools.howItWorks.title}
          </h2>
          <p className="text-sm md:text-lg text-slate-400 max-w-3xl mx-auto">
            {t.tools.howItWorks.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600/50 via-blue-600/50 to-emerald-600/50" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = [MousePointer, Settings, Download, Repeat][index] || MousePointer;
              const stepNumber = String(index + 1).padStart(2, '0');
              return (
              <motion.div
                key={stepNumber}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex flex-col"
              >
                {/* Step card */}
                <div className="relative group flex flex-col h-full px-2 md:px-4 lg:px-6 py-4 md:py-6">
                  {/* Number badge */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-6 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/30"
                  >
                    <IconComponent className="w-7 h-7 md:w-10 md:h-10 text-white" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-900 border-2 border-violet-500 flex items-center justify-center text-[10px] md:text-xs font-bold text-white">
                      {stepNumber}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="text-center flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-3">{step.title}</h3>
                      <p className="text-xs md:text-slate-400 text-slate-500 mb-3 md:mb-6">{step.description}</p>
                    </div>

                    {/* Details - Show first 2 on mobile, all on desktop */}
                    <div className="space-y-1.5 md:space-y-2 mt-auto">
                      {step.items.slice(0, 2).map((detail, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + index * 0.15 + i * 0.05 }}
                          className="flex items-start gap-2 text-[10px] md:text-sm text-slate-500"
                        >
                          <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{detail}</span>
                        </motion.div>
                      ))}
                      <div className="hidden md:block">
                        {step.items.slice(2).map((detail, i) => (
                          <motion.div
                            key={i + 2}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4 + index * 0.15 + (i + 2) * 0.05 }}
                            className="flex items-start gap-2 text-sm text-slate-500"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Arrow to next step - REMOVED */}
              </motion.div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}