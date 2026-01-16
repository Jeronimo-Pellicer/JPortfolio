import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/Components/portfolio/LanguageContext';
import { 
  Calculator, Users, Grid3X3, ClipboardCheck,
  Sparkles, Heart
} from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const tools = [
    { icon: Calculator, page: 'ROICalculator', label: t.tools.roi.title },
    { icon: Users, page: 'BuyerPersona', label: t.tools.persona.title },
    { icon: Grid3X3, page: 'PriorityMatrix', label: t.tools.matrix.title },
    { icon: ClipboardCheck, page: 'StrategyQuiz', label: t.tools.quiz.title },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">{t.tools.footer.title}</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              {t.tools.footer.description}
            </p>
            <p className="text-sm text-slate-500">
              {t.tools.footer.tagline} <Heart className="w-4 h-4 inline text-rose-500" /> {t.tools.footer.taglineBottom}
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.tools.footer.sections.tools}</h3>
            <ul className="space-y-3">
              {tools.map((tool) => (
                <li key={tool.page}>
                  <Link 
                    to={createPageUrl(tool.page)}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <tool.icon className="w-4 h-4 text-slate-500 group-hover:text-violet-400 transition-colors" />
                    {tool.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.tools.footer.sections.resources}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#herramientas" className="text-slate-400 hover:text-white transition-colors">
                  {t.tools.footer.links.allTools}
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-slate-400 hover:text-white transition-colors">
                  {t.tools.footer.links.howItWorks}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition-colors">
                  {t.tools.footer.links.faq}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            {t.tools.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-slate-500">
              {t.tools.footer.taglineBottom}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}